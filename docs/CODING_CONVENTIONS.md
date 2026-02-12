# DAKIA Academy - Coding Conventions

Quy ước lập trình và best practices cho DAKIA Academy.

## 📋 Table of Contents

- [General Principles](#general-principles)
- [TypeScript Guidelines](#typescript-guidelines)
- [React Component Patterns](#react-component-patterns)
- [File Structure](#file-structure)
- [Naming Conventions](#naming-conventions)
- [Bootstrap Usage](#bootstrap-usage)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Security](#security)
- [Accessibility](#accessibility)

---

## 🎯 General Principles

### Code in English, UI in Vietnamese

```tsx
// ✅ GOOD: Code in English
interface CourseData {
  title: string;
  description: string;
  level: string;
}

// UI text in Vietnamese
<h1>{course.title}</h1>
<p>Đăng ký khóa học ngay</p>

// ❌ BAD: Code in Vietnamese
interface DuLieuKhoaHoc {
  tieuDe: string;
  moTa: string;
}
```

### DRY (Don't Repeat Yourself)

```tsx
// ✅ GOOD: Extract reusable components
const CourseCard = ({ course }) => (
  <div className="card">{/* ... */}</div>
);

courses.map(course => <CourseCard course={course} />);

// ❌ BAD: Duplicate code
courses.map(course => (
  <div className="card">
    {/* Duplicated structure */}
  </div>
));
```

### Single Responsibility

```tsx
// ✅ GOOD: Each function does one thing
function validateEmail(email: string): boolean { /* ... */ }
function sendEmail(to: string, subject: string): void { /* ... */ }

// ❌ BAD: Function does too much
function validateAndSendEmail(email: string) {
  // Validation + sending in one function
}
```

---

## 📘 TypeScript Guidelines

### Always Use TypeScript Strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Define Interfaces for Data Structures

```tsx
// ✅ GOOD: Clear interface definition
interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  status: 'active' | 'coming-soon';
  slug?: string;
}

// ✅ GOOD: Use the interface
const course: Course = {
  id: '1',
  title: 'AI cho Sales',
  // ...
};

// ❌ BAD: Using 'any'
const course: any = { /* ... */ };
```

### Never Use 'any'

```tsx
// ✅ GOOD: Proper typing
function processData(data: CourseData[]): ProcessedData {
  return data.map(item => transform(item));
}

// ❌ BAD: Using 'any'
function processData(data: any): any {
  return data.map((item: any) => transform(item));
}

// ✅ GOOD: Use 'unknown' if type is truly unknown
function handleData(data: unknown) {
  if (isValidData(data)) {
    // Type guard narrows the type
    processData(data);
  }
}
```

### Use Type Guards

```tsx
// ✅ GOOD: Type guard
function isCourse(obj: unknown): obj is Course {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj
  );
}

// Usage
if (isCourse(data)) {
  console.log(data.title); // TypeScript knows it's a Course
}
```

### Avoid Type Casting with 'as'

```tsx
// ❌ BAD: Type casting
const data = response as Course;

// ✅ GOOD: Validate and use type guard
if (isCourse(response)) {
  const data = response; // Properly typed
}
```

---

## ⚛️ React Component Patterns

### Functional Components with TypeScript

```tsx
// ✅ GOOD: Functional component with proper typing
import { FC } from 'react';

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
}

export const CourseCard: FC<CourseCardProps> = ({ course, onEnroll }) => {
  const handleClick = () => {
    onEnroll?.(course.id);
  };

  return (
    <div className="card">
      <h3>{course.title}</h3>
      <button onClick={handleClick}>Đăng ký</button>
    </div>
  );
};

// ❌ BAD: No typing
export const CourseCard = ({ course, onEnroll }) => {
  return <div>{/* ... */}</div>;
};
```

### Server Components (Default) vs Client Components

```tsx
// ✅ Server Component (default in Next.js App Router)
// app/(client)/page.tsx
export default async function HomePage() {
  const data = await fetchData();
  
  return (
    <div>{/* Static content */}</div>
  );
}

// ✅ Client Component (when needed)
// app/(client)/courses/page.tsx
'use client';

import { useState } from 'react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>{/* Interactive content */}</div>
  );
}
```

### Component Structure

```tsx
// ✅ GOOD: Clear component structure
'use client';

import { FC, useState, useEffect } from 'react';

// 1. Type definitions
interface Props {
  // ...
}

// 2. Component
export const MyComponent: FC<Props> = ({ prop1, prop2 }) => {
  // 3. State
  const [state, setState] = useState<StateType>(initialValue);
  
  // 4. Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 5. Event handlers
  const handleClick = () => {
    // Handle event
  };
  
  // 6. Render helpers
  const renderItem = (item: ItemType) => {
    return <div>{item.name}</div>;
  };
  
  // 7. Return JSX
  return (
    <div>
      {/* Component content */}
    </div>
  );
};
```

### Use React Hooks Properly

```tsx
// ✅ GOOD: Proper hook usage
import { useState, useMemo } from 'react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  
  // Memoized filtered results
  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, courses]);
  
  return <div>{/* ... */}</div>;
}

// ❌ BAD: Filtering on every render
export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  
  // This runs on every render!
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return <div>{/* ... */}</div>;
}
```

---

## 📁 File Structure

### Directory Organization

```
app/
├── (client)/              # Public-facing pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Client layout
│   ├── courses/
│   │   ├── page.tsx       # Courses listing
│   │   └── [slug]/
│   │       └── page.tsx   # Course detail
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── (admin)/               # Admin pages
│   └── admin/
│       ├── dashboard/
│       ├── users/
│       └── courses/
├── api/                   # API routes
│   ├── health/
│   ├── users/
│   └── courses/
├── globals.css            # Global styles
└── layout.tsx             # Root layout

lib/                       # Utility functions
├── db/
│   └── mongoose.ts
├── auth/
│   └── password.ts
└── markdown/
    └── converter.ts

models/                    # MongoDB models
├── User.ts
├── Course.ts
└── Content.ts

types/                     # TypeScript types
└── models.ts

components/                # Reusable components (if needed)
├── client/
├── admin/
└── shared/
```

### File Naming Conventions

```
✅ Components:     PascalCase       CourseCard.tsx
✅ Pages:          page.tsx         page.tsx
✅ Layouts:        layout.tsx       layout.tsx
✅ API Routes:     route.ts         route.ts
✅ Utils:          camelCase        formatDate.ts
✅ Types:          PascalCase       CourseTypes.ts
✅ Models:         PascalCase       User.ts
```

---

## 🏷️ Naming Conventions

### Variables & Functions

```tsx
// ✅ GOOD: camelCase for variables and functions
const userName = 'John Doe';
const isActive = true;

function getUserById(id: string) { /* ... */ }
function validateEmail(email: string) { /* ... */ }

// ❌ BAD: Inconsistent naming
const UserName = 'John';
const is_active = true;
function GetUserById(id) { /* ... */ }
```

### Constants

```tsx
// ✅ GOOD: UPPER_SNAKE_CASE for constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_PAGE_SIZE = 20;

// ❌ BAD: lowercase for constants
const maxFileSize = 5000000;
```

### Components

```tsx
// ✅ GOOD: PascalCase for components
export const CourseCard: FC<Props> = () => { /* ... */ };
export const UserProfile: FC<Props> = () => { /* ... */ };

// ❌ BAD: camelCase or kebab-case
export const courseCard = () => { /* ... */ };
export const user-profile = () => { /* ... */ };
```

### Boolean Variables

```tsx
// ✅ GOOD: Use is/has/should prefix
const isLoading = true;
const hasError = false;
const shouldRedirect = true;

// ❌ BAD: Ambiguous names
const loading = true;
const error = false;
```

### Event Handlers

```tsx
// ✅ GOOD: handle prefix
const handleClick = () => { /* ... */ };
const handleSubmit = (e: FormEvent) => { /* ... */ };
const handleSearchChange = (query: string) => { /* ... */ };

// ❌ BAD: Inconsistent naming
const onClick = () => { /* ... */ };
const submitForm = () => { /* ... */ };
```

---

## 🎨 Bootstrap Usage

### Use Bootstrap Classes Consistently

```tsx
// ✅ GOOD: Bootstrap utilities
<div className="d-flex justify-content-between align-items-center">
  <span>Content</span>
  <button className="btn btn-primary">Action</button>
</div>

// ❌ BAD: Mixing Bootstrap with custom styles
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span>Content</span>
  <button className="btn btn-primary">Action</button>
</div>
```

### Common Bootstrap Patterns

```tsx
// Grid system
<div className="row g-4">
  <div className="col-12 col-md-6 col-lg-4">Column</div>
</div>

// Flexbox
<div className="d-flex gap-3 flex-wrap">Items</div>

// Spacing
<div className="p-4 mb-3">Padded content</div>

// Typography
<h1 className="display-1 fw-bold">Large heading</h1>
<p className="lead">Lead paragraph</p>
<small className="text-muted">Small text</small>

// Cards
<div className="card border shadow-sm">
  <div className="card-body p-4">Content</div>
</div>

// Buttons
<button className="btn btn-primary btn-lg rounded-pill">CTA</button>
<button className="btn btn-outline-primary">Secondary</button>
```

### Responsive Utilities

```tsx
// ✅ GOOD: Mobile-first responsive
<div className="d-block d-md-flex">
  {/* Block on mobile, flex on desktop */}
</div>

<div className="col-12 col-md-6 col-lg-4">
  {/* Full width mobile, half tablet, third desktop */}
</div>

// Hide/show based on breakpoint
<div className="d-none d-md-block">Desktop only</div>
<div className="d-block d-md-none">Mobile only</div>
```

---

## 🔄 State Management

### Local State with useState

```tsx
// ✅ GOOD: Typed state
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

// Update state
setCount(prev => prev + 1);
setUser({ id: '1', name: 'John' });
```

### Form State

```tsx
// ✅ GOOD: Form state management
'use client';

import { useState, FormEvent } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await registerUser(formData);
      // Success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {/* ... */}
    </form>
  );
}
```

### Optimized Filtering with useMemo

```tsx
// ✅ GOOD: Memoized computation
const filteredCourses = useMemo(() => {
  if (!searchQuery.trim()) return courses;
  
  const query = searchQuery.toLowerCase();
  return courses.filter(course =>
    course.title.toLowerCase().includes(query) ||
    course.description.toLowerCase().includes(query)
  );
}, [searchQuery, courses]);
```

---

## 🔌 API Integration

### API Route Pattern

```tsx
// app/api/courses/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import Course from '@/models/Course';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    
    const query: any = {};
    if (category) query.category = category;
    if (level) query.level = level;
    
    const courses = await Course.find(query);
    
    return NextResponse.json({ 
      success: true,
      data: courses 
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validate input
    if (!body.title || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const course = await Course.create(body);
    
    return NextResponse.json({ 
      success: true,
      data: course 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create course' },
      { status: 500 }
    );
  }
}
```

### Client-Side API Calls

```tsx
// ✅ GOOD: Proper error handling
async function fetchCourses() {
  try {
    const response = await fetch('/api/courses');
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}
```

---

## ⚠️ Error Handling

### Try-Catch Pattern

```tsx
// ✅ GOOD: Comprehensive error handling
async function processData() {
  try {
    const data = await fetchData();
    const processed = transform(data);
    return processed;
  } catch (error) {
    console.error('Error processing data:', error);
    
    // Re-throw or handle
    if (error instanceof ValidationError) {
      // Handle validation error
      showErrorMessage(error.message);
    } else {
      // Generic error
      showErrorMessage('Something went wrong');
    }
    
    throw error;
  }
}
```

### Error Boundaries (for Client Components)

```tsx
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="alert alert-danger">
          Something went wrong. Please refresh the page.
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 🔒 Security

### Password Hashing

```tsx
// lib/auth/password.ts
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
```

### Input Validation

```tsx
// ✅ GOOD: Always validate user input
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate required fields
  if (!body.email || !body.password) {
    return NextResponse.json(
      { error: 'Email and password required' },
      { status: 400 }
    );
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }
  
  // Validate password strength
  if (body.password.length < 8) {
    return NextResponse.json(
      { error: 'Password must be at least 8 characters' },
      { status: 400 }
    );
  }
  
  // Process...
}
```

### Environment Variables

```tsx
// ✅ GOOD: Use environment variables for secrets
// .env.local (NEVER commit this file)
MONGODB_URI=mongodb://...
JWT_SECRET=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret

// Usage
const dbUri = process.env.MONGODB_URI;
if (!dbUri) {
  throw new Error('MONGODB_URI not configured');
}
```

---

## ♿ Accessibility

### Semantic HTML

```tsx
// ✅ GOOD: Semantic HTML
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>

// ❌ BAD: Div soup
<div>
  <div>
    <div><a href="/">Home</a></div>
  </div>
</div>
```

### ARIA Labels

```tsx
// ✅ GOOD: Descriptive labels
<button 
  aria-label="Đóng modal"
  onClick={handleClose}
>
  ×
</button>

<input 
  type="search"
  aria-label="Tìm kiếm khóa học"
  placeholder="Tìm kiếm..."
/>
```

### Keyboard Navigation

```tsx
// ✅ GOOD: Keyboard accessible
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Clickable div
</div>
```

### Focus States

```css
/* ✅ GOOD: Visible focus states */
.btn:focus {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}

/* ❌ BAD: Removing focus outline */
.btn:focus {
  outline: none; /* Don't do this! */
}
```

---

## ✅ Code Review Checklist

Trước khi commit code:

### General
- [ ] Code viết bằng tiếng Anh
- [ ] UI text bằng tiếng Việt
- [ ] Không có console.log trong production code
- [ ] No hardcoded values (use constants/env vars)

### TypeScript
- [ ] Strict mode enabled
- [ ] No 'any' types
- [ ] Proper interfaces defined
- [ ] Type guards where needed

### React
- [ ] Functional components used
- [ ] Proper use of hooks
- [ ] Server vs Client components appropriate
- [ ] Memoization where beneficial

### Styling
- [ ] Bootstrap classes used consistently
- [ ] AI Tech Blue color scheme
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility standards met

### Performance
- [ ] No unnecessary re-renders
- [ ] Images optimized
- [ ] Lazy loading where appropriate
- [ ] Bundle size reasonable

### Security
- [ ] Input validation
- [ ] Passwords hashed with bcrypt
- [ ] No secrets in code
- [ ] Environment variables used

### Testing
- [ ] Build succeeds (`npm run build`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Manual testing completed

---

**Last updated**: February 12, 2026
