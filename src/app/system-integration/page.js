import ComingSoon from "@/components/shared/ComingSoon";
import ContactSection from "@/components/shared/ContactSection";
import TypingEffect from "@/components/ui/TypingEffect";
import Image from "next/image";
const text = ["Công nghệ tối ưu", "Giải pháp vượt trội"];
const services = [
  {
    id: "01",
    title: "Tư vấn thiết kế",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
        />
      </svg>
    ),
    description:
      "Chúng tôi cung cấp dịch vụ tư vấn thiết kế hạ tầng CNTT theo yêu cầu của doanh nghiệp, đảm bảo tính linh hoạt, tối ưu chi phí và hiệu suất cao.",
  },
  {
    id: "02",
    title: "Triển khai hệ thống",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
    description:
      "Triển khai hệ thống mạng, bảo mật, lưu trữ với quy trình chuyên nghiệp, đảm bảo chất lượng.",
  },
  {
    id: "03",
    title: "Bảo trì và hỗ trợ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    description:
      "Dịch vụ bảo trì định kỳ, hỗ trợ kỹ thuật nhanh chóng, đảm bảo hệ thống vận hành ổn định.",
  },
  {
    id: "04",
    title: "Giải pháp tối ưu hóa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    description:
      "Tư vấn và triển khai các giải pháp tối ưu hóa hiệu suất hệ thống CNTT.",
  },
];
export default function SystemIntergration() {
  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div className="h-screen bg-third text-white flex text-6xl font-semibold flex-col justify-end items-center">
          <div className=" sm:space-y-24 max-w-[1400px] ">
            <div className=" flex items-start py-10 sm:items-end sm:h-[35%] w-full  px-4 ">
              <TypingEffect text={text} ui="SysInt" />
            </div>
            <div className="w-full flex  justify-center">
              <div className="flex">
                <div className="h-full sm:h-[500px] relative w-full">
                  <Image
                    src="https://res.cloudinary.com/anh-khoi/image/upload/v1740020454/banner/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_6_vujvr1.png"
                    fill
                    alt="si-banner"
                    className=" object-cover"
                  />
                </div>

                <div className="flex-col flex w-[120%]">
                  <div
                    className="relative bg-transparent  flex items-center justify-center h-[140%] font-light
                    px-6 text-sm py-10
                    sm:text-base sm:py-0
                    md:px-10 
                    lg:px-20 lg:text-xl"
                  >
                    Giải pháp tối ưu rất quan trọng cho doanh nghiệp khi ứng
                    dụng công nghệ thông tin vào hoạt động, sản xuất, quản lý.
                    Đội ngũ kỹ sư của Anh Khôi đã có hơn 20 năm kinh nghiệm tư
                    vấn và triển khai giải pháp CNTT toàn diện cho các doanh
                    nghiệp lớn.
                    <div className="absolute bottom-6 left-6 sm:flex hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="bg-primary  flex items-center justify-center h-full text-black font-base
                    px-6 text-sm py-10
                    sm:text-base sm:py-0
                    md:px-10 
                    lg:px-20 lg:text-xl
                   "
                  >
                    Chúng tôi tập trung vào vấn đề, câu hỏi và giải pháp – để
                    mang lại hiệu quả tối ưu cho doanh nghiệp của bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-36  flex justify-center">
        <div className=" max-w-[1300px] grid grid-cols-1  md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full flex flex-col  sm:flex-row py-20 hover:bg-lightbackground transition-all duration-300 "
            >
              <div className="px-10">{service.icon}</div>
              <div className="flex flex-col sm:pr-20 gap-2 px-10 pt-10 sm:pt-0 sm:px-0">
                <div className="font-semibold text-xl">{service.id}</div>
                <div className="text-2xl font-semibold">{service.title}</div>
                <div className="text-lg text-gray-600">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8 flex justify-center items-center w-full">
        <div className="items-center flex  justify-center w-full max-w-[1200px] relative">
          <div className="absolute inset-0 bg-third opacity-90 z-20"></div>
          <Image
            src="https://res.cloudinary.com/anh-khoi/image/upload/v1740027341/banner/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_7_juqatb.png"
            height={900}
            width={1600}
            alt="si-banner-2"
          />

          <p className="text-lg sm:text-4xl px-10 sm:px-20 text-center absolute z-30 text-white font-bold">
            Chúng tôi không chỉ cung cấp công nghệ, mà còn mang đến giải pháp
            tạo ra sự khác biệt
          </p>
        </div>
      </section>

      <section className="pt-10 items-center flex flex-col">
        <div>
          <h2 className="text-center text-lg flex-col md:text-xl md:flex-row lg:text-xl lg:flex xl:text-3xl xl:flex font-bold items-center flex gap-2 mb-10">
            <span className="font-light">Cần tìm giải pháp tích hợp?</span>
            Hãy nhắn tin cho chúng tôi!
          </h2>
        </div>
        <ContactSection />
      </section>
    </>
  );
}
