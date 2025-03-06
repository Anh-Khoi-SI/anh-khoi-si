import Image from "next/image";
import TypingEffect from "@/components/ui/TypingEffect";
import ContactSection from "@/components/shared/ContactSection";

const text = ["Giải pháp công nghệ", "Nâng tầm doanh nghiệp"];

const About = () => {
  return (
    <div className="">
      {/* Top Section */}
      <section className="w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="w-full h-full z-0 relative">
          <Image
            src="https://res.cloudinary.com/anh-khoi/image/upload/v1739851704/banner/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_5_ba4vb7.png"
            fill
            alt="banner-about"
            className="object-cover"
          />
        </div>

        <div className=" absolute left-0 sm:left-[10%] bottom-0 right-0 z-20">
          <div className="w-full bg-white flex ">
            <div className="relative w-5/12 bg-third items-center justify-center flex text-white font-light px-4 sm:px-10">
              <div className="flex flex-col">
                <p className="sm:hidden flex text-base">
                  Giải pháp <br /> công nghệ <br /> Nâng tầm <br />
                  doanh nghiệp
                </p>
              </div>

              <div className="sm:flex hidden">
                <TypingEffect text={text} ui="about" />
              </div>
              <div className="absolute top-5 right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 sm:size-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>
            <div
              className="w-7/12 flex items-center
              pr-4 pl-4 py-10 gap-4
              sm:pr-4 sm:pl-4 sm:py-4 sm:gap-4
              md:pr-6 md:pl-6 md:py-8 md:gap-6
              lg:pr-10 lg:pl-12 lg:py-16 lg:gap-8
              xl:pr-44 xl:pl-20 xl:py-28 xl:gap-16"
            >
              <div
                className="h-full 
                md:pt-14
                lg:pt-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="
                  size-0
                  sm:size-0
                  md:size-10
                  lg:size-12
                  text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-base font-semibold pb-4 uppercase
                  sm:text-base
                  md:text-lg
                  lg:text-xl
                  xl:text-2xl
                  "
                >
                  Tích Hợp Hệ Thống
                </div>
                <p
                  className="text-sm font-light
                  sm:text-sm
                  md:text-base
                  lg:text-lg
                  xl:text-xl"
                >
                  Chúng tôi cung cấp các giải pháp tích hợp hệ thống đa dạng, từ
                  tư vấn Hạ tầng CNTT đến triển khai ứng dụng hệ thống, giúp
                  doanh nghiệp tối ưu hóa quá trình kinh doanh và tăng cường
                  hiệu suất làm việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Top Section */}
      <section className="h-[100px] sm:ml-[10%]">
        <div className=" w-full  sm:w-5/12 bg-primary h-full items-center flex justify-between px-10 font-semibold uppercase text-xs sm:text-xs md:text-base lg:text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="
              sm:size-4
              md:size-4
              lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </span>
          Giá Trị Cốt Lõi
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="
              sm:size-4
              md:size-4
              lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </div>
        <div className=" w-7/12"></div>
      </section>

      {/* Middle Section */}
      <section
        className=" lg:ml-[10%] flex my-20 gap-2 flex-col 
        px-10
        md:px-12
        lg:flex-row
        xl:px-14"
      >
        <div
          className="w-full h-full lg:w-5/12 flex justify-start items-center
          xl:py-20"
        >
          <div className="flex flex-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="
              size-10
              xl:size-12 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
            <span className="text-lg lg:text-lg xl:text-xl font-semibold ">
              Chuyển Đổi Số
            </span>
            <p className="text-lg md:text-lg lg:text-xl xl:text-3xl font-bold">
              Doanh nghiệp của bạn đang gặp khó khăn gì trong quá trình chuyển
              đổi số?
            </p>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <p
            className="font-light flex justify-center items-center w-full h-full
            text-lg 
            lg:px-24
            xl:text-xl"
          >
            Với sự hiểu biết sâu sắc về công nghệ và quy trình kinh doanh, chúng
            tôi tư vấn và triển khai các chiến lược chuyển đổi số phù hợp, giúp
            doanh nghiệp tận dụng tối đa các ưu điểm của kỷ nguyên số hóa.
          </p>
        </div>
      </section>

      {/* End Section */}
      <section
        className=" lg:ml-[10%] flex  flex-col 
        px-10
        mb-20
        md:px-12
        lg:flex-row"
      >
        <div className="relative w-0 lg:w-5/12 flex items-center">
          <Image
            src="https://res.cloudinary.com/anh-khoi/image/upload/v1739862684/banner/Ch%C6%B0a_c%C3%B3_t%C3%AAn_400_x_400_px_6_r8suaj.png"
            width={1200}
            height={800}
            className="object-center md:block hidden"
            alt="about-cloud"
          />
        </div>
        <div className="w-full lg:w-7/12 flex lg:px-24 items-center gap-16">
          <div className="flex flex-col gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-primary
                size-10
                xl:size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold uppercase">
              Giải Pháp Cloud
            </div>
            <p
              className="font-light text-lg 
              
              xl:text-xl"
            >
              Chúng tôi cung cấp các giải pháp Cloud đáng tin cậy và hiệu quả,
              từ việc tư vấn lập kế hoạch đến triển khai và quản lý, giúp doanh
              nghiệp tiết kiệm chi phí và tăng cường linh hoạt trong quản lý hạ
              tầng công nghệ.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full flex flex-col mb-20">
        <div className="flex flex-col items-center">
          <div className=" text-lg sm:text-2xl xl:text-3xl w-full items-center flex justify-center uppercase flex-col">
            Tại Sao Nên Chọn Chúng Tôi ?
            <hr className="w-48 h-[2px] bg-primary border-none my-4" />
          </div>
          <div className="flex max-w-[1400px] items-center justify-center pt-10 flex-col lg:flex-row">
            <div className="w-full py-10 flex justify-center flex-col gap-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-medium px-10 md:px-20">
                Phản hồi nhanh chóng
              </span>
              <p className="text-lg md:text-xl px-10 md:px-20">
                Chúng tôi luôn sẵn sàng hỗ trợ kịp thời, đảm bảo xử lý sự cố một
                cách nhanh chóng và hiệu quả. Đội ngũ kỹ thuật viên giàu kinh
                nghiệm sẽ trực tiếp hỗ trợ khi cần thiết để giúp bạn khắc phục
                vấn đề.
              </p>
            </div>

            <div className="w-full relative h-[400px]">
              <Image
                src="https://res.cloudinary.com/anh-khoi/image/upload/v1739863918/banner/Ch%C6%B0a_c%C3%B3_t%C3%AAn_400_x_400_px_8_gjfjmy.png"
                fill
                alt="why-us-1"
                className=" object-cover"
              />
            </div>
          </div>

          <div className="flex max-w-[1400px] items-center justify-center flex-col lg:flex-row">
            <div className="w-full h-[400px] relative hidden lg:block ">
              <Image
                src="https://res.cloudinary.com/anh-khoi/image/upload/v1739865087/banner/Ch%C6%B0a_c%C3%B3_t%C3%AAn_400_x_400_px_11_hjyehp.png"
                fill
                alt="why-us-2"
                className=" object-cover"
              />
            </div>
            <div className="w-full flex justify-center flex-col gap-4 py-10">
              <span className="text-xl md:text-2xl lg:text-3xl font-medium px-10 md:px-20">
                Hài lòng
              </span>
              <p className="text-lg md:text-xl px-10 md:px-20 ">
                Chúng tôi muốn bạn hoàn toàn hài lòng với các sản phẩm và dịch
                vụ của chúng tôi. Chúng tôi sẽ thực hiện các công việc một cách
                tối ưu để đáp ứng được tất cả nhu cầu của bạn.
              </p>
            </div>
            <div className="w-full relative h-[400px] lg:hidden block">
              <Image
                src="https://res.cloudinary.com/anh-khoi/image/upload/v1739865087/banner/Ch%C6%B0a_c%C3%B3_t%C3%AAn_400_x_400_px_11_hjyehp.png"
                fill
                alt="why-us-2"
                className=" object-cover"
              />
            </div>
          </div>

          <div className="flex max-w-[1400px] items-center justify-center flex-col lg:flex-row ">
            <div className="w-full py-10 flex justify-center flex-col gap-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-medium px-10 md:px-20">
                Uy tín
              </span>
              <p className="text-lg md:text-xl px-10 md:px-20 ">
                Với hơn 10 năm hoạt động, Anh Khôi đã khẳng định vị thế là một
                trong những công ty hàng đầu trong lĩnh vực công nghệ thông tin.
                Thành công lớn nhất của chúng tôi chính là sự tin tưởng của
                khách hàng, thể hiện qua số lượng đối tác dài hạn không ngừng
                gia tăng mỗi năm.
              </p>
            </div>

            <div className="w-full relative h-[400px] ">
              <Image
                src="https://res.cloudinary.com/anh-khoi/image/upload/v1739864920/banner/Ch%C6%B0a_c%C3%B3_t%C3%AAn_400_x_400_px_10_zbovq8.png"
                fill
                alt="why-us-2"
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex items-center justify-center">
        <h2 className="text-center text-lg flex-col md:text-xl md:flex-row lg:text-xl lg:flex xl:text-3xl xl:flex font-bold items-center flex gap-2 mb-10">
          <span className="font-light">Chúng tôi có thể giúp gì cho bạn?</span>
          Hãy nhắn tin cho chúng tôi!
        </h2>
      </div>
      <ContactSection />
    </div>
  );
};

export default About;
