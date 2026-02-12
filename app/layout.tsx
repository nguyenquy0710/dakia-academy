import type { Metadata } from "next";
import Script from "next/script";
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
    <html
      lang="vi"
      suppressHydrationWarning={true}
      data-lt-installed="true"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        
        {/* jQuery */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        
        {/* Bootstrap Bundle with Popper */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
