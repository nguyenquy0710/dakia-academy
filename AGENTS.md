# AGENTS.md

This file provides guidance on how to work with the DAKIA Academy repository.

## Project Overview

DAKIA Academy is an online learning platform built with Next.js, designed specifically to train DAKIA Tech employees on AI skills in Sales and Marketing. The project uses Next.js App Router with TypeScript, MongoDB for data persistence, and implements both a public learning platform (Web Client) and an administrative interface (Web Admin).

## General Guidelines

- Always use **npm** as the package manager
- **Code in English** for variables, functions, and comments
- **UI text and content in Vietnamese** (with English support)
- Use **mermaid diagrams** in MD files when you need to visualize architecture or workflows
- Follow the conventions in `.github/copilot-instructions.md` for detailed coding standards
- When starting new work, create a branch from `main` with a descriptive name (e.g., `feature/user-authentication`, `fix/course-enrollment`)

## Essential Commands

### Development
Start the development server:

```powershell
npm run dev
```

The application will be available at:
- Web Client: `http://localhost:3000`
- Web Admin: `http://localhost:3000/admin`

### Building
Build the application for production:

```powershell
npm run build
```

### Testing
Run all tests:

```powershell
npm test
```

Run tests in watch mode:

```powershell
npm run test:watch
```

### Code Quality
Lint code:

```powershell
npm run lint
```

Fix linting issues:

```powershell
npm run lint:fix
```

Type checking:

```powershell
npm run type-check
```

Format code:

```powershell
npm run format
```

Always run lint and type-check before committing code to ensure quality.

## Architecture Overview

**Structure:** Next.js App Router with TypeScript and MongoDB

### Directory Structure

The project follows this structure:

```
dakia-academy/
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (client)/             # Web Client routes (public)
│   │   ├── (admin)/              # Web Admin routes (protected)
│   │   └── api/                  # API routes
│   ├── components/               # Reusable components
│   │   ├── client/               # Client-specific components
│   │   ├── admin/                # Admin-specific components
│   │   └── shared/               # Shared components
│   ├── lib/                      # Utility functions
│   │   ├── db/                   # Database utilities
│   │   ├── markdown/             # Markdown processing
│   │   └── auth/                 # Authentication utilities
│   ├── models/                   # MongoDB models
│   │   ├── User.ts
│   │   ├── Course.ts
│   │   └── Content.ts
│   ├── types/                    # TypeScript types
│   └── styles/                   # Global styles
├── content/                      # Markdown course content
│   └── courses/
├── public/                       # Static assets
└── .env.local                    # Environment variables
```

### Key Application Areas

1. **Web Client**: Public-facing learning platform where employees access courses
2. **Web Admin**: Administrative interface for managing users, courses, and content
3. **API Layer**: RESTful API routes for data operations
4. **Content System**: Markdown-based course content with HTML conversion

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript/JavaScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js with JWT
- **Password Security**: bcrypt (salt rounds >= 10)
- **Frontend**: React with TypeScript
- **Styling**: CSS Modules / Tailwind CSS / Styled Components
- **Markdown Processing**: unified, remark, rehype
- **Form Validation**: zod or yup
- **State Management**: React Context API or Zustand
- **API Client**: axios or native fetch

## Database Schema

### Key Collections

#### Users Collection
```typescript
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;              // Hashed with bcrypt
  role: 'admin' | 'user';
  department?: string;
  position?: string;
  enrolledCourses: {
    courseId: ObjectId;
    progress: number;            // 0-100
    completedLessons: string[];
    lastAccessedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
```

#### Courses Collection
```typescript
interface Course {
  _id: ObjectId;
  title: string;
  slug: string;                  // URL-friendly identifier
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: {
    id: string;
    title: string;
    order: number;
    contentId: ObjectId;
  }[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Contents Collection
```typescript
interface Content {
  _id: ObjectId;
  courseId: ObjectId;
  lessonId: string;
  markdownContent: string;       // Original Markdown
  htmlContent: string;           // Converted HTML
  createdAt: Date;
  updatedAt: Date;
}
```

## Key Development Patterns

### TypeScript Best Practices
- **NEVER use `any` type** - use proper types or `unknown`
- **Avoid type casting with `as`** - prefer type guards
- **Define interfaces in `src/types/`** for reusability
- **Use strict mode** - ensure `strict: true` in tsconfig.json

### Component Structure
Follow this pattern for React components:

```typescript
import { FC } from 'react';

interface ComponentProps {
  // Props definition
}

export const ComponentName: FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    // JSX
  );
};
```

### API Routes Pattern
```typescript
// src/app/api/[resource]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    // Logic
    return NextResponse.json({ data: [] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' }, 
      { status: 500 }
    );
  }
}
```

### Security Best Practices

#### Password Hashing
ALWAYS use bcrypt with salt rounds >= 10:

```typescript
import bcrypt from 'bcrypt';

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Verify password
const isValid = await bcrypt.compare(password, hashedPassword);
```

#### Environment Variables
Never commit `.env.local` to version control:

```bash
# .env.local (DO NOT commit)
MONGODB_URI=mongodb://...
JWT_SECRET=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

