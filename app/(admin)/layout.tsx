import { FC, ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">DAKIA Admin</h1>
        </div>
        <nav className="mt-6">
          <a 
            href="/admin/dashboard" 
            className="block px-6 py-3 hover:bg-gray-700 transition"
          >
            📊 Dashboard
          </a>
          <a 
            href="/admin/users" 
            className="block px-6 py-3 hover:bg-gray-700 transition"
          >
            👥 Quản lý người dùng
          </a>
          <a 
            href="/admin/courses" 
            className="block px-6 py-3 hover:bg-gray-700 transition"
          >
            📚 Quản lý khóa học
          </a>
          <a 
            href="/" 
            className="block px-6 py-3 hover:bg-gray-700 transition mt-6 border-t border-gray-700"
          >
            ← Về trang chủ
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold">Quản trị hệ thống</h2>
          </div>
        </header>
        <main className="flex-1 p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
