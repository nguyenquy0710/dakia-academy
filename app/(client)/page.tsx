import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-4">
          DAKIA Academy
        </h1>
        <p className="text-2xl mb-6">
          Đào tạo AI cho Sale và Marketing
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Nền tảng đào tạo trực tuyến chuyên sâu, được thiết kế đặc biệt để trang bị cho nhân viên của DAKIA Tech 
          những kiến thức và kỹ năng tiên tiến trong việc ứng dụng công nghệ AI vào các hoạt động bán hàng và marketing.
        </p>
        <a 
          href="/courses" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Khám phá khóa học
        </a>
      </section>

      {/* Goals Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">🎯 Mục tiêu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Nâng cao năng suất</h3>
            <p className="text-gray-600">
              Thông qua tự động hóa và tối ưu hóa quy trình làm việc
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Tối ưu marketing</h3>
            <p className="text-gray-600">
              Bằng cách sử dụng phân tích dữ liệu thông minh
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Tăng trưởng doanh thu</h3>
            <p className="text-gray-600">
              Thông qua cá nhân hóa và hiểu rõ khách hàng
            </p>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">🚀 Các lĩnh vực công nghệ AI</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📊 Phân tích dữ liệu lớn</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Phân tích hành vi khách hàng</li>
              <li>Dự đoán xu hướng thị trường</li>
              <li>Phân khúc khách hàng thông minh</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🤖 Tự động hóa Marketing</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Tự động hóa chiến dịch marketing</li>
              <li>Quản lý và phân phối nội dung thông minh</li>
              <li>Email marketing cá nhân hóa</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">👥 Cá nhân hóa trải nghiệm</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Đề xuất sản phẩm/dịch vụ phù hợp</li>
              <li>Tương tác khách hàng tự động</li>
              <li>Chatbot và hỗ trợ khách hàng AI</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🧠 Công cụ hỗ trợ quyết định</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dự báo doanh số</li>
              <li>Tối ưu hóa giá cả</li>
              <li>Phân tích cạnh tranh</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">💡 Lợi ích</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Cho nhân viên:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nâng cao kỹ năng chuyên môn</li>
              <li>Tăng khả năng cạnh tranh trên thị trường lao động</li>
              <li>Cải thiện hiệu suất công việc</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Cho DAKIA Tech:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nâng cao năng lực của đội ngũ</li>
              <li>Thúc đẩy sự phát triển bền vững</li>
              <li>Gia tăng sức cạnh tranh trên thị trường</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
