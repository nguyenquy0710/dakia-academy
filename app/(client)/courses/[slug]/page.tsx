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
  const course = await getCourse(params.slug);
  
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
  const course = await getCourse(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm capitalize">
              {course.level}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl mb-6">{course.description}</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">👨‍🏫 Giảng viên:</span>
              <span className="font-semibold">{course.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">👥 Học viên:</span>
              <span className="font-semibold">{course.totalStudents}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Về khóa học này</h2>
            <p className="text-gray-700">
              {course.description}
            </p>
          </div>

          {/* Course Curriculum */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Nội dung khóa học</h2>
            <div className="space-y-4">
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{lesson.title}</h3>
                        <p className="text-sm text-gray-500">
                          {lesson.duration} phút
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Xem →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              🚧 Đang phát triển
            </h3>
            <p className="text-yellow-700">
              Nội dung chi tiết của từng bài học đang được xây dựng. 
              Hệ thống sẽ hiển thị nội dung Markdown được chuyển đổi thành HTML với 
              syntax highlighting và các tính năng tương tác.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Bắt đầu học ngay</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng số bài học:</span>
                <span className="font-semibold">{course.lessons.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Thời lượng:</span>
                <span className="font-semibold">
                  {course.lessons.reduce((acc, l) => acc + (l.duration || 0), 0)} phút
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cấp độ:</span>
                <span className="font-semibold capitalize">{course.level}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
              Đăng ký khóa học
            </button>
            
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Xem demo
            </button>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-3">Bạn sẽ học được gì?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Hiểu về AI và ứng dụng trong bán hàng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Phân tích dữ liệu khách hàng thông minh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Tự động hóa quy trình bán hàng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Tối ưu hóa chiến lược sales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
