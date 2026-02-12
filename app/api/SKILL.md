# API Routes - SKILL.md

## 📋 Overview

The `app/api/` directory contains all API endpoints for DAKIA Academy. These handle backend operations including data fetching, CRUD operations, authentication, and business logic.

## 🎯 Purpose

- **RESTful API**: Standard REST endpoints for resources
- **Data Operations**: CRUD for users, courses, content
- **Authentication**: Login, registration, session management
- **Business Logic**: Server-side processing and validation

## 📁 Structure

```
app/api/
├── health/
│   └── route.ts        # Health check endpoint
├── users/
│   └── route.ts        # User CRUD operations
└── courses/
    └── route.ts        # Course CRUD operations
```

## 🔧 Technical Skills Required

### 1. API Route Handlers
```tsx
// app/api/resource/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET - Fetch resources
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    
    // Fetch data
    const data = await fetchData({ page: parseInt(page), limit: parseInt(limit) });
    
    return NextResponse.json({
      success: true,
      data,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: data.length
      }
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// POST - Create resource
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create resource
    const result = await createResource(body);
    
    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create resource' },
      { status: 500 }
    );
  }
}

// PUT - Update resource
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      );
    }
    
    const result = await updateResource(id, updateData);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update resource' },
      { status: 500 }
    );
  }
}

// DELETE - Delete resource
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      );
    }
    
    await deleteResource(id);
    
    return NextResponse.json({ success: true, message: 'Resource deleted' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete resource' },
      { status: 500 }
    );
  }
}
```

### 2. Database Connection
```tsx
import { connectDB } from '@/lib/db/mongoose';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const users = await User.find()
      .select('-password') // Exclude password
      .sort({ createdAt: -1 })
      .limit(10);
    
    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Database error' },
      { status: 500 }
    );
  }
}
```

### 3. Input Validation with Zod
```tsx
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  department: z.string().optional(),
  position: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate
    const validationResult = userSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validationResult.error.errors
        },
        { status: 400 }
      );
    }
    
    // Process validated data
    const data = validationResult.data;
    // ...
  } catch (error) {
    // Error handling
  }
}
```

### 4. Authentication & Authorization
```tsx
import { hashPassword, verifyPassword } from '@/lib/auth/password';
import { generateToken } from '@/lib/auth/jwt';

// Register endpoint
export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();
    
    await connectDB();
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 409 }
      );
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'user'
    });
    
    // Generate token
    const token = generateToken({ userId: user._id, role: user.role });
    
    return NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      token
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

### 5. Error Handling Pattern
```tsx
class APIError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    
    // Throw custom errors
    if (!data) {
      throw new APIError('Resource not found', 404);
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (error instanceof APIError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.statusCode }
      );
    }
    
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## 📝 Best Practices

### 1. Response Format Standards
```tsx
// Success response
{
  "success": true,
  "data": { /* resource data */ },
  "message": "Optional success message"
}

// Error response
{
  "success": false,
  "error": "Error message",
  "details": { /* optional error details */ }
}

// Paginated response
{
  "success": true,
  "data": [ /* array of items */ ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### 2. HTTP Status Codes
```tsx
// 200 OK - Successful GET, PUT
// 201 Created - Successful POST
// 204 No Content - Successful DELETE
// 400 Bad Request - Validation error
// 401 Unauthorized - Not authenticated
// 403 Forbidden - Not authorized
// 404 Not Found - Resource not found
// 409 Conflict - Resource already exists
// 500 Internal Server Error - Server error
```

### 3. Query Parameters
```tsx
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Pagination
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // Filtering
  const role = searchParams.get('role');
  const department = searchParams.get('department');
  
  // Sorting
  const sortBy = searchParams.get('sortBy') || 'createdAt';
  const sortOrder = searchParams.get('sortOrder') || 'desc';
  
  // Build query
  const query: any = {};
  if (role) query.role = role;
  if (department) query.department = department;
  
  const users = await User.find(query)
    .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  
  const total = await User.countDocuments(query);
  
  return NextResponse.json({
    success: true,
    data: users,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
}
```

### 4. CORS Headers (if needed)
```tsx
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers });
}

export async function GET(request: NextRequest) {
  const data = await fetchData();
  return NextResponse.json({ data }, { headers });
}
```

## 🔒 Security Best Practices

### 1. Password Security
```tsx
import bcrypt from 'bcrypt';

// Hash password (NEVER store plain text)
const hashedPassword = await bcrypt.hash(password, 10);

// Verify password
const isValid = await bcrypt.compare(inputPassword, hashedPassword);
```

### 2. Input Sanitization
```tsx
// Remove dangerous characters
const sanitizeInput = (input: string) => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML tags
    .substring(0, 255); // Limit length
};
```

### 3. Rate Limiting
```tsx
// Implement rate limiting to prevent abuse
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  const { success } = await rateLimit(ip, 5, 60000); // 5 requests per minute
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }
  
  // Process request
}
```

### 4. Environment Variables
```tsx
// NEVER expose secrets in client code
const dbUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

if (!dbUri || !jwtSecret) {
  throw new Error('Missing required environment variables');
}
```

## 📊 API Documentation

### Health Check
```
GET /api/health
Response: { "status": "ok", "timestamp": "2024-..." }
```

### Users API
```
GET /api/users?page=1&limit=10&role=admin
POST /api/users
PUT /api/users
DELETE /api/users?id=123
```

### Courses API
```
GET /api/courses?category=sales&level=beginner
POST /api/courses
PUT /api/courses
DELETE /api/courses?id=456
```

## ✅ Checklist for New API Routes

- [ ] Use proper HTTP methods (GET, POST, PUT, DELETE)
- [ ] Implement input validation
- [ ] Add error handling
- [ ] Return consistent response format
- [ ] Use appropriate status codes
- [ ] Connect to database if needed
- [ ] Add authentication check if needed
- [ ] Implement authorization if needed
- [ ] Sanitize user inputs
- [ ] Hash passwords with bcrypt
- [ ] Log errors for debugging
- [ ] Add rate limiting for sensitive endpoints
- [ ] Test all endpoints thoroughly
- [ ] Document API in README or Swagger

## 📚 Related Documentation

- [App Directory SKILL.md](../SKILL.md)
- [Models SKILL.md](../../models/SKILL.md)
- [Lib SKILL.md](../../lib/SKILL.md)
- [Coding Conventions](../../docs/CODING_CONVENTIONS.md)

## 🎓 Key Takeaways

1. **Consistent Format** - Use standard response structure
2. **Proper Status Codes** - Return appropriate HTTP status codes
3. **Input Validation** - Always validate and sanitize inputs
4. **Error Handling** - Graceful error responses with details
5. **Security** - Hash passwords, validate tokens, sanitize inputs
6. **Database** - Connect properly, handle errors
7. **Documentation** - Document all endpoints clearly
