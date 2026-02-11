import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAKIA Academy - Đào tạo AI cho Sale và Marketing",
  description: "Nền tảng đào tạo trực tuyến chuyên sâu, được thiết kế đặc biệt để trang bị cho nhân viên của DAKIA Tech những kiến thức và kỹ năng tiên tiến trong việc ứng dụng công nghệ AI vào các hoạt động bán hàng và marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
