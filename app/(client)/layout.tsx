import { FC, ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">DAKIA Academy</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:underline">Trang chủ</a>
              </li>
              <li>
                <a href="/courses" className="hover:underline">Khóa học</a>
              </li>
              <li>
                <a href="/admin" className="hover:underline">Quản trị</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 DAKIA Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
