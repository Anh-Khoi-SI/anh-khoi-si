import ContactSection from "@/components/shared/ContactSection";

// src/app/contact.js
export default function Contact() {
  return (
    <div className="pt-[87px] px-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Thông Tin Liên Hệ</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">
              CÔNG TY CỔ PHẦN TÍCH HỢP HỆ THỐNG ANH KHÔI
            </h2>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                74/28 Trương Quốc Dung, Phường 10, Quận Phú Nhuận, Tp HCM
              </p>

              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                Tel: (028) 399 70 399
              </p>

              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                  />
                </svg>
                Fax: (028) 399 70 398
              </p>

              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Email: info@anhkhoisi.com.vn
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Các Bộ Phận</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Phòng kinh doanh:</h3>
                <p className="text-gray-600">Mr Trung</p>
                <p className="text-gray-600">SĐT: 090 830 1313</p>
                <p className="text-gray-600">
                  Email: trungtran@anhkhoisi.com.vn
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">
                  Phòng kỹ thuật - Hỗ trợ bảo hành:
                </h3>
                <p className="text-gray-600">Mr Hưng</p>
                <p className="text-gray-600">SĐT: 097 405 3061</p>
                <p className="text-gray-600">
                  Email: hungnguyen@anhkhoisi.com.vn
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Phòng kế toán:</h3>
                <p className="text-gray-600">SĐT: 028 399 70 399</p>
                <p className="text-gray-600">Email: info@anhkhoisi.com.vn</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Thông Tin Khác</h2>
            <div className="flex gap-2 flex-col text-gray-600">
              <p>
                Tài khoản số: 257606579 Tại Ngân Hàng ACB-CN Nguyễn Văn Trỗi
              </p>
              <p>Mã số thuế: 0314849179</p>
              <a href="https://anhkhoisi.com.vn">
                Website:{" "}
                <span className="underline text-primary">
                  https://anhkhoisi.com.vn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="w-full flex items-center justify-center py-10 text-xl xl:text-2xl font-medium">
          Liên Hệ Với Chúng Tôi Ngay
        </p>
        <ContactSection />
      </div>
    </div>
  );
}
