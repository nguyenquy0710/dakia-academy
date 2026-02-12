import { FC, ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Modern Navbar with Glassmorphism */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ 
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/" style={{ letterSpacing: '-0.5px' }}>
            <span className="d-inline-block" style={{ 
              background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              DAKIA
            </span>{' '}
            <span style={{ fontWeight: 400 }}>Academy</span>
          </a>
          <button 
            className="navbar-toggler border-0" 
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
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <a className="nav-link px-3 rounded" href="/" style={{ transition: 'all 0.3s ease' }}>
                  🏠 Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 rounded" href="/courses" style={{ transition: 'all 0.3s ease' }}>
                  📚 Khóa học
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 rounded" href="/login" style={{ transition: 'all 0.3s ease' }}>
                  🔐 Đăng nhập
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="btn btn-light btn-sm fw-semibold px-3" 
                  href="/admin"
                  style={{ 
                    borderRadius: '2rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  ⚙️ Quản trị
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          {children}
        </div>
      </main>

      {/* Modern Footer with Gradient */}
      <footer className="mt-auto" style={{ 
        background: 'linear-gradient(to right, #0f172a 0%, #1e293b 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="text-white fw-bold mb-3">DAKIA Academy</h5>
              <p className="text-white-50 mb-0">
                Nền tảng đào tạo AI cho Sale và Marketing
              </p>
            </div>
            <div className="col-md-3">
              <h6 className="text-white fw-semibold mb-3">Liên kết</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.3s ease' }}>
                    Trang chủ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/courses" className="text-white-50 text-decoration-none" style={{ transition: 'color 0.3s ease' }}>
                    Khóa học
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="text-white fw-semibold mb-3">Liên hệ</h6>
              <p className="text-white-50 small mb-0">
                DAKIA Tech<br />
                Email: academy@dakia.tech
              </p>
            </div>
          </div>
          <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div className="text-center">
            <p className="text-white-50 small mb-0">
              &copy; 2024 DAKIA Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
