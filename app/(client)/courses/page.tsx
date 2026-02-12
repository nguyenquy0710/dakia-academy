'use client';

import { FC, useState, useMemo } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  gradient: string;
  status: 'active' | 'coming-soon';
  slug?: string;
}

const CoursesPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Course data
  const allCourses: Course[] = [
    {
      id: '1',
      title: 'AI cho Sales',
      description: 'Học cách ứng dụng AI để tối ưu hóa quy trình bán hàng và tăng doanh thu',
      level: 'Beginner',
      category: 'Sales',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
      status: 'active',
      slug: 'ai-for-sales'
    },
    {
      id: '2',
      title: 'AI cho Marketing',
      description: 'Khám phá cách sử dụng AI để tạo và tối ưu hóa chiến dịch marketing',
      level: 'Beginner',
      category: 'Marketing',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      status: 'coming-soon'
    },
    {
      id: '3',
      title: 'Phân tích dữ liệu với AI',
      description: 'Nắm vững kỹ năng phân tích dữ liệu lớn với các công cụ AI hiện đại',
      level: 'Intermediate',
      category: 'Data Analytics',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      status: 'coming-soon'
    },
    {
      id: '4',
      title: 'Chatbot AI cho doanh nghiệp',
      description: 'Xây dựng và triển khai chatbot thông minh để tự động hóa chăm sóc khách hàng',
      level: 'Intermediate',
      category: 'Automation',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      status: 'coming-soon'
    },
    {
      id: '5',
      title: 'Content Marketing với AI',
      description: 'Tạo nội dung marketing hiệu quả với sự hỗ trợ của các công cụ AI',
      level: 'Beginner',
      category: 'Marketing',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      status: 'coming-soon'
    },
    {
      id: '6',
      title: 'AI trong Email Marketing',
      description: 'Tối ưu hóa chiến dịch email marketing với AI để tăng tỷ lệ chuyển đổi',
      level: 'Advanced',
      category: 'Marketing',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      status: 'coming-soon'
    }
  ];

  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) {
      return allCourses;
    }

    const query = searchQuery.toLowerCase();
    return allCourses.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query)
    );
  }, [searchQuery, allCourses]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h1 className="display-4 fw-bold mb-0">Khóa học</h1>
        <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
          {filteredCourses.length} khóa học
        </span>
      </div>
      
      {/* Search Bar */}
      <div className="card border-0 shadow-sm mb-4" style={{ 
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)'
      }}>
        <div className="card-body p-4">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-white border-end-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <input
              type="text"
              className="form-control border-start-0 border-end-0"
              placeholder="🔍 Tìm kiếm khóa học theo tên, mô tả, danh mục hoặc độ khó..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                boxShadow: 'none',
                borderColor: '#dee2e6'
              }}
            />
            {searchQuery && (
              <button
                className="input-group-text bg-white border-start-0"
                onClick={handleClearSearch}
                style={{ cursor: 'pointer' }}
                title="Xóa tìm kiếm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-muted" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-3">
              <small className="text-muted">
                Tìm thấy <strong className="text-primary">{filteredCourses.length}</strong> khóa học 
                {searchQuery && <> cho từ khóa "<strong>{searchQuery}</strong>"</>}
              </small>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem' }}>🔍</div>
          <h3 className="h4 fw-semibold mb-3">Không tìm thấy khóa học</h3>
          <p className="text-muted mb-4">
            Không có khóa học nào phù hợp với từ khóa "<strong>{searchQuery}</strong>"
          </p>
          <button 
            className="btn btn-primary rounded-pill px-4"
            onClick={handleClearSearch}
          >
            Xóa bộ lọc
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              {course.status === 'active' && course.slug ? (
                <a href={`/courses/${course.slug}`} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow hover-lift">
                    <div className="card-img-top" style={{ height: '200px', background: course.gradient }}></div>
                    <div className="card-body">
                      <h3 className="card-title h5 fw-semibold">{course.title}</h3>
                      <p className="card-text text-muted">{course.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                        <div className="d-flex gap-2 flex-wrap">
                          <span className={`badge ${course.level === 'Beginner' ? 'bg-primary' : course.level === 'Intermediate' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                            {course.level}
                          </span>
                          <span className="badge bg-light text-dark">{course.category}</span>
                        </div>
                        <span className="text-primary fw-semibold">Xem chi tiết →</span>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="card h-100 border-0 shadow hover-lift">
                  <div className="card-img-top" style={{ height: '200px', background: course.gradient }}></div>
                  <div className="card-body">
                    <h3 className="card-title h5 fw-semibold">{course.title}</h3>
                    <p className="card-text text-muted">{course.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                      <div className="d-flex gap-2 flex-wrap">
                        <span className={`badge ${course.level === 'Beginner' ? 'bg-primary' : course.level === 'Intermediate' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                          {course.level}
                        </span>
                        <span className="badge bg-light text-dark">{course.category}</span>
                      </div>
                      <span className="text-muted">Sắp ra mắt</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
