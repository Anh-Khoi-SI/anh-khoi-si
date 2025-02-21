import ContactSection from "@/components/shared/ContactSection";
import TypingEffect from "@/components/ui/TypingEffect";
import Image from "next/image";
import Link from "next/link";
import PartnerCarousel from "@/components/shared/PartnerCarousel";

const text = ["Công nghệ tối ưu", "Giải pháp vượt trội"];

const services = [
  {
    id: "01",
    title: "DC SDN Solution",
    path: "/business-digitalization/dc-sdn-solution",
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
    description: "Mạng định nghĩa bằng phần mềm cho Data Center",
  },
  {
    id: "02",
    title: "DC Switching Solution",
    path: "/business-digitalization/dc-switching-solution",
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
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
    ),
    description: "Chuyển mạch trung tâm dữ liệu",
  },
  {
    id: "03",
    title: "Wifi - Mạng không dây",
    path: "/business-digitalization/wifi-wireless-network",
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
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
        />
      </svg>
    ),
    description: "SMB, Campus, Hotels, Industrial",
  },
  {
    id: "04",
    title: "Bảo Mật Mạng",
    path: "/business-digitalization/network-security",
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
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    description:
      "Network Intrusion Prevention, Mail Security Solution, Web Application Firewall, NGFW",
  },
];

const businessDigitalization = {
  title: "Lợi Ích Chuyển Đổi Số",
  benefits: [
    {
      title: "Tối ưu vận hành & hiệu suất",
      description:
        "Giúp doanh nghiệp tinh gọn quy trình, giảm thiểu sai sót, nâng cao năng suất và hiệu quả hoạt động.",
    },
    {
      title: "Gia tăng lợi thế cạnh tranh",
      description:
        "Tận dụng công nghệ số để đổi mới mô hình kinh doanh, cải thiện trải nghiệm khách hàng và mở rộng thị trường.",
    },
    {
      title: "Thích ứng linh hoạt & bền vững",
      description:
        "Chuyển đổi số giúp doanh nghiệp dễ dàng thích nghi với xu hướng công nghệ, tối ưu chi phí và phát triển bền vững.",
    },
  ],
};

const partners = [
  {
    title: "hpe",
    alt: "Partner 1",
  },
  {
    title: "dell",
    alt: "Partner 2",
  },
  {
    title: "ibm",
    alt: "Partner 3",
  },
  {
    title: "lenovo",
    alt: "Partner 4",
  },
  {
    title: "cisco",
    alt: "Partner 5",
  },
  {
    title: "h3c",
    alt: "Partner 6",
  },
  {
    title: "juniper",
    alt: "Partner 7",
  },
  {
    title: "aruba",
    alt: "Partner 8",
  },
  {
    title: "fortinet",
    alt: "Partner 9",
  },
  {
    title: "watchguard",
    alt: "Partner 10",
  },
  {
    title: "checkpoint",
    alt: "Partner 11",
  },
  {
    title: "symantec",
    alt: "Partner 12",
  },
  {
    title: "mcafee",
    alt: "Partner 13",
  },
  {
    title: "kaspersky",
    alt: "Partner 14",
  },
  {
    title: "eset",
    alt: "Partner 15",
  },
  {
    title: "cyberoam",
    alt: "Partner 16",
  },
];

export default function BusinessDigitalization() {
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
                    src="https://res.cloudinary.com/anh-khoi/image/upload/v1740105021/banner/business-digitalization.png"
                    fill
                    priority
                    alt="si-banner"
                    className="object-cover"
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
                    Với sự am hiểu sâu sắc về công nghệ và quy trình kinh doanh,
                    chúng tôi tư vấn và triển khai các chiến lược chuyển đổi số
                    phù hợp. Giúp doanh nghiệp tối ưu vận hành, nâng cao hiệu
                    suất và tận dụng lợi thế của kỷ nguyên số hóa.
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
                    Chúng tôi cung cấp các giải pháp hạ tầng và bảo mật tiên
                    tiến, đảm bảo hệ thống luôn ổn định, an toàn trước mọi thách
                    thức.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-36">
        <h2 className="w-full flex items-center justify-center font-medium text-xl sm:text-4xl">
          Giải Pháp Kỹ Thuật
        </h2>
        <div className="pt-10 px-10 sm:px-4">
          <PartnerCarousel partners={partners} />
        </div>
      </section>

      <section className="pt-12 flex justify-center">
        <div className="max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.path}
              className="group w-full flex flex-col sm:flex-row py-20 hover:bg-lightbackground transition-all duration-300 cursor-pointer relative bg-lightbackground"
            >
              <div className="px-10">{service.icon}</div>
              <div className="flex flex-col sm:pr-20 gap-2 px-10 pt-10 sm:pt-0 sm:px-0">
                <div className="font-semibold text-xl">{service.id}</div>
                <div className="text-2xl font-semibold">{service.title}</div>
                <div className="text-lg text-gray-600">
                  {service.description}
                </div>
              </div>

              {/* Mũi tên chỉ hiện khi hover */}
              <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-4">
                Xem Ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-10 flex justify-center items-center w-full">
        <div className="relative flex justify-center items-center w-full max-w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Mask (Không bị ẩn khi responsive) */}
          <div className="absolute inset-0 bg-third opacity-90 z-20"></div>
          {/* Ảnh luôn giãn ra theo kích thước */}
          <Image
            src="https://res.cloudinary.com/anh-khoi/image/upload/v1740027341/banner/quote-banner.png"
            fill
            priority
            className=" object-cover"
            alt="quote-banner"
          />
          {/* Nội dung văn bản */}
          <div className="absolute z-30 text-white px-4 sm:px-8 py-6 bg-black/50 rounded-lg max-w-[90%] md:max-w-[70%]">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 text-center">
              {businessDigitalization.title}
            </h2>
            <ul className="space-y-2 text-xs sm:text-base">
              {businessDigitalization.benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="font-medium">{benefit.title}:</span>{" "}
                  {benefit.description}
                </li>
              ))}
            </ul>
          </div>
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
