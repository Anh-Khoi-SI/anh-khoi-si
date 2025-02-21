"use client";

import React from "react";

const footerItems = [
  {
    title: "VỀ ANH KHÔI",
    items: ["Giới thiệu công ty", "Thông tin đối tác", "Thông tin liên hệ"],
  },
  {
    title: "GIẢI PHÁP",
    items: [
      "Chính sách bảo mật",
      "Điều khoản sử dụng",
      "Chính sách đổi trả",
      "Chính sách vận chuyển",
    ],
  },
  {
    title: "THÔNG TIN LIÊN HỆ",
    items: [
      {
        text: "Địa chỉ: 74/28 Trương Quốc Dung, Phường 10, Quận Phú Nhuận, TP.HCM",
        link: "https://maps.app.goo.gl/bFiENRyY6cftbT5v6",
      },
      `Điện thoại: 0908 30 13 13 (Mr. Trung Trần)`,
      `Hotline: (028) 399 70 399`,
    ],
  },
];

export default function Footer() {
  return (
    <div className=" bg-secondary border-t border-gray-200 py-6">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="/logo/anhkhoi-pri.png" className="w-20" />
              <h1 className="text-lg font-bold text-primary">
                CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI
              </h1>
              <p className="text-sm text-gray-100 mb-4">
                Mã số thuế: 0314849179
              </p>
            </div>
          </div>

          {/* Rest of the footer content */}
          {footerItems.map((section, index) => (
            <div key={index} className="space-y-3">
              <label className="block uppercase font-bold text-sm sm:text-base text-white">
                {section.title}
              </label>
              <div className="flex flex-col space-y-2">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-gray-100  hover:text-gray-200 text-sm sm:text-base cursor-pointer"
                    onClick={() => {
                      if (typeof item === "object" && item.link) {
                        window.open(item.link, "_blank");
                      }
                    }}
                  >
                    {typeof item === "object" ? item.text : item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-sm text-gray-100">
            © 2024 ANH KHOI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
