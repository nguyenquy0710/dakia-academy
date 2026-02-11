import { FC } from 'react';

const CoursesPage: FC = () => {
  return (
    <div>
      <h1 className="display-4 fw-bold mb-4">Khóa học</h1>
      
      <div className="alert alert-info border-0 shadow-sm mb-5" role="alert">
        <h2 className="alert-heading h5 fw-semibold">
          <i className="bi bi-info-circle me-2"></i>
          🚧 Đang phát triển
        </h2>
        <p className="mb-0">
          Danh sách khóa học sẽ được hiển thị tại đây. Vui lòng quay lại sau khi 
          chúng tôi hoàn thành việc thiết lập cơ sở dữ liệu và thêm nội dung khóa học.
        </p>
      </div>

      <div className="row g-4">
        {/* Example course card */}
        <div className="col-md-6 col-lg-4">
          <a href="/courses/ai-for-sales" className="text-decoration-none">
            <div className="card h-100 border-0 shadow hover-lift">
              <div className="card-img-top bg-gradient-primary" style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
              <div className="card-body">
                <h3 className="card-title h5 fw-semibold">AI cho Sales</h3>
                <p className="card-text text-muted">
                  Học cách ứng dụng AI để tối ưu hóa quy trình bán hàng và tăng doanh thu
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="badge bg-primary">Beginner</span>
                  <span className="text-primary fw-semibold">Xem chi tiết →</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow hover-lift">
            <div className="card-img-top" style={{ height: '200px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
            <div className="card-body">
              <h3 className="card-title h5 fw-semibold">AI cho Marketing</h3>
              <p className="card-text text-muted">
                Khám phá cách sử dụng AI để tạo và tối ưu hóa chiến dịch marketing
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="badge bg-primary">Beginner</span>
                <span className="text-muted">Sắp ra mắt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow hover-lift">
            <div className="card-img-top" style={{ height: '200px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}></div>
            <div className="card-body">
              <h3 className="card-title h5 fw-semibold">Phân tích dữ liệu với AI</h3>
              <p className="card-text text-muted">
                Nắm vững kỹ năng phân tích dữ liệu lớn với các công cụ AI hiện đại
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="badge bg-warning text-dark">Intermediate</span>
                <span className="text-muted">Sắp ra mắt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
