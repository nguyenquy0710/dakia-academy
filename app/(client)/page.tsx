import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white text-center rounded-3 py-5 mb-5 fade-in">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
            DAKIA Academy
          </h1>
          <p className="display-6 mb-4">
            Đào tạo AI cho Sale và Marketing
          </p>
          <p className="lead mb-4 px-md-5">
            Nền tảng đào tạo trực tuyến chuyên sâu, được thiết kế đặc biệt để trang bị cho nhân viên của DAKIA Tech 
            những kiến thức và kỹ năng tiên tiến trong việc ứng dụng công nghệ AI vào các hoạt động bán hàng và marketing.
          </p>
          <a 
            href="/courses" 
            className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow-sm hover-lift"
          >
            Khám phá khóa học
          </a>
        </div>
      </section>

      {/* Goals Section */}
      <section className="mb-5 fade-in">
        <h2 className="text-center display-5 fw-bold mb-5">🎯 Mục tiêu</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">Nâng cao năng suất</h3>
                <p className="card-text text-muted">
                  Thông qua tự động hóa và tối ưu hóa quy trình làm việc
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">Tối ưu marketing</h3>
                <p className="card-text text-muted">
                  Bằng cách sử dụng phân tích dữ liệu thông minh
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">Tăng trưởng doanh thu</h3>
                <p className="card-text text-muted">
                  Thông qua cá nhân hóa và hiểu rõ khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="mb-5">
        <h2 className="text-center display-5 fw-bold mb-5">🚀 Các lĩnh vực công nghệ AI</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-primary border-2 h-100 hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">📊 Phân tích dữ liệu lớn</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Phân tích hành vi khách hàng</li>
                  <li className="mb-2">✓ Dự đoán xu hướng thị trường</li>
                  <li className="mb-2">✓ Phân khúc khách hàng thông minh</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-info border-2 h-100 hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">🤖 Tự động hóa Marketing</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Tự động hóa chiến dịch marketing</li>
                  <li className="mb-2">✓ Quản lý và phân phối nội dung thông minh</li>
                  <li className="mb-2">✓ Email marketing cá nhân hóa</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success border-2 h-100 hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">👥 Cá nhân hóa trải nghiệm</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Đề xuất sản phẩm/dịch vụ phù hợp</li>
                  <li className="mb-2">✓ Tương tác khách hàng tự động</li>
                  <li className="mb-2">✓ Chatbot và hỗ trợ khách hàng AI</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-warning border-2 h-100 hover-lift">
              <div className="card-body p-4">
                <h3 className="card-title h5 fw-semibold mb-3">🧠 Công cụ hỗ trợ quyết định</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Dự báo doanh số</li>
                  <li className="mb-2">✓ Tối ưu hóa giá cả</li>
                  <li className="mb-2">✓ Phân tích cạnh tranh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light rounded-3 p-5 mb-5">
        <h2 className="text-center display-5 fw-bold mb-5">💡 Lợi ích</h2>
        <div className="row g-5">
          <div className="col-md-6">
            <h3 className="h4 fw-semibold mb-4 text-primary">Cho nhân viên:</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <span className="badge bg-primary me-2">✓</span>
                Nâng cao kỹ năng chuyên môn
              </li>
              <li className="mb-3">
                <span className="badge bg-primary me-2">✓</span>
                Tăng khả năng cạnh tranh trên thị trường lao động
              </li>
              <li className="mb-3">
                <span className="badge bg-primary me-2">✓</span>
                Cải thiện hiệu suất công việc
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="h4 fw-semibold mb-4 text-success">Cho DAKIA Tech:</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <span className="badge bg-success me-2">✓</span>
                Nâng cao năng lực của đội ngũ
              </li>
              <li className="mb-3">
                <span className="badge bg-success me-2">✓</span>
                Thúc đẩy sự phát triển bền vững
              </li>
              <li className="mb-3">
                <span className="badge bg-success me-2">✓</span>
                Gia tăng sức cạnh tranh trên thị trường
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
