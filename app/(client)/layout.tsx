import { FC, ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            DAKIA Academy
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">Khóa học</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Đăng nhập</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">Quản trị</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <div className="container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 DAKIA Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
