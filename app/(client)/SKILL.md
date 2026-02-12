# Client Routes - SKILL.md

## 📋 Overview

The `app/(client)/` directory contains all public-facing pages for DAKIA Academy. These are the pages that regular users (students) interact with.

## 🎯 Purpose

- **Public Pages**: Homepage, course listing, course details
- **Authentication**: Login and registration pages
- **User Experience**: Clean, professional Framer-style design
- **SEO Optimized**: Proper metadata and semantic HTML

## 📁 Structure

```
app/(client)/
├── layout.tsx         # Client layout (navbar + footer)
├── page.tsx           # Homepage
├── courses/
│   ├── page.tsx       # Course listing with search
│   └── [slug]/
│       └── page.tsx   # Course detail page
├── login/
│   └── page.tsx       # Login form
└── register/
    └── page.tsx       # Registration form
```

## 🔧 Technical Skills Required

### 1. Server Components for Static Content
```tsx
// Default export for pages (Server Component)
export default async function HomePage() {
  // Can fetch data directly
  const courses = await getCourses();
  
  return (
    <div className="container py-5">
      <h1>Welcome to DAKIA Academy</h1>
    </div>
  );
}
```

### 2. Client Components for Interactivity
```tsx
'use client';
import { useState } from 'react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="container py-5">
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control"
      />
    </div>
  );
}
```

### 3. SEO Metadata
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khóa học AI - DAKIA Academy',
  description: 'Khám phá các khóa học AI cho Sales và Marketing',
  openGraph: {
    title: 'Khóa học AI - DAKIA Academy',
    description: 'Khám phá các khóa học AI cho Sales và Marketing',
    images: ['/og-image.jpg'],
  },
};
```

### 4. Dynamic Routes
```tsx
// app/(client)/courses/[slug]/page.tsx
export default async function CoursePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  
  return <div>{course.title}</div>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
```

## 🎨 Design System

### Layout Pattern (Framer-style)
```tsx
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Clean white navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            <span style={{ color: '#2563EB' }}>DAKIA</span>{' '}
            <span style={{ color: '#0F172A' }}>Academy</span>
          </a>
          {/* Navigation items */}
        </div>
      </nav>
      
      {/* Main content */}
      <main className="flex-grow-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          {/* Footer content */}
        </div>
      </footer>
    </>
  );
}
```

### Hero Section Pattern
```tsx
<section style={{ 
  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center'
}}>
  <div className="container text-center">
    <span className="badge" style={{
      background: 'rgba(37, 99, 235, 0.1)',
      color: '#2563EB',
      border: '1px solid rgba(37, 99, 235, 0.2)'
    }}>
      Platform đào tạo AI
    </span>
    <h1 className="display-1 fw-bold mt-4" style={{ color: '#0F172A' }}>
      DAKIA Academy
    </h1>
    <p className="lead mb-5" style={{ color: '#475569' }}>
      Đào tạo AI cho Sales và Marketing
    </p>
    <div className="d-flex gap-3 justify-content-center">
      <a href="/courses" className="btn btn-primary btn-lg">Khám phá khóa học</a>
      <a href="/register" className="btn btn-outline-primary btn-lg">Đăng ký ngay</a>
    </div>
  </div>
</section>
```

### Card Pattern
```tsx
<div className="card border shadow-sm hover-lift h-100">
  <div className="card-body p-4">
    <div className="d-flex gap-2 mb-3">
      <span className="badge" style={{
        background: 'rgba(37, 99, 235, 0.1)',
        color: '#2563EB'
      }}>
        {category}
      </span>
    </div>
    <h3 className="h5 fw-semibold mb-3" style={{ color: '#0F172A' }}>
      {title}
    </h3>
    <p className="text-secondary mb-4">
      {description}
    </p>
  </div>
</div>
```

## 📝 Best Practices

### 1. Vietnamese Language
✅ All UI text in Vietnamese
```tsx
<button>Đăng ký ngay</button>  // ✅ Good
<button>Sign up now</button>   // ❌ Bad
```

### 2. Responsive Design
✅ Mobile-first approach
```tsx
<div className="col-12 col-md-6 col-lg-4">
  {/* Mobile: full width, Tablet: 2 cols, Desktop: 3 cols */}
