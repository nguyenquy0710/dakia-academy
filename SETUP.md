# DAKIA Academy - Setup Guide

Hướng dẫn cài đặt và chạy ứng dụng DAKIA Academy.

## Yêu cầu hệ thống

- Node.js 18+ hoặc mới hơn
- npm hoặc yarn
- MongoDB (local hoặc cloud như MongoDB Atlas)

## Cài đặt

### 1. Clone repository

```bash
git clone https://github.com/nguyenquy0710/dakia-academy.git
cd dakia-academy
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình môi trường

Tạo file `.env.local` từ file mẫu:

```bash
cp .env.example .env.local
```

Sau đó chỉnh sửa `.env.local` với thông tin cơ sở dữ liệu của bạn:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/dakia-academy
# hoặc dùng MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dakia-academy

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here-change-in-production
NEXTAUTH_URL=http://localhost:3000

# JWT Secret
JWT_SECRET=your-jwt-secret-key-here-change-in-production
```

**Lưu ý**: Thay đổi các giá trị secret trước khi deploy lên production!

### 4. Chạy ứng dụng

#### Development mode

```bash
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:3000

#### Production mode

```bash
# Build ứng dụng
npm run build

# Chạy production server
npm start
```

## Cấu trúc ứng dụng

### Client (Trang học)

- **Trang chủ**: http://localhost:3000
- **Danh sách khóa học**: http://localhost:3000/courses

### Admin (Quản trị)

- **Dashboard**: http://localhost:3000/admin/dashboard
- **Quản lý người dùng**: http://localhost:3000/admin/users
- **Quản lý khóa học**: http://localhost:3000/admin/courses

### API

- **Health check**: http://localhost:3000/api/health

## Scripts có sẵn

```bash
# Chạy development server
npm run dev

# Build ứng dụng cho production
npm run build

# Chạy production server
npm start

# Kiểm tra lỗi TypeScript
npm run type-check

# Chạy linter (đang cấu hình)
npm run lint
```

## Kiến trúc

### Công nghệ sử dụng

- **Framework**: Next.js 14+ với App Router
- **Language**: TypeScript
- **Database**: MongoDB với Mongoose
- **Authentication**: NextAuth.js (đang phát triển)
- **Styling**: Tailwind CSS
- **Markdown**: unified, remark, rehype

### Thư mục

```
dakia-academy/
├── app/                    # Next.js App Router
│   ├── (client)/          # Client pages (public)
│   ├── (admin)/           # Admin pages (protected)
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── client/           # Client components
│   ├── admin/            # Admin components
│   └── shared/           # Shared components
├── lib/                   # Utility functions
│   ├── db/               # Database utilities
│   ├── markdown/         # Markdown processing
│   └── auth/             # Authentication
├── models/                # MongoDB models
│   ├── User.ts
│   ├── Course.ts
│   └── Content.ts
├── types/                 # TypeScript types
├── content/               # Course content (Markdown)
└── public/                # Static assets
```

## Phát triển tiếp

Các tính năng đang được phát triển:

### Phase 1 - MVP (Đang thực hiện)
- ✅ Cấu trúc cơ bản
- ✅ Database models
- ✅ UI cơ bản
- ⏳ Authentication system
- ⏳ API routes đầy đủ
- ⏳ Course management

### Phase 2 - Core Features
- Progress tracking
- Search functionality
- Course categories
- User profiles

### Phase 3 - Advanced Features
- AI recommendations
- Chatbot support
- Gamification
- Analytics

## Troubleshooting

### Lỗi kết nối MongoDB

Nếu gặp lỗi kết nối MongoDB:

1. Kiểm tra MongoDB có đang chạy không
2. Kiểm tra `MONGODB_URI` trong `.env.local`
3. Nếu dùng MongoDB Atlas, kiểm tra IP whitelist

### Lỗi build

Nếu build fail:

```bash
# Xóa cache và node_modules
rm -rf .next node_modules
npm install
npm run build
```

## Đóng góp

Xem [AGENTS.md](AGENTS.md) để biết quy tắc phát triển và coding conventions.

## License

MIT License - xem file [LICENSE](LICENSE)