### Markdown to HTML Conversion

Use the unified pipeline for processing:

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
    
  return result.toString();
}
```

### Frontend Development
- **All UI text must be in Vietnamese** (primary) with English support
- **Use CSS variables** - never hardcode spacing/colors as px values
- **Responsive design** - mobile-first approach
- **Accessibility** - semantic HTML, ARIA labels, keyboard navigation

### Testing Guidelines
- **Unit tests**: Test utilities and helper functions
- **Component tests**: Use React Testing Library
- **Integration tests**: Test API routes and database operations
- **E2E tests**: Critical user flows

### Error Handling

#### Client-Side
```typescript
try {
  const response = await fetch('/api/courses');
  if (!response.ok) throw new Error('Failed to fetch');
  const data = await response.json();
} catch (error) {
  console.error('Error:', error);
  // Show user-friendly error message
}
```

#### Server-Side
```typescript
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const courses = await Course.find();
    return NextResponse.json({ courses });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Development Workflow

### Common Development Tasks

When implementing a new feature:

1. **Create a new branch** from `main`
2. **Define types** in `src/types/` if needed
3. **Create database models** in `src/models/` if needed
4. **Implement API endpoints** in `src/app/api/`
5. **Create UI components** in `src/components/`
6. **Add pages** in `src/app/(client)` or `src/app/(admin)`
7. **Write tests** for critical functionality
8. **Update documentation** if needed
9. **Run quality checks**: `npm run lint && npm run type-check`
10. **Create pull request** with descriptive title and description

### Git Workflow

#### Branch Naming
- `feature/[feature-name]` - New features
- `fix/[bug-name]` - Bug fixes
- `docs/[doc-name]` - Documentation
- `refactor/[refactor-name]` - Code refactoring

#### Commit Messages
Follow conventional commits:

```
type(scope): subject

Examples:
- feat(courses): add markdown to HTML conversion
- fix(auth): resolve login session timeout
- docs(readme): update setup instructions
- style(ui): improve course card layout
- refactor(api): simplify user endpoint logic
- test(courses): add unit tests for course service
```

## SEO and Performance

### Page Metadata
Always add proper metadata for SEO:

```typescript
// app/courses/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const course = await getCourse(params.slug);
  
  return {
    title: course.metaTitle || course.title,
    description: course.metaDescription || course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.thumbnail],
    },
  };
}
```

### Performance Optimization
- **Image optimization**: Use `next/image`
- **Font optimization**: Use `next/font`
- **Static Generation**: Pre-render pages at build time
- **ISR**: Incremental Static Regeneration for dynamic content
- **Code splitting**: Automatic with Next.js
- **Caching**: Implement proper caching strategies

## Deployment

### Build for Production
```powershell
npm run build
npm start
```

### Environment Setup
1. Set up MongoDB database
2. Configure environment variables in `.env.local`
3. Set up CDN for static assets (if needed)
4. Configure domain and SSL certificate
5. Set up monitoring and logging

## Feature Implementation Priorities

### Phase 1: MVP (Minimum Viable Product)
1. User authentication (login/register)
2. Basic course listing
3. Course detail pages with Markdown content
4. Basic admin panel (user and course management)
5. Database setup with MongoDB

### Phase 2: Core Features
1. User enrollment and progress tracking
2. Search functionality
3. Course categories and filtering
4. Rich Markdown support (images, videos, code blocks)
5. User profile and learning history

### Phase 3: Advanced Features
1. AI-powered recommendations
2. Chatbot support
3. Gamification (points, badges)
4. Live learning capabilities
5. Analytics and reporting

## Common Pitfalls to Avoid

1. ❌ **Never skip password hashing** - Always hash passwords with bcrypt
2. ❌ **Never hardcode credentials** - Use environment variables
3. ❌ **Never skip input validation** - Validate all user input
4. ❌ **Never ignore error handling** - Proper error handling everywhere
5. ❌ **Never skip database indexing** - Index frequently queried fields
6. ❌ **Never skip loading states** - Always show loading states
7. ❌ **Never ignore accessibility** - Test with screen readers
8. ❌ **Never neglect SEO** - Proper meta tags and semantic HTML

## Resources

### Documentation
- **Next.js**: https://nextjs.org/docs
- **MongoDB**: https://docs.mongodb.com/
- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/

### Internal Documentation
- **README.md**: Project overview and setup
- **FEATURES.md**: Complete feature specifications
- **.github/copilot-instructions.md**: Detailed coding guidelines
- **API Documentation**: (to be created as project grows)

## Support

For questions or issues:
1. Check existing documentation
2. Review similar implementations in the codebase
3. Consult with team members
4. Create a GitHub issue for bugs or feature requests

---

**Remember**: DAKIA Academy is about teaching AI - let's make the development process intelligent too! 🚀