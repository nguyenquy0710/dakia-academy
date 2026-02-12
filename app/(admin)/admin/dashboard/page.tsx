import { FC } from 'react';

const AdminDashboard: FC = () => {
  return (
    <div>
      <h1 className="display-5 fw-bold mb-4">Dashboard</h1>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">Tổng người dùng</p>
                  <h3 className="display-6 mb-0">0</h3>
                </div>
                <div className="fs-1">👥</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">Tổng khóa học</p>
                  <h3 className="display-6 mb-0">0</h3>
                </div>
                <div className="fs-1">📚</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">Đang học</p>
                  <h3 className="display-6 mb-0">0</h3>
                </div>
                <div className="fs-1">📖</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">Hoàn thành</p>
                  <h3 className="display-6 mb-0">0</h3>
                </div>
                <div className="fs-1">✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h5 fw-semibold mb-4">Thao tác nhanh</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <a 
                href="/admin/users" 
                className="text-decoration-none d-block p-3 border border-primary rounded hover-lift"
              >
                <h3 className="h6 fw-semibold text-primary mb-2">➕ Thêm người dùng mới</h3>
                <p className="text-muted small mb-0">Tạo tài khoản cho nhân viên mới</p>
              </a>
            </div>
            <div className="col-md-4">
              <a 
                href="/admin/courses" 
                className="text-decoration-none d-block p-3 border border-success rounded hover-lift"
              >
                <h3 className="h6 fw-semibold text-success mb-2">➕ Tạo khóa học mới</h3>
                <p className="text-muted small mb-0">Thêm nội dung đào tạo</p>
              </a>
            </div>
            <div className="col-md-4">
              <a 
                href="/admin/dashboard" 
                className="text-decoration-none d-block p-3 border border-info rounded hover-lift"
              >
                <h3 className="h6 fw-semibold text-info mb-2">📊 Xem báo cáo</h3>
                <p className="text-muted small mb-0">Thống kê và phân tích</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="alert alert-info border-0 shadow-sm" role="alert">
        <h2 className="alert-heading h6 fw-semibold">ℹ️ Trạng thái hệ thống</h2>
        <p className="mb-0">
          Hệ thống đang hoạt động bình thường. Cơ sở dữ liệu đã được thiết lập và sẵn sàng sử dụng.
          Để bắt đầu, hãy thêm người dùng và khóa học thông qua các trang quản lý.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
