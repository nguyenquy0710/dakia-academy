# App Directory - SKILL.md

## 📋 Overview

The `app/` directory contains the Next.js App Router implementation for DAKIA Academy. This is the core of the application, handling all routes, pages, layouts, and API endpoints.

## 🎯 Purpose

- **Route Organization**: Implements Next.js App Router with route groups
- **Page Components**: Server and Client components for rendering
- **API Routes**: Backend API endpoints for data operations
- **Layouts**: Shared layouts for different sections of the app

## 📁 Structure

```
app/
├── (client)/          # Public-facing client routes (route group)
│   ├── layout.tsx     # Client layout with nav and footer
│   ├── page.tsx       # Homepage
│   ├── courses/       # Course listing and detail pages
│   ├── login/         # Login page
│   └── register/      # Registration page
├── (admin)/           # Admin panel routes (route group)
│   ├── layout.tsx     # Admin layout with sidebar
│   └── admin/         # Admin pages (dashboard, users, courses)
├── api/               # API routes
│   ├── health/        # Health check endpoint
│   ├── users/         # User CRUD operations
│   └── courses/       # Course CRUD operations
├── globals.css        # Global styles and design system
└── layout.tsx         # Root layout
```

## 🔧 Technical Skills Required

### 1. Next.js App Router (15+)
```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// Client Component (with 'use client')
'use client';
import { useState } from 'react';

export default function ClientPage() {
  const [state, setState] = useState('');
  return <div>{state}</div>;
}

// Dynamic Routes (params are Promises in Next.js 15+)
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>{slug}</div>;
}
```

### 2. Route Groups
```
(client)/   → Routes don't include "client" in URL
(admin)/    → Routes don't include "admin" in URL
```

### 3. Layouts
```tsx
// Root Layout (app/layout.tsx)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

// Group Layout (app/(client)/layout.tsx)
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
```

### 4. API Routes
```tsx
// app/api/resource/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const data = await fetchData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await createData(body);
    return NextResponse.json({ success: true, result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

## 🎨 Styling Conventions

### Bootstrap 5 Usage
```tsx
// Use Bootstrap classes consistently
<div className="container">
  <div className="row g-4">
    <div className="col-md-6">
      <div className="card border shadow-sm">
        <div className="card-body p-4">
          <h3 className="h5 fw-semibold">Title</h3>
          <p className="text-secondary">Description</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Custom CSS (globals.css)
- Use CSS variables from design system
- Follow Framer-style minimal design principles
- Maintain consistent animations

## 📝 Best Practices

### 1. Server vs Client Components
✅ **Use Server Components by default**
- Better performance
- Smaller client bundle
- Direct database access

✅ **Use Client Components when needed**
- Interactive elements (useState, useEffect)
- Browser APIs
- Event handlers

### 2. Metadata for SEO
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - DAKIA Academy',
  description: 'Page description for SEO',
};
```

### 3. Error Handling
```tsx
// error.tsx in any folder
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container py-5">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### 4. Loading States
```tsx
// loading.tsx in any folder
export default function Loading() {
  return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
```

## 🔒 Security

### Environment Variables
```tsx
// Access in Server Components
const dbUri = process.env.MONGODB_URI;

// Access in API Routes
const secret = process.env.JWT_SECRET;

// NEVER expose server secrets to client
```

### Input Validation
- Validate all user inputs
- Sanitize data before database operations
- Use TypeScript for type safety

## ♿ Accessibility

### Semantic HTML
```tsx
<main>
  <article>
    <header>
      <h1>Page Title</h1>
    </header>
    <section>
      <h2>Section Title</h2>
      <p>Content</p>
    </section>
  </article>
</main>
```

### ARIA Labels
```tsx
<button aria-label="Close menu">
  <span aria-hidden="true">×</span>
</button>
```

## 📱 Responsive Design

### Mobile-First Approach
```tsx
<div className="col-12 col-md-6 col-lg-4">
  {/* Full width mobile, half on tablet, third on desktop */}
</div>
```

## ✅ Checklist for New Pages

- [ ] Choose Server Component or Client Component appropriately
- [ ] Add metadata for SEO
- [ ] Follow file naming conventions (lowercase, kebab-case)
- [ ] Use TypeScript with proper types
- [ ] Implement error boundaries if needed
- [ ] Add loading states for async operations
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify accessibility (keyboard navigation, screen readers)
- [ ] Follow Bootstrap class conventions
- [ ] Maintain design system consistency

## 📚 Related Documentation

- [Main Documentation](../docs/README.md)
- [Style Guide](../docs/STYLE_GUIDE.md)
- [Theme Documentation](../docs/THEME.md)
- [Coding Conventions](../docs/CODING_CONVENTIONS.md)
- [Next.js App Router Docs](https://nextjs.org/docs/app)

## 🎓 Key Takeaways

1. **Use Server Components by default** for better performance
2. **Route groups** organize routes without affecting URLs
3. **Layouts** are shared across routes in a folder
4. **API routes** handle backend operations
5. **TypeScript** ensures type safety throughout
6. **Bootstrap 5** for consistent styling
7. **Accessibility** and SEO are priorities
