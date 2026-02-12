import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import User from '@/models/User';
import { hashPassword } from '@/lib/auth/password';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const department = searchParams.get('department');
    
    const filter: Record<string, unknown> = {};
    
    if (role) {
      filter.role = role;
    }
    
    if (department) {
      filter.department = department;
    }
    
    const users = await User.find(filter)
      .select('-password -__v')
      .sort({ createdAt: -1 })
      .limit(50);
    
    return NextResponse.json({
      success: true,
      data: users,
      count: users.length,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch users',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Hash password before saving
    if (body.password) {
      body.password = await hashPassword(body.password);
    }
    
    const user = await User.create(body);
    
    // Remove password from response
    const userResponse = user.toObject();
    // @ts-expect-error - Removing password field from response
    delete userResponse.password;
    
    return NextResponse.json(
      {
        success: true,
        data: userResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    
    if ((error as { code?: number }).code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already exists',
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create user',
      },
      { status: 500 }
    );
  }
}
