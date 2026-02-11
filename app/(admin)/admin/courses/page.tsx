import { FC } from 'react';

const CoursesPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý khóa học</h1>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          ➕ Tạo khóa học mới
        </button>
      </div>

      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-2">
          🚧 Đang phát triển
        </h2>
        <p className="text-green-700">
          Trang quản lý khóa học đang được phát triển. Bạn sẽ có thể:
        </p>
        <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
          <li>Xem danh sách tất cả khóa học</li>
          <li>Tạo khóa học mới với Markdown</li>
          <li>Chỉnh sửa nội dung khóa học</li>
          <li>Quản lý bài học và thứ tự</li>
          <li>Xuất bản/Ẩn khóa học</li>
          <li>Xem thống kê người học</li>
        </ul>
      </div>

      {/* Example grid of courses */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-dashed border-gray-300">
          <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
            <div className="text-6xl mb-4">➕</div>
            <p className="text-gray-500 text-center">
              Nhấn nút "Tạo khóa học mới" để bắt đầu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
