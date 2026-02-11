import { FC } from 'react';

const AdminDashboard: FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Tổng người dùng</p>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            <div className="text-4xl">👥</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Tổng khóa học</p>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            <div className="text-4xl">📚</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Đang học</p>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            <div className="text-4xl">📖</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Hoàn thành</p>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Thao tác nhanh</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a 
            href="/admin/users" 
            className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:bg-blue-100 transition"
          >
            <h3 className="font-semibold text-blue-800">➕ Thêm người dùng mới</h3>
            <p className="text-sm text-blue-600 mt-1">Tạo tài khoản cho nhân viên mới</p>
          </a>
          <a 
            href="/admin/courses" 
            className="bg-green-50 border border-green-200 p-4 rounded-lg hover:bg-green-100 transition"
          >
            <h3 className="font-semibold text-green-800">➕ Tạo khóa học mới</h3>
            <p className="text-sm text-green-600 mt-1">Thêm nội dung đào tạo</p>
          </a>
          <a 
            href="/admin/dashboard" 
            className="bg-purple-50 border border-purple-200 p-4 rounded-lg hover:bg-purple-100 transition"
          >
            <h3 className="font-semibold text-purple-800">📊 Xem báo cáo</h3>
            <p className="text-sm text-purple-600 mt-1">Thống kê và phân tích</p>
          </a>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          ℹ️ Trạng thái hệ thống
        </h2>
        <p className="text-blue-700">
          Hệ thống đang hoạt động bình thường. Cơ sở dữ liệu đã được thiết lập và sẵn sàng sử dụng.
          Để bắt đầu, hãy thêm người dùng và khóa học thông qua các trang quản lý.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
