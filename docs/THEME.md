# DAKIA Academy - Theme Documentation

Tài liệu về hệ thống thiết kế và design patterns của DAKIA Academy.

## 🎨 Design Philosophy

### Framer-Style Minimal Design

DAKIA Academy được thiết kế theo phong cách **Framer-inspired** với các đặc điểm:

1. **Clean & Minimal**: Giao diện sạch sẽ, tối giản
2. **Professional**: Chuyên nghiệp, đáng tin cậy
3. **Modern**: Hiện đại, công nghệ
4. **User-Focused**: Tập trung vào nội dung và trải nghiệm người dùng

### Core Principles

```
✨ Minimalism         - Ít là nhiều, tập trung vào điều cần thiết
📖 Readability        - Typography rõ ràng, dễ đọc
🎯 Clarity            - Hierarchy rõ ràng, điều hướng dễ dàng
💫 Subtle Animation   - Animation tinh tế, không gây phiền
🏗️ Consistent         - Nhất quán trong toàn bộ hệ thống
```

---

## 🏗️ Layout System

### Page Structure

```
┌─────────────────────────────────────┐
│ Navbar (White, sticky)              │
├─────────────────────────────────────┤
│ Hero Section (Minimal gradient)     │
│ - Large heading                      │
│ - Clear CTA buttons                  │
├─────────────────────────────────────┤
│ Content Sections                     │
│ - Generous white space               │
│ - Clear section headings             │
│ - Card-based layouts                 │
├─────────────────────────────────────┤
│ Footer (Multi-column, organized)     │
└─────────────────────────────────────┘
```

### Container System

```tsx
// Full-width sections
<section className="py-5">
  <div className="container">
    {/* Content */}
  </div>
</section>

// Centered content (for forms, etc.)
<div className="container" style={{ maxWidth: '600px' }}>
  {/* Centered content */}
</div>

// Wide content
<div className="container-fluid px-4">
  {/* Full-width content with padding */}
</div>
```

---

## 🎯 Component Patterns

### 1. Navigation Bar

**Design**: Clean white navbar with subtle shadow

```tsx
<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
  <div className="container">
    {/* Brand */}
    <a className="navbar-brand fw-bold fs-4" href="/">
      <span style={{ color: '#2563EB' }}>DAKIA</span>{' '}
      <span style={{ color: '#0F172A', fontWeight: 400 }}>Academy</span>
    </a>
    
    {/* Toggle button for mobile */}
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    {/* Navigation items */}
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto gap-3 align-items-center">
        <li className="nav-item">
          <a className="nav-link fw-medium" style={{ color: '#475569' }}>
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a className="btn btn-primary rounded-pill px-4">Quản trị</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**Key Features:**
- ✅ White background with border
- ✅ Sticky positioning
- ✅ Clean typography (no emojis)
- ✅ Primary button for main CTA
- ✅ Responsive hamburger menu

---

### 2. Hero Section

**Design**: Minimal gradient with large typography

```tsx
<section 
  className="py-5 text-center fade-in" 
  style={{ 
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '1.5rem'
  }}
>
  <div className="container">
    {/* Badge */}
    <span 
      className="badge mb-4" 
      style={{ 
        background: 'rgba(37, 99, 235, 0.1)',
        color: '#2563EB',
        border: '1px solid rgba(37, 99, 235, 0.2)',
        padding: '0.5rem 1.5rem'
      }}
    >
      Platform đào tạo AI hàng đầu
    </span>
    
    {/* Heading */}
    <h1 
      className="display-1 fw-bold mb-4" 
      style={{ color: '#0F172A' }}
    >
      DAKIA Academy
    </h1>
    
    {/* Subtitle */}
    <p 
      className="lead fs-4 mb-5" 
      style={{ color: '#475569', maxWidth: '700px', margin: '0 auto' }}
    >
      Nền tảng đào tạo AI cho Sale và Marketing
    </p>
    
    {/* CTAs */}
    <div className="d-flex gap-3 justify-content-center flex-wrap">
      <a className="btn btn-primary btn-lg rounded-pill px-5">
        Khám phá khóa học
      </a>
      <a className="btn btn-outline-primary btn-lg rounded-pill px-5">
        Đăng ký ngay
      </a>
    </div>
  </div>
</section>
```

**Key Features:**
- ✅ Subtle 3% opacity gradient
- ✅ Dark text on light background
- ✅ Large, clear typography
- ✅ Dual CTA buttons
- ✅ Rounded corners

---

### 3. Card System

#### Standard Card

```tsx
<div className="card border shadow-sm hover-lift h-100">
  <div className="card-body p-4">
    {/* Badges */}
    <div className="d-flex gap-2 mb-3">
      <span className="badge bg-primary bg-opacity-10 text-primary">
        Category
      </span>
      <span className="badge bg-secondary bg-opacity-10 text-secondary">
        Level
      </span>
    </div>
    
    {/* Title */}
    <h3 className="h5 fw-semibold mb-3">Card Title</h3>
    
    {/* Description */}
    <p className="text-secondary mb-4">
      Card description goes here...
    </p>
    
    {/* CTA */}
    <a className="btn btn-link text-primary p-0">
      Learn more →
    </a>
  </div>
