'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    position: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp!');
      return;
    }

    setLoading(true);

    try {
      console.log('Register attempt:', formData);
      alert('Tính năng đăng ký đang được phát triển. Vui lòng quay lại sau!');
    } catch (err) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5" style={{ minHeight: '85vh' }}>
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="card shadow-lg border-0 fade-in">
          <div className="card-body p-5">
            <h2 className="text-center fw-bold mb-3">Tạo tài khoản mới</h2>
            <p className="text-center text-muted mb-4">
              Hoặc{' '}
              <a href="/login" className="text-decoration-none">
                đăng nhập nếu đã có tài khoản
              </a>
            </p>
            
            <div className="alert alert-warning" role="alert">
              <strong>🚧 Đang phát triển:</strong> Hệ thống đăng ký đang được xây dựng
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">Họ và tên <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email@dakia.tech"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">Phòng ban</label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    placeholder="Sales, Marketing, IT..."
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="position" className="form-label">Chức vụ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    placeholder="Nhân viên, Trưởng phòng..."
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">Mật khẩu <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    autoComplete="new-password"
                    required
                  />
                  <div className="form-text">Tối thiểu 8 ký tự</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}

              <div className="d-grid mt-4">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Đang đăng ký...
                    </>
                  ) : (
                    'Đăng ký'
                  )}
                </button>
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

export default RegisterPage;
