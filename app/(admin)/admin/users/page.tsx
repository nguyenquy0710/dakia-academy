import { FC } from 'react';

const UsersPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          ➕ Thêm người dùng
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          🚧 Đang phát triển
        </h2>
        <p className="text-blue-700">
          Trang quản lý người dùng đang được phát triển. Bạn sẽ có thể:
        </p>
        <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
          <li>Xem danh sách tất cả người dùng</li>
          <li>Thêm người dùng mới</li>
          <li>Chỉnh sửa thông tin người dùng</li>
          <li>Phân quyền (admin/user)</li>
          <li>Xem lịch sử học tập của từng người dùng</li>
        </ul>
      </div>

      {/* Example table structure */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vai trò
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phòng ban
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                Chưa có người dùng nào. Hãy kết nối cơ sở dữ liệu và thêm người dùng.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
