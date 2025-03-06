// import { getCldOgImageUrl } from "next-cloudinary";

// const publicId = "banner/Thiết_kế_chưa_có_tên_5_ba4vb7";
// const headline = "CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI";
// const logoPublicId = "anhkhoi-logo/wnw0kekvmfa1f8ez6yyu";
// const tagline = "Anh Khôi";

// export async function generateMetadata() {
//   return {
//     icons: {
//       icon: "/logo/anhkhoi-pri.ico",
//     },
//     title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
//     description:
//       "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
//     openGraph: {
//       url: "https://www.anhkhoisi.com.vn/",
//       title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
//       description:
//         "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
//       siteName: "Anh Khôi",
//       images: [
//         {
//           url: getCldOgImageUrl({
//             src: publicId,
//             effects: [{ background: "rgb:010A44" }],
//             overlays: [
//               {
//                 publicId,
//                 width: 1200,
//                 height: 630,
//                 crop: "fill",
//                 effects: [{ opacity: 20 }],
//               },
//               {
//                 width: 1000,
//                 crop: "fit",
//                 text: {
//                   color: "white",
//                   fontFamily: "Merriweather",
//                   fontSize: 58,
//                   fontWeight: "bold",
//                   text: headline,
//                 },
//                 position: {
//                   x: 100,
//                   y: 100,
//                   gravity: "north_west",
//                 },
//               },
//               {
//                 width: 60,
//                 crop: "fit",
//                 publicId: logoPublicId,
//                 position: {
//                   x: 100,
//                   y: 102,
//                   gravity: "south_west",
//                 },
//               },
//               {
//                 text: {
//                   color: "white",
//                   fontFamily: "Lato",
//                   fontSize: 37,
//                   fontWeight: "bold",
//                   text: tagline,
//                 },
//                 position: {
//                   x: 180,
//                   y: 100,
//                   gravity: "south_west",
//                 },
//               },
//             ],
//           }),
//         },
//       ],
//     },
//   };
// }

export const metadata = {
  icon: "/logo/anhkhoi-pri.ico",
  title: "Anh Khôi | Công Ty CP Tích Hợp Hệ Thống Anh Khôi",
  description: "Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng...",
};
