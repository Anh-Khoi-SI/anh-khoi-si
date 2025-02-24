import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css"; // CSS của Tailwind
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
  icons: {
    icon: "/logo/anhkhoi-pri.ico",
  },
  description:
    "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng, từ tư vấn Hạ tầng CNTT đến triển khai ứng dụng hệ thống, giúp doanh nghiệp tối ưu hóa quá trình kinh doanh và tăng cường hiệu suất làm việc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen">
        <AntdRegistry>
          <Navbar />
          {children}
          <Footer />
        </AntdRegistry>

        <Analytics />
      </body>
    </html>
  );
}
