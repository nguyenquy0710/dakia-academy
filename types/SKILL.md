# Types Directory - SKILL.md

## 📋 Overview

The `types/` directory contains TypeScript type definitions, interfaces, and type utilities used throughout DAKIA Academy. This ensures type safety and better development experience.

## 🎯 Purpose

- **Type Safety**: Define types for all data structures
- **Reusability**: Share types across components and modules
- **Documentation**: Types serve as inline documentation
- **IDE Support**: Enable autocomplete and type checking
- **Error Prevention**: Catch type errors at compile time

## 📁 Structure

```
types/
└── models.ts      # Type definitions for database models
```

## 🔧 Technical Skills Required

### 1. Basic Type Definitions
```tsx
// types/models.ts
import { Types } from 'mongoose';

// User types
export interface User {
  _id: Types.ObjectId | string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'super-admin';
  department?: string;
  position?: string;
  enrolledCourses: EnrolledCourse[];
  certificates: Certificate[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface EnrolledCourse {
  courseId: Types.ObjectId | string;
  progress: number;
  completedLessons: string[];
  lastAccessedAt: Date | string;
  completedAt?: Date | string;
}

export interface Certificate {
  courseId: Types.ObjectId | string;
  issuedAt: Date | string;
  certificateUrl: string;
}

// Course types
export interface Course {
  _id: Types.ObjectId | string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  author: string;
  thumbnail?: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  lessons: Lesson[];
  totalStudents: number;
  averageRating?: number;
  isPublished: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Lesson {
  id: string;
  title: string;
  order: number;
  contentId: Types.ObjectId | string;
  duration?: number;
}

// Content types
export interface Content {
  _id: Types.ObjectId | string;
  courseId: Types.ObjectId | string;
  lessonId: string;
  markdownContent: string;
  htmlContent: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
```

### 2. API Response Types
```tsx
// types/api.ts
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: Record<string, any>;
}
```

### 3. Form Types
```tsx
// types/forms.ts
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  department?: string;
  position?: string;
}

export interface CourseFormData {
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  author: string;
  thumbnail?: string;
  tags: string[];
}
```

### 4. Component Props Types
```tsx
// types/components.ts
import { ReactNode } from 'react';

export interface CardProps {
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export interface NavbarProps {
  currentPath: string;
  user?: {
    name: string;
    email: string;
    role: string;
  };
}
```

### 5. Utility Types
```tsx
// types/utils.ts

// Make all properties optional
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Make all properties required
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Pick specific properties
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit specific properties
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Example: User without password
export type PublicUser = Omit<User, 'password'>;

// Example: User for creation (without _id, timestamps)
export type CreateUserInput = Omit<User, '_id' | 'createdAt' | 'updatedAt'>;

// Example: User for update (all optional except _id)
export type UpdateUserInput = Partial<Omit<User, '_id'>> & { _id: string };
```

### 6. Union and Intersection Types
```tsx
// Union types
export type UserRole = 'user' | 'admin' | 'super-admin';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseCategory = 'Sales' | 'Marketing' | 'Data Analytics' | 'Automation';

// Intersection types
export type UserWithCourses = User & {
  courses: Course[];
};

export type CourseWithAuthor = Course & {
  authorDetails: {
    name: string;
    bio: string;
    avatar?: string;
  };
};
```

### 7. Generic Types
```tsx
// Generic response wrapper
export interface Response<T> {
  data: T;
  status: number;
  message?: string;
}

// Generic paginated data
export interface Paginated<T> {
  items: T[];
  page: number;
  totalPages: number;
  totalItems: number;
}

// Usage
const users: Paginated<User> = {
  items: [],
  page: 1,
  totalPages: 10,
  totalItems: 100,
};
```

### 8. Type Guards
```tsx
// types/guards.ts

// Check if response is error
export function isErrorResponse(response: any): response is ErrorResponse {
  return !response.success && typeof response.error === 'string';
}

// Check if user is admin
export function isAdmin(user: User): boolean {
  return user.role === 'admin' || user.role === 'super-admin';
}

// Type guard for checking if value is defined
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

// Usage
if (isErrorResponse(response)) {
  console.error(response.error);
} else {
  console.log(response.data);
}
```

## 📝 Best Practices

### 1. Use Interfaces for Objects
```tsx
// ✅ GOOD - Use interface for object shapes
interface User {
  name: string;
  email: string;
}

// ❌ BAD - Don't use type for simple objects
type User = {
  name: string;
  email: string;
};
```

### 2. Use Type for Unions and Aliases
```tsx
// ✅ GOOD - Use type for unions
type Role = 'user' | 'admin';
type ID = string | number;

// ✅ GOOD - Use type for complex aliases
type ResponseData = User | Course | Content;
```

### 3. Prefer Unknown Over Any
```tsx
// ❌ BAD - Avoid 'any'
function process(data: any) {
  return data.value;
}

// ✅ GOOD - Use 'unknown' and type guard
function process(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return (data as { value: any }).value;
  }
  throw new Error('Invalid data');
}
```

### 4. Export All Types
```tsx
// Always export types for reuse
export interface User { /* ... */ }
export type UserRole = 'user' | 'admin';
export interface CreateUserInput { /* ... */ }
```

### 5. Use Descriptive Names
```tsx
// ✅ GOOD - Clear, descriptive names
interface UserProfile { /* ... */ }
interface CourseEnrollment { /* ... */ }

// ❌ BAD - Vague names
interface Data { /* ... */ }
interface Info { /* ... */ }
```

### 6. Group Related Types
```tsx
// Group types by domain
// User-related types
export interface User { /* ... */ }
export interface UserProfile { /* ... */ }
export type UserRole = 'user' | 'admin';

// Course-related types
export interface Course { /* ... */ }
export interface Lesson { /* ... */ }
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
```

## 🔧 Advanced Patterns

### 1. Conditional Types
```tsx
// Extract types based on condition
type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

// Example: Make all fields required and non-nullable
type RequiredUser = NonNullableFields<Required<User>>;
```

### 2. Mapped Types
```tsx
// Make all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Make all properties nullable
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

### 3. Template Literal Types
```tsx
// Type-safe event names
type EventName = 'click' | 'hover' | 'focus';
type EventHandler = `on${Capitalize<EventName>}`;
// Result: 'onClick' | 'onHover' | 'onFocus'
```

## ✅ Checklist for New Types

- [ ] Use descriptive, clear names
- [ ] Export all types for reuse
- [ ] Add JSDoc comments for complex types
- [ ] Use interface for object shapes
- [ ] Use type for unions and aliases
- [ ] Avoid 'any' - use 'unknown' if needed
- [ ] Group related types together
- [ ] Create utility types for common patterns
- [ ] Add type guards for runtime checks
- [ ] Document optional fields with ?
- [ ] Use readonly for immutable properties

## 📚 Related Documentation

- [Models SKILL.md](../models/SKILL.md)
- [Coding Conventions](../docs/CODING_CONVENTIONS.md)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 🎓 Key Takeaways

1. **Type Safety** - Define types for all data structures
2. **Reusability** - Export and reuse types across the app
3. **Clarity** - Use descriptive names and comments
4. **Avoid Any** - Use unknown or proper types
5. **Utility Types** - Leverage TypeScript's built-in utilities
6. **Type Guards** - Add runtime type checking
7. **Documentation** - Types serve as inline documentation
