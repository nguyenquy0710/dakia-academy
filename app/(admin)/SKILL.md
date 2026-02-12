# Admin Routes - SKILL.md

## 📋 Overview

The `app/(admin)/` directory contains all administrative pages for DAKIA Academy. These are protected routes accessible only to administrators for managing users, courses, and platform content.

## 🎯 Purpose

- **Dashboard**: Overview of platform statistics and metrics
- **User Management**: CRUD operations for users
- **Course Management**: Create, edit, and manage courses
- **Content Management**: Manage course content and lessons
- **Protected Access**: Authentication required for all routes

## 📁 Structure

```
app/(admin)/
├── layout.tsx              # Admin layout with sidebar
└── admin/
    ├── dashboard/
    │   └── page.tsx        # Admin dashboard with stats
    ├── users/
    │   └── page.tsx        # User management
    └── courses/
        └── page.tsx        # Course management
```

## 🔧 Technical Skills Required

### 1. Protected Routes (Middleware)
```tsx
// middleware.ts (in root)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
```

### 2. Admin Layout with Sidebar
```tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <aside className="bg-dark text-white" style={{ width: '250px' }}>
        <div className="p-4">
          <h2 className="h4 fw-bold">DAKIA Admin</h2>
        </div>
        <nav className="nav flex-column">
          <a href="/admin/dashboard" className="nav-link text-white">
            📊 Dashboard
          </a>
          <a href="/admin/users" className="nav-link text-white">
            👥 Users
          </a>
          <a href="/admin/courses" className="nav-link text-white">
            📚 Courses
          </a>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-grow-1 bg-light">
        <div className="container-fluid p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
```

### 3. Dashboard with Stats
```tsx
export default async function DashboardPage() {
  const stats = await getStats();
  
  return (
    <>
      <h1 className="mb-4">Dashboard</h1>
      
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-secondary mb-1">Total Users</p>
                  <h3 className="fw-bold" style={{ color: '#2563EB' }}>
                    {stats.totalUsers}
                  </h3>
                </div>
                <div style={{ fontSize: '2rem' }}>👥</div>
              </div>
            </div>
          </div>
        </div>
        {/* More stats cards */}
      </div>
    </>
  );
}
```

### 4. CRUD Table Component
```tsx
'use client';
import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (userId: string) => {
    if (!confirm('Are you sure?')) return;
    
    try {
      await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      fetchUsers(); // Refresh list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>User Management</h1>
        <button className="btn btn-primary">+ Add User</button>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="badge bg-primary">{user.role}</span>
                  </td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
```

## 📝 Best Practices

### 1. Authentication Check
```tsx
// In every admin page
export default async function AdminPage() {
  const session = await getSession();
  
  if (!session || session.user.role !== 'admin') {
    redirect('/login');
  }
  
  // Admin content
}
```

### 2. Role-Based Access Control
```tsx
// Check user permissions
function canEditUser(currentUser, targetUser) {
  if (currentUser.role === 'super-admin') return true;
  if (currentUser.role === 'admin' && targetUser.role !== 'super-admin') return true;
  return false;
}
```

### 3. Form Handling
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSuccess('User created successfully');
      resetForm();
    } else {
      setError('Failed to create user');
    }
  } catch (error) {
    setError('Network error');
  } finally {
    setLoading(false);
  }
};
```

### 4. Data Tables with Pagination
```tsx
const [page, setPage] = useState(1);
const [perPage] = useState(20);
const [total, setTotal] = useState(0);

const fetchData = async () => {
  const response = await fetch(`/api/users?page=${page}&perPage=${perPage}`);
  const data = await response.json();
  setUsers(data.users);
  setTotal(data.total);
};

// Pagination component
<nav>
  <ul className="pagination">
    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
      <button onClick={() => setPage(page - 1)} className="page-link">
        Previous
      </button>
    </li>
    {/* Page numbers */}
    <li className={`page-item ${page === Math.ceil(total / perPage) ? 'disabled' : ''}`}>
      <button onClick={() => setPage(page + 1)} className="page-link">
        Next
      </button>
    </li>
  </ul>
</nav>
```

## 🎨 Design Patterns

### Admin Dashboard Layout
- Dark sidebar with navigation
- Light content area
- Stats cards at top
- Tables for data management
- Action buttons prominently placed

### Color Scheme
- Primary: #2563EB (Blue for CTAs)
- Success: #10B981 (Green for success messages)
- Warning: #F59E0B (Yellow for warnings)
- Danger: #EF4444 (Red for delete actions)
- Dark: #0F172A (Sidebar background)

## 🔒 Security Requirements

### 1. Authentication
- All admin routes require authentication
- Session validation on every request
- Auto-logout on session expiry

### 2. Authorization
- Role-based access control (RBAC)
- Verify user permissions before operations
- Audit log for admin actions

### 3. Input Validation
```tsx
// Server-side validation in API routes
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(['user', 'admin', 'super-admin'])
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate
  const result = userSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: result.error },
      { status: 400 }
    );
  }
  
  // Process
}
```

### 4. CSRF Protection
- Use CSRF tokens for forms
- Validate origin header
- SameSite cookies

## 📊 Dashboard Metrics

### Key Metrics to Display
1. Total Users (with growth %)
2. Active Courses
3. Total Enrollments
4. Monthly Revenue (if applicable)
5. Recent Activity
6. System Health

### Chart Libraries
- Consider using Chart.js or Recharts
- Display trends over time
- Interactive visualizations

## ✅ Checklist for Admin Pages

- [ ] Implement authentication check
- [ ] Verify user has admin role
- [ ] Add proper error handling
- [ ] Implement loading states
- [ ] Add success/error notifications
- [ ] Confirm destructive actions (delete)
- [ ] Validate all inputs
- [ ] Implement pagination for large datasets
- [ ] Add search/filter functionality
- [ ] Log admin actions for audit
- [ ] Test all CRUD operations
- [ ] Ensure responsive design

## 📚 Related Documentation

- [App Directory SKILL.md](../SKILL.md)
- [API Routes SKILL.md](../api/SKILL.md)
- [Models SKILL.md](../../models/SKILL.md)
- [Coding Conventions](../../docs/CODING_CONVENTIONS.md)

## 🎓 Key Takeaways

1. **Security First** - Always verify authentication and authorization
2. **User Experience** - Clear feedback for all actions
3. **Data Integrity** - Validate inputs, confirm deletions
4. **Performance** - Pagination for large datasets
5. **Audit Trail** - Log important admin actions
6. **Error Handling** - Graceful error messages
7. **Responsive Design** - Admin panel works on all devices
