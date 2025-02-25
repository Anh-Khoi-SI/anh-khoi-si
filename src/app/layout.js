import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css"; // CSS của Tailwind
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { getCldOgImageUrl } from "next-cloudinary";

const publicId = "banner/Thiết_kế_chưa_có_tên_5_ba4vb7";
const headline = "Anh Khôi";
const logoPublicId = "anhkhoi-logo/wnw0kekvmfa1f8ez6yyu";
const tagline = "Anh Khôi";

// export const metadata = {
//   title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
//   icons: {
//     icon: "/logo/anhkhoi-pri.ico",
//   },
//   description:
//     "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng, từ tư vấn Hạ tầng CNTT đến triển khai ứng dụng hệ thống, giúp doanh nghiệp tối ưu hóa quá trình kinh doanh và tăng cường hiệu suất làm việc.",
//   openGraph: {
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: getCldOgImageUrl({
//           src: publicId,
//           effects: [
//             {
//               background: "rgb:010A44",
//             },
//             {
//               color: "rgb:2A005F",
//               colorize: "100",
//             },
//             {
//               gradientFade: "symmetric",
//             },
//           ],
//           overlays: [
//             {
//               publicId,
//               width: 1200,
//               height: 630,
//               crop: "fill",
//               effects: [{ opacity: 20 }],
//             },
//             {
//               width: 1000,
//               crop: "fit",
//               text: {
//                 color: "white",
//                 fontFamily: "Merriweather",
//                 fontSize: 58,
//                 fontWeight: "bold",
//                 lineSpacing: 10,
//                 lineSpacing: 10,
//                 text: headline,
//               },
//               position: {
//                 x: 100,
//                 y: 100,
//                 gravity: "north_west",
//               },
//             },
//             {
//               publicId,
//               width: 1000,
//               height: 2,
//               effects: [
//                 {
//                   colorize: "100,co_white",
//                   opacity: 70,
//                 },
//               ],
//               position: {
//                 x: 100,
//                 y: 175,
//                 gravity: "south_west",
//               },
//             },
//             {
//               width: 60,
//               crop: "fit",
//               publicId: logoPublicId,
//               position: {
//                 x: 100,
//                 y: 102,
//                 gravity: "south_west",
//               },
//             },
//             {
//               text: {
//                 color: "white",
//                 fontFamily: "Lato",
//                 fontSize: 37,
//                 fontWeight: "bold",
//                 text: tagline,
//               },
//               position: {
//                 x: 180,
//                 y: 100,
//                 gravity: "south_west",
//               },
//             },
//           ],
//         }),
//       },
//     ],
//   },
// };

// export const metadata = {
//   title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
//   description: "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
//   openGraph: {
//     type: "website", // 🛑 THÊM type
//     url: "https://anh-khoi-si.vercel.app/", // 🛑 THÊM URL trang
//     title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
//     description:
//       "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
//     siteName: "Anh Khôi",
//     images: [
//       {
//         url: "https://res.cloudinary.com/anh-khoi/image/upload/v1739851704/banner/Thiết_kế_chưa_có_tên_5_ba4vb7.png",
//         width: 1200,
//         height: 630,
//         alt: "Anh Khôi - Giải pháp hệ thống",
//       },
//     ],
//   },
// };

export const metadata = {
  title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
  description: "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
  url: "https://anh-khoi-si.vercel.app/",
  openGraph: {
    title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
    description:
      "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
    siteName: "Anh Khôi",
    images:
      "https://res.cloudinary.com/anh-khoi/image/upload/v1739851704/banner/Thiết_kế_chưa_có_tên_5_ba4vb7.png",
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

        <Analytics />
      </body>
    </html>
  );
}
