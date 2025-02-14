import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css"; // CSS của Tailwind
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
  icons: {
    icon: "/logo/anhkhoi-pri.ico", // Icon cho tab (dạng .ico)
  },
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
      </body>
    </html>
  );
}