</div>
```

#### Featured Card with Left Border

```tsx
<div 
  className="card border shadow-sm hover-lift"
  style={{
    borderLeft: '4px solid #2563EB',
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%)'
  }}
>
  <div className="card-body p-4">
    <div className="display-4 mb-2">📊</div>
    <h3 className="h5 fw-semibold mb-3">Feature Title</h3>
    <p className="text-secondary mb-0">Feature description</p>
  </div>
</div>
```

#### Stats Card

```tsx
<div className="card border shadow-sm h-100">
  <div className="card-body p-4 text-center">
    <div 
      className="display-3 fw-bold mb-2" 
      style={{ color: '#2563EB' }}
    >
      100+
    </div>
    <p className="text-secondary mb-0">Học viên đã tham gia</p>
  </div>
</div>
```

**Card Guidelines:**
- ✅ Always use `border` class (1px solid #E2E8F0)
- ✅ Use `shadow-sm` for subtle depth
- ✅ Add `hover-lift` for interactive cards
- ✅ Padding: `p-4` (1.5rem) standard
- ✅ Use `h-100` for equal height in grids

---

### 4. Button System

#### Primary Button

```tsx
<button className="btn btn-primary btn-lg rounded-pill px-5">
  Primary Action
</button>
```

#### Secondary/Outline Button

```tsx
<button className="btn btn-outline-primary btn-lg rounded-pill px-5">
  Secondary Action
</button>
```

#### Link Button

```tsx
<button className="btn btn-link text-primary p-0">
  Learn more →
</button>
```

#### Button Sizes

```tsx
// Large (Hero CTAs)
<button className="btn btn-primary btn-lg">Large</button>

// Medium (Default)
<button className="btn btn-primary">Medium</button>

// Small (Compact spaces)
<button className="btn btn-primary btn-sm">Small</button>
```

**Button Guidelines:**
- ✅ Use `rounded-pill` for CTAs
- ✅ Generous padding: `px-5` for large buttons
- ✅ Solid colors (no gradients on buttons)
- ✅ Clear hover states
- ✅ Loading states with spinner

---

### 5. Form Elements

#### Input Field

```tsx
<div className="mb-3">
  <label className="form-label fw-medium">
    Email <span className="text-danger">*</span>
  </label>
  <input 
    type="email" 
    className="form-control form-control-lg" 
    placeholder="your@email.com"
  />
  <div className="form-text">Helper text here</div>
</div>
```

#### Search Bar

```tsx
<div className="card border-0 shadow-sm mb-4" style={{ 
  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)'
}}>
  <div className="card-body p-4">
    <div className="input-group input-group-lg">
      {/* Search icon */}
      <span className="input-group-text bg-white border-end-0">
        <svg>...</svg>
      </span>
      
      {/* Input */}
      <input 
        type="text" 
        className="form-control border-start-0"
        placeholder="🔍 Tìm kiếm khóa học..."
      />
      
      {/* Clear button */}
      <button className="input-group-text bg-white border-start-0">
        <svg>...</svg>
      </button>
    </div>
  </div>
</div>
```

**Form Guidelines:**
- ✅ Use `form-control-lg` for better touch targets
- ✅ Clear labels with required indicators
- ✅ Helper text for guidance
- ✅ Validation states (is-invalid, is-valid)
- ✅ Consistent spacing (mb-3)

---

### 6. Badge System

#### Category Badge

```tsx
<span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
  Category Name
</span>
```

#### Gradient Badge

```tsx
<span 
  className="badge px-3 py-2"
  style={{
    background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
    color: 'white'
  }}
>
  Featured
</span>
```

#### Status Badges

```tsx
// Success
<span className="badge bg-success bg-opacity-10 text-success">Active</span>

// Warning
<span className="badge bg-warning bg-opacity-10 text-warning">Coming Soon</span>

// Info
<span className="badge bg-info bg-opacity-10 text-info">New</span>
```

**Badge Guidelines:**
- ✅ Use 10% opacity for subtle backgrounds
- ✅ Padding: `px-3 py-2` for comfortable size
- ✅ Round corners with `rounded-pill` when appropriate
- ✅ Dark text on light backgrounds

---

### 7. Section Patterns

#### Standard Section

```tsx
<section className="py-5">
  <div className="container">
    {/* Section header */}
    <div className="text-center mb-5">
      <h2 className="display-3 fw-bold mb-3">Section Title</h2>
      <p className="lead text-secondary">Section description</p>
    </div>
    
    {/* Section content */}
    <div className="row g-4">
      {/* Content cards */}
    </div>
  </div>
