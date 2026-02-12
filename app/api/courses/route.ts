import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import Course from '@/models/Course';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    const published = searchParams.get('published');
    
    const filter: Record<string, unknown> = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (level) {
      filter.level = level;
    }
    
    if (published !== null) {
      filter.isPublished = published === 'true';
    }
    
    const courses = await Course.find(filter)
      .select('-__v')
      .sort({ createdAt: -1 })
      .limit(50);
    
    return NextResponse.json({
      success: true,
      data: courses,
      count: courses.length,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch courses',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const course = await Course.create(body);
    
    return NextResponse.json(
      {
        success: true,
        data: course,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create course',
      },
      { status: 500 }
    );
  }
}
