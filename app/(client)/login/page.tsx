'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Login attempt:', formData);
      alert('Authentication system đang được phát triển. Vui lòng quay lại sau!');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5" style={{ minHeight: '80vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="card shadow-lg border-0">
          <div className="card-body p-5">
            <h2 className="text-center fw-bold mb-3">Đăng nhập</h2>
            <p className="text-center text-muted mb-4">
              Hoặc{' '}
              <a href="/register" className="text-decoration-none">
                tạo tài khoản mới
              </a>
            </p>
            
            <div className="alert alert-warning" role="alert">
              <strong>🚧 Đang phát triển:</strong> Hệ thống authentication đang được xây dựng với NextAuth.js
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div className="d-grid mb-3">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
              </div>

              <div className="text-center">
                <a href="#" className="text-decoration-none small">Quên mật khẩu?</a>
              </div>
            </form>

            <hr className="my-4" />

            <div className="text-center">
              <a href="/" className="text-muted text-decoration-none small">
                ← Về trang chủ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