</section>
```

#### Section with Background

```tsx
<section 
  className="py-5"
  style={{ 
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%)'
  }}
>
  {/* Content */}
</section>
```

---

## 🎨 Visual Effects

### Hover Effects

```css
/* Card Hover Lift */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Lesson Card Slide */
.lesson-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.lesson-card:hover {
  transform: translateX(8px);
  box-shadow: 0 0.5rem 1rem rgba(37, 99, 235, 0.15);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%);
}
```

### Text Gradient

```tsx
<h2 className="text-gradient">Gradient Heading</h2>
```

```css
.text-gradient {
  background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📱 Responsive Patterns

### Mobile Navigation

```tsx
{/* Mobile: Hamburger menu */}
<button 
  className="navbar-toggler d-lg-none" 
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
>
  <span className="navbar-toggler-icon"></span>
</button>

{/* Desktop: Horizontal menu */}
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">...</ul>
</div>
```

### Responsive Grid

```tsx
{/* Mobile: Stack, Tablet: 2 cols, Desktop: 3 cols */}
<div className="row g-4">
  <div className="col-12 col-md-6 col-lg-4">Card 1</div>
  <div className="col-12 col-md-6 col-lg-4">Card 2</div>
  <div className="col-12 col-md-6 col-lg-4">Card 3</div>
</div>

{/* Content + Sidebar */}
<div className="row g-4">
  <div className="col-lg-8">Main content</div>
  <div className="col-lg-4">Sidebar</div>
</div>
```

### Responsive Typography

```tsx
{/* Larger on desktop, smaller on mobile */}
<h1 className="display-1 display-md-2 display-sm-3">
  Responsive Heading
</h1>

{/* Responsive text alignment */}
<p className="text-center text-md-start">
  Centered on mobile, left on desktop
</p>
```

---

## 🎯 Page Templates

### Homepage Template

```tsx
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">...</section>
      
      {/* Stats Section */}
      <section className="stats py-5">...</section>
      
      {/* Features/Goals Section */}
      <section className="features py-5">...</section>
      
      {/* Technology Areas */}
      <section className="technology py-5">...</section>
      
      {/* Benefits Section */}
      <section className="benefits py-5">...</section>
      
      {/* CTA Section */}
      <section className="cta py-5">...</section>
    </>
  );
}
```

### Course Listing Template

```tsx
export default function CoursesPage() {
  return (
    <div className="container py-5">
      {/* Search Bar */}
      <div className="search-bar mb-4">...</div>
      
      {/* Results Count */}
      <div className="results-header mb-4">...</div>
      
      {/* Course Grid */}
      <div className="row g-4">
        {courses.map(course => (
          <div className="col-md-6 col-lg-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Course Detail Template

```tsx
export default function CourseDetailPage() {
  return (
    <div className="container py-5 fade-in">
      {/* Hero Section */}
      <div className="hero-gradient">...</div>
      
      {/* Content + Sidebar Layout */}
      <div className="row g-4 mt-4">
        {/* Main Content */}
        <div className="col-lg-8">
          <div className="about-section">...</div>
          <div className="curriculum-section">...</div>
        </div>
        
        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="sticky-top">
            <div className="enrollment-card">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## ✅ Design Checklist

Khi thiết kế trang hoặc component mới:

### Layout
- [ ] Sử dụng container phù hợp
- [ ] Spacing giữa sections (py-5)
- [ ] Responsive grid (col-12 col-md-6 col-lg-4)
- [ ] White space đầy đủ

### Typography
- [ ] Heading hierarchy rõ ràng
- [ ] Font size phù hợp
- [ ] Line height thoải mái (1.8 cho body)
- [ ] Color contrast đạt chuẩn

### Components
- [ ] Cards có border và shadow
- [ ] Buttons sử dụng rounded-pill cho CTAs
- [ ] Badges sử dụng bg-opacity-10
- [ ] Forms có labels và validation

### Colors
- [ ] Primary blue (#2563EB) cho CTAs
- [ ] Dark text (#0F172A) trên light background
- [ ] Gradients subtle (3% opacity)
- [ ] Border color #E2E8F0

### Interactions
- [ ] Hover effects subtle (4px lift)
- [ ] Transitions smooth (0.3s)
- [ ] Focus states visible
- [ ] Loading states clear

### Responsive
- [ ] Test trên mobile (375px)
- [ ] Test trên tablet (768px)
- [ ] Test trên desktop (1280px+)
- [ ] Touch targets đủ lớn (44px minimum)

---

**Last updated**: February 12, 2026
