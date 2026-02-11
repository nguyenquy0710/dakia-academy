import { FC } from 'react';

const CoursesPage: FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Khóa học</h1>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          🚧 Đang phát triển
        </h2>
        <p className="text-blue-700">
          Danh sách khóa học sẽ được hiển thị tại đây. Vui lòng quay lại sau khi 
          chúng tôi hoàn thành việc thiết lập cơ sở dữ liệu và thêm nội dung khóa học.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example course card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">AI cho Sales</h3>
          <p className="text-gray-600 mb-4">
            Học cách ứng dụng AI để tối ưu hóa quy trình bán hàng và tăng doanh thu
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Beginner</span>
            <span className="text-sm text-blue-600 font-semibold">Sắp ra mắt</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 h-32 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">AI cho Marketing</h3>
          <p className="text-gray-600 mb-4">
            Khám phá cách sử dụng AI để tạo và tối ưu hóa chiến dịch marketing
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Beginner</span>
            <span className="text-sm text-blue-600 font-semibold">Sắp ra mắt</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-32 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Phân tích dữ liệu với AI</h3>
          <p className="text-gray-600 mb-4">
            Nắm vững kỹ năng phân tích dữ liệu lớn với các công cụ AI hiện đại
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Intermediate</span>
            <span className="text-sm text-blue-600 font-semibold">Sắp ra mắt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