</div>
```

### 3. Loading States
```tsx
'use client';
import { useState } from 'react';

export default function SearchablePage() {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>{/* Content */}</div>
      )}
    </>
  );
}
```

### 4. Empty States
```tsx
{filteredCourses.length === 0 ? (
  <div className="text-center py-5">
    <div style={{ fontSize: '4rem' }}>🔍</div>
    <h3 className="mt-3">Không tìm thấy khóa học</h3>
    <p className="text-secondary">
      Không có khóa học nào phù hợp với từ khóa "{searchQuery}"
    </p>
    <button 
      onClick={() => setSearchQuery('')}
      className="btn btn-primary"
    >
      Xóa bộ lọc
    </button>
  </div>
) : (
  <div className="row g-4">
    {/* Courses */}
  </div>
)}
```

### 5. Form Validation
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
});
const [errors, setErrors] = useState<{ [key: string]: string }>({});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate
  const newErrors: { [key: string]: string } = {};
  if (!formData.email) newErrors.email = 'Email là bắt buộc';
  if (!formData.password || formData.password.length < 8) {
    newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
  }
  
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  
  // Submit
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    // Handle response
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🎯 Page-Specific Guidelines

### Homepage (page.tsx)
- Hero section with clear value proposition
- Stats section (students, courses, satisfaction)
- Technology areas with color-coded cards
- Benefits section (for employees and company)
- CTA section before footer

### Courses Listing (courses/page.tsx)
- Search bar with real-time filtering
- Course cards in responsive grid
- Badge system for categories and levels
- Empty state when no results
- Clear call-to-actions

### Course Detail (courses/[slug]/page.tsx)
- Hero section with course info
- About section
- Curriculum with lesson list
- Sticky sidebar with enrollment CTA
- Learning outcomes
- Gradient text headings

### Login (login/page.tsx)
- Centered card layout
- Bootstrap form controls
- Error message display
- Link to registration
- "Remember me" option

### Register (register/page.tsx)
- Card-based form layout
- Multiple fields with validation
- Password confirmation
- Error display
- Link to login

## 🔒 Security Considerations

### Client-Side Security
- Never expose API keys or secrets
- Validate all inputs before submission
- Use HTTPS for all requests
- Implement CSRF protection

### Form Security
```tsx
// Example: Password field
<input
  type="password"
  className="form-control"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  minLength={8}
  required
  autoComplete="new-password"
/>
```

## ♿ Accessibility

### Semantic HTML
```tsx
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">DAKIA Academy</h1>
  </section>
</main>
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Proper tab order
- Focus states visible

### Screen Reader Support
```tsx
<button aria-label="Tìm kiếm khóa học">
  <svg aria-hidden="true">{/* Search icon */}</svg>
</button>
```

## 📱 Mobile Optimization

### Touch Targets
- Minimum 44x44px for buttons
- Adequate spacing between tappable elements
- Large, clear CTAs

### Performance
- Optimize images (use next/image)
- Lazy load below-fold content
- Minimize client-side JavaScript

## ✅ Checklist for New Client Pages

- [ ] Use Vietnamese for all UI text
- [ ] Add proper metadata for SEO
- [ ] Implement responsive design (test mobile, tablet, desktop)
- [ ] Follow Framer-style design system
- [ ] Use Bootstrap classes consistently
- [ ] Add loading states for async operations
- [ ] Implement empty states
- [ ] Add proper error handling
- [ ] Ensure keyboard accessibility
- [ ] Test with screen reader
- [ ] Optimize for performance
- [ ] Add proper ARIA labels

## 📚 Related Documentation

- [App Directory SKILL.md](../SKILL.md)
- [Style Guide](../../docs/STYLE_GUIDE.md)
- [Theme Documentation](../../docs/THEME.md)
- [Coding Conventions](../../docs/CODING_CONVENTIONS.md)

## 🎓 Key Takeaways

1. **Vietnamese UI** - All user-facing text in Vietnamese
2. **Framer-style Design** - Clean, minimal, professional
3. **Mobile-First** - Responsive design from the start
4. **SEO Optimized** - Proper metadata and semantic HTML
5. **Accessibility** - WCAG AA compliant
6. **Performance** - Optimize images and minimize JS
7. **User Experience** - Clear CTAs, loading states, empty states
