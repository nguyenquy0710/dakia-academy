import { FC, ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <aside className="bg-dark text-white d-flex flex-column" style={{ width: '280px' }}>
        <div className="p-4 border-bottom border-secondary">
          <h1 className="h4 fw-bold mb-0">DAKIA Admin</h1>
        </div>
        <nav className="flex-grow-1 py-3">
          <a 
            href="/admin/dashboard" 
            className="d-block text-white text-decoration-none px-4 py-3 hover-bg-secondary"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            📊 Dashboard
          </a>
          <a 
            href="/admin/users" 
            className="d-block text-white text-decoration-none px-4 py-3 hover-bg-secondary"
          >
            <i className="bi bi-people me-2"></i>
            👥 Quản lý người dùng
          </a>
          <a 
            href="/admin/courses" 
            className="d-block text-white text-decoration-none px-4 py-3 hover-bg-secondary"
          >
            <i className="bi bi-book me-2"></i>
            📚 Quản lý khóa học
          </a>
        </nav>
        <div className="border-top border-secondary">
          <a 
            href="/" 
            className="d-block text-white text-decoration-none px-4 py-3 hover-bg-secondary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            ← Về trang chủ
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="bg-white shadow-sm border-bottom">
          <div className="px-4 py-3">
            <h2 className="h5 fw-semibold mb-0">Quản trị hệ thống</h2>
          </div>
        </header>
        <main className="flex-grow-1 p-4 bg-light">
          <div className="container-fluid">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
