import { FC } from 'react';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

// This would normally fetch from database
async function getCourse(slug: string) {
  // Placeholder - will be replaced with actual database query
  // For now, return sample data for demonstration
  if (slug === 'ai-for-sales') {
    return {
      title: 'AI cho Sales',
      slug: 'ai-for-sales',
      description: 'Học cách ứng dụng AI để tối ưu hóa quy trình bán hàng và tăng doanh thu',
      category: 'Sales',
      level: 'beginner' as const,
      author: 'DAKIA Academy',
      lessons: [
        {
          id: 'lesson-1',
          title: 'Module 1: Introduction to AI in Sales',
          order: 1,
          duration: 30,
        },
        {
          id: 'lesson-2',
          title: 'Module 2: Customer Analytics',
          order: 2,
          duration: 45,
        },
        {
          id: 'lesson-3',
          title: 'Module 3: Sales Automation',
          order: 3,
          duration: 40,
        },
      ],
      totalStudents: 0,
      isPublished: true,
    };
  }
  
  return null;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);
  
  if (!course) {
    return {
      title: 'Không tìm thấy khóa học',
    };
  }

  return {
    title: `${course.title} - DAKIA Academy`,
    description: course.description,
  };
}

const CoursePage: FC<CoursePageProps> = async ({ params }) => {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="fade-in">
      {/* Course Header */}
      <div className="hero-gradient text-white rounded-3 p-4 p-md-5 mb-4">
        <div className="container">
          <div className="d-flex gap-2 mb-3 flex-wrap">
            <span className="badge bg-light bg-opacity-25 text-white px-3 py-2">
              {course.category}
            </span>
            <span className="badge bg-light bg-opacity-25 text-white px-3 py-2 text-capitalize">
              {course.level}
            </span>
          </div>
          <h1 className="display-4 fw-bold mb-3">{course.title}</h1>
          <p className="lead mb-4">{course.description}</p>
          <div className="d-flex gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <span className="small">👨‍🏫 Giảng viên:</span>
              <span className="fw-semibold">{course.author}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="small">👥 Học viên:</span>
              <span className="fw-semibold">{course.totalStudents}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* About Section */}
          <div className="card border-0 shadow-sm mb-4 hover-lift">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Về khóa học này</h2>
              <p className="text-muted mb-0">
                {course.description}
              </p>
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="card border-0 shadow-sm mb-4 hover-lift">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-4">Nội dung khóa học</h2>
              <div className="d-grid gap-3">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="border rounded-3 p-3 hover-lift"
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex gap-3">
                        <div 
                          className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle fw-semibold"
                          style={{ width: '32px', height: '32px', flexShrink: 0 }}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="h6 fw-semibold mb-1">{lesson.title}</h3>
                          <p className="text-muted small mb-0">
                            <i className="bi bi-clock me-1"></i>
                            {lesson.duration} phút
                          </p>
                        </div>
                      </div>
                      <button className="btn btn-link btn-sm text-primary text-decoration-none fw-semibold">
                        Xem →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Notice */}
          <div className="alert alert-warning border-0 shadow-sm" role="alert">
            <h3 className="alert-heading h6 fw-semibold">
              🚧 Đang phát triển
            </h3>
            <p className="mb-0 small">
              Nội dung chi tiết của từng bài học đang được xây dựng. 
              Hệ thống sẽ hiển thị nội dung Markdown được chuyển đổi thành HTML với 
              syntax highlighting và các tính năng tương tác.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm sticky-top" style={{ top: '1.5rem' }}>
            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-4">Bắt đầu học ngay</h3>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <span className="text-muted">Tổng số bài học:</span>
                  <span className="fw-semibold">{course.lessons.length}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <span className="text-muted">Thời lượng:</span>
                  <span className="fw-semibold">
                    {course.lessons.reduce((acc, l) => acc + (l.duration || 0), 0)} phút
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Cấp độ:</span>
                  <span className="fw-semibold text-capitalize">{course.level}</span>
                </div>
              </div>

              <div className="d-grid gap-2 mb-4">
                <button className="btn btn-primary btn-lg fw-semibold">
                  Đăng ký khóa học
                </button>
                <button className="btn btn-outline-primary btn-lg fw-semibold">
                  Xem demo
                </button>
              </div>

              <div className="pt-4 border-top">
                <h4 className="h6 fw-semibold mb-3">Bạn sẽ học được gì?</h4>
                <ul className="list-unstyled small">
                  <li className="d-flex align-items-start gap-2 mb-2">
                    <span className="text-success">✓</span>
                    <span>Hiểu về AI và ứng dụng trong bán hàng</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 mb-2">
                    <span className="text-success">✓</span>
                    <span>Phân tích dữ liệu khách hàng thông minh</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 mb-2">
                    <span className="text-success">✓</span>
                    <span>Tự động hóa quy trình bán hàng</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 mb-2">
                    <span className="text-success">✓</span>
                    <span>Tối ưu hóa chiến lược sales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
