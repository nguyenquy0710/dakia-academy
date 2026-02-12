import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      {/* Hero Section - Clean Framer Style */}
      <section className="text-center py-5 mb-5 fade-in" style={{ 
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '1.5rem'
      }}>
        <div className="container">
          <div className="mb-4">
            <span className="badge px-4 py-2 rounded-pill mb-3" style={{ 
              background: 'rgba(37, 99, 235, 0.1)',
              color: '#2563EB',
              fontWeight: 600,
              fontSize: '0.875rem',
              border: '1px solid rgba(37, 99, 235, 0.2)'
            }}>
              Platform đào tạo AI
            </span>
          </div>
          <h1 className="fw-bold mb-4" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: '1.1',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#0F172A'
          }}>
            DAKIA Academy
          </h1>
          <p className="mb-4" style={{ 
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: 500,
            color: '#475569'
          }}>
            Đào tạo AI cho Sale và Marketing
          </p>
          <p className="mb-5 px-md-5 mx-auto" style={{ 
            maxWidth: '700px', 
            fontSize: '1.125rem', 
            lineHeight: '1.8',
            color: '#64748B'
          }}>
            Nền tảng đào tạo trực tuyến chuyên sâu, được thiết kế đặc biệt để trang bị cho nhân viên của DAKIA Tech 
            những kiến thức và kỹ năng tiên tiến trong việc ứng dụng công nghệ AI.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a 
              href="/courses" 
              className="btn btn-primary btn-lg px-5 py-3 fw-semibold"
              style={{ fontSize: '1rem', borderRadius: '0.75rem' }}
            >
              Khám phá khóa học
            </a>
            <a 
              href="/register" 
              className="btn btn-outline-primary btn-lg px-5 py-3 fw-semibold"
              style={{ fontSize: '1rem', borderRadius: '0.75rem' }}
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Framer Style */}
      <section className="mb-5 py-4">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card border h-100">
              <div className="card-body p-4">
                <div className="fw-bold mb-2" style={{ fontSize: '3rem', color: '#2563EB' }}>100+</div>
                <p className="mb-0" style={{ color: '#64748B', fontSize: '1rem' }}>Học viên đã tham gia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border h-100">
              <div className="card-body p-4">
                <div className="fw-bold mb-2" style={{ fontSize: '3rem', color: '#2563EB' }}>10+</div>
                <p className="mb-0" style={{ color: '#64748B', fontSize: '1rem' }}>Khóa học chất lượng</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border h-100">
              <div className="card-body p-4">
                <div className="fw-bold mb-2" style={{ fontSize: '3rem', color: '#2563EB' }}>95%</div>
                <p className="mb-0" style={{ color: '#64748B', fontSize: '1rem' }}>Mức độ hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section - Clean Framer Style */}
      <section className="mb-5 py-5 fade-in-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#0F172A' }}>Mục tiêu của chúng tôi</h2>
          <p className="lead" style={{ color: '#64748B' }}>Giúp bạn phát triển kỹ năng AI trong kinh doanh</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border">
              <div className="card-body p-5 text-center">
                <div className="mb-4" style={{ fontSize: '3rem' }}>📈</div>
                <h3 className="h5 fw-semibold mb-3" style={{ color: '#0F172A' }}>Nâng cao năng suất</h3>
                <p className="mb-0" style={{ color: '#64748B' }}>
                  Thông qua tự động hóa và tối ưu hóa quy trình làm việc
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border">
              <div className="card-body p-5 text-center">
                <div className="mb-4" style={{ fontSize: '3rem' }}>🎯</div>
                <h3 className="card-title h5 fw-bold mb-3">Tối ưu marketing</h3>
                <p className="card-text text-muted">
                  Bằng cách sử dụng phân tích dữ liệu thông minh
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-soft hover-lift card-hover-glow">
              <div className="card-body p-5 text-center">
                <div className="mb-4" style={{ fontSize: '3rem' }}>💰</div>
                <h3 className="card-title h5 fw-bold mb-3">Tăng trưởng doanh thu</h3>
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
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">🚀 Các lĩnh vực công nghệ AI</h2>
          <p className="text-muted lead">Khám phá những công nghệ tiên tiến nhất</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-soft hover-lift" style={{ 
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
              borderLeft: '4px solid #2563EB'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ fontSize: '2.5rem' }}>📊</div>
                  <h3 className="card-title h5 fw-bold mb-0">Phân tích dữ liệu lớn</h3>
                </div>
                <ul className="list-unstyled ms-5">
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-primary me-2">✓</span>
                    Phân tích hành vi khách hàng
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-primary me-2">✓</span>
                    Dự đoán xu hướng thị trường
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-primary me-2">✓</span>
                    Phân khúc khách hàng thông minh
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-soft hover-lift" style={{ 
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(8, 145, 178, 0.05) 100%)',
              borderLeft: '4px solid #06b6d4'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ fontSize: '2.5rem' }}>🤖</div>
                  <h3 className="card-title h5 fw-bold mb-0">Tự động hóa Marketing</h3>
                </div>
                <ul className="list-unstyled ms-5">
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-info me-2">✓</span>
                    Tự động hóa chiến dịch marketing
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-info me-2">✓</span>
                    Quản lý và phân phối nội dung thông minh
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-info me-2">✓</span>
                    Email marketing cá nhân hóa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-soft hover-lift" style={{ 
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
              borderLeft: '4px solid #10b981'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ fontSize: '2.5rem' }}>👥</div>
                  <h3 className="card-title h5 fw-bold mb-0">Cá nhân hóa trải nghiệm</h3>
                </div>
                <ul className="list-unstyled ms-5">
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-success me-2">✓</span>
                    Đề xuất sản phẩm/dịch vụ phù hợp
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-success me-2">✓</span>
                    Tương tác khách hàng tự động
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-success me-2">✓</span>
                    Chatbot và hỗ trợ khách hàng AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-soft hover-lift" style={{ 
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ fontSize: '2.5rem' }}>🧠</div>
                  <h3 className="card-title h5 fw-bold mb-0">Công cụ hỗ trợ quyết định</h3>
                </div>
                <ul className="list-unstyled ms-5">
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-warning text-dark me-2">✓</span>
                    Dự báo doanh số
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-warning text-dark me-2">✓</span>
                    Tối ưu hóa giá cả
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <span className="badge bg-warning text-dark me-2">✓</span>
                    Phân tích cạnh tranh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Modern Card Design */}
      <section className="mb-5">
        <div className="card border-0 shadow-lg rounded-xl overflow-hidden">
          <div className="card-body p-5" style={{ 
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)'
          }}>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">💡 Lợi ích vượt trội</h2>
              <p className="text-muted lead">Mang lại giá trị thiết thực cho cả cá nhân và tổ chức</p>
            </div>
            <div className="row g-5">
              <div className="col-md-6">
                <div className="card border-0 shadow-soft h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-4 text-gradient">
                      👤 Cho nhân viên
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-primary text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Nâng cao kỹ năng chuyên môn với kiến thức AI tiên tiến</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-primary text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Tăng khả năng cạnh tranh trên thị trường lao động</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-primary text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Cải thiện hiệu suất công việc đáng kể</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-soft h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-4 text-gradient">
                      🏢 Cho DAKIA Tech
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-success text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Nâng cao năng lực cạnh tranh của đội ngũ</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-success text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Thúc đẩy sự phát triển bền vững của doanh nghiệp</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="badge gradient-success text-white me-3 mt-1" style={{ minWidth: '28px' }}>✓</span>
                        <span>Gia tăng sức cạnh tranh trên thị trường</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-5 mb-4">
        <div className="card border-0 shadow-xl rounded-xl overflow-hidden">
          <div className="card-body p-5 hero-gradient text-white">
            <h2 className="display-5 fw-bold mb-3">Bắt đầu hành trình học tập của bạn</h2>
            <p className="lead mb-4">Tham gia cùng hàng trăm học viên khác tại DAKIA Academy</p>
            <a 
              href="/courses" 
              className="btn btn-light btn-lg px-5 py-3 fw-semibold rounded-pill shadow-lg hover-lift"
            >
              🎓 Khám phá khóa học ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
