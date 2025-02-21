"use client";

import TypingEffect from "@/components/ui/TypingEffect";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PartnerCarousel from "@/components/shared/PartnerCarousel";
import Link from "next/link";
import { Carousel } from "antd";
import ContactSection from "@/components/shared/ContactSection";

const blogPosts = [
  {
    id: 1,
    title: "Giải pháp mạng Wifi chuyên dụng cho Khách sạn, Resort",
    image:
      "https://thegioimaychu.vn/blog/wp-content/uploads/2022/06/TheGioiMayChu-Blog-hospitality-resort.jpg",
  },
  {
    id: 2,
    title:
      "Quản lý chính sách nhất quán cho mạng doanh nghiệp với công nghệ Aruba Dynamic Segmentation",
    image:
      "https://thegioimaychu.vn/blog/wp-content/uploads/2022/06/TheGioiMayChu-Blog-Image-Aruba-dynamic-segmentation.jpg",
  },
  {
    id: 3,
    title: "Switch mạng có nhiều loại khác nhau, đó là những loại nào?",
    image:
      "https://thegioimaychu.vn/blog/wp-content/uploads/2022/11/TheGioiMayChu-Blog-network-switch-rj45-ethernet.jpg",
  },

  {
    id: 4,
    title: "Cloud-managed Networking là gì?",
    image:
      "https://thegioimaychu.vn/blog/wp-content/uploads/2023/01/TheGioiMayChu-Blog-Image-cloud-managed-networking.jpg",
  },
  {
    id: 5,
    title: "Điện toán đám mây: Những xu hướng mới sẽ rõ nét hơn trong năm 2025",
    image:
      "https://thegioimaychu.vn/blog/wp-content/uploads/2024/12/TheGioiMayChu-Blog-Cloud-Computing.jpg",
  },
];

const partners = [
  {
    title: "hp",
    alt: "Partner 1",
  },
  {
    title: "cyberoam",
    alt: "Partner 2",
  },
  {
    title: "barracuda",
    alt: "Partner 3",
  },
  {
    title: "a10",
    alt: "Partner 4",
  },
  {
    title: "f5",
    alt: "Partner 5",
  },
  {
    title: "ecessa",
    alt: "Partner 6",
  },
  {
    title: "peplink",
    alt: "Partner 7",
  },
  {
    title: "polycom",
    alt: "Partner 8",
  },
  {
    title: "microsoft",
    alt: "Partner 9",
  },
  {
    title: "adobe",
    alt: "Partner 10",
  },
  {
    title: "vmware",
    alt: "Partner 11",
  },
  {
    title: "ibm",
    alt: "Partner 12",
  },
  {
    title: "autodesk",
    alt: "Partner 13",
  },
  {
    title: "kaspersky",
    alt: "Partner 14",
  },
  {
    title: "solaris",
    alt: "Partner 15",
  },
  {
    title: "eset",
    alt: "Partner 16",
  },
  {
    title: "mcafee",
    alt: "Partner 17",
  },
  {
    title: "symantec",
    alt: "Partner 18",
  },
  {
    title: "aruba",
    alt: "Partner 19",
  },
  {
    title: "cisco",
    alt: "Partner 20",
  },
  {
    title: "dell",
    alt: "Partner 21",
  },
  {
    title: "h3c",
    alt: "Partner 22",
  },
  {
    title: "ricoh",
    alt: "Partner 23",
  },
  {
    title: "hpe",
    alt: "Partner 24",
  },
  {
    title: "lenovo",
    alt: "Partner 25",
  },
  {
    title: "toshiba",
    alt: "Partner 26",
  },
  {
    title: "juniper",
    alt: "Partner 27",
  },
  {
    title: "watchguard",
    alt: "Partner 28",
  },
  {
    title: "fortinet",
    alt: "Partner 29",
  },
  {
    title: "astaro",
    alt: "Partner 30",
  },
  {
    title: "checkpoint",
    alt: "Partner 31",
  },
];

const text = ["Giải Pháp ", "Tích Hợp", "Hệ Thống"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Tạo ref cho carousel
  const nextIndex = (currentIndex + 1) % blogPosts.length;

  const nextSlide = () => {
    carouselRef.current.next(); // Gọi phương thức next
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    carouselRef.current.prev(); // Gọi phương thức prev
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <main className="w-full bg-white text-black pt-[87px] items-center flex flex-col">
      {/* Banner Section */}
      <section className="flex justify-center h-[300px] items-center max-w-[1400px] w-full">
        <div className=" flex flex-col gap-3  w-full 2xl:px-20 xl:px-14 lg:px-10 md:px-8 sm:px-6 px-6 ">
          {/* Logo */}
          <div className="flex items-center gap-[5px] font-regular text-xl text-secondary">
            Anh
            <div className="rounded-full bg-secondary">
              <Image
                src="/logo/anhkhoi-pri.png"
                alt="logo"
                width={30}
                height={30}
                className="pl-[2px] pr-[1px] pb-[2px]"
              />
            </div>
            Khôi
          </div>
          <TypingEffect text={text} />
        </div>
      </section>
      {/* Services Section */}
      <section className="w-full relative mb-40 bg-lightbackground">
        <div className="flex w-full h-[300px] sm:h-[650px]">
          <div className="w-full h-full bg-primary ">
            <div className=" absolute right-1/2 ">
              <div className="p-6">
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
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              </div>
            </div>
            <div className=" whitespace-pre  pt-[70px] p-6 justify-center text-black text-base sm:text-xl w-full flex sm:pt-[100px]">
              <div className="flex justify-center h-fit">
                <span className=" font-light">Anh Khôi </span>
                <span className="font-medium">cung cấp các giải pháp về:</span>
                <div className="flex justify-center items-center pl-2">
                  <hr className="w-0 h-[1px] bg-black border-none sm:w-36" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-lg hidden lg:flex">
            <p className="text-secondary w-full px-20 pt-10 max-w-[550px] text-lg hidden lg:flex xl:px-24">
              Chúng tôi cung cấp giải pháp tích hợp hệ thống, giúp doanh nghiệp
              vận hành hiệu quả và tối ưu chi phí.
            </p>
          </div>

          <div className="absolute w-full justify-center items-center flex pt-[100px] sm:pt-[140px] ">
            <div className="col-span-2 flex relative w-[1270px] gap-0 ">
              {[
                {
                  id: "01",
                  title: "TÍCH HỢP HỆ THỐNG",
                  img: "/banner/system.png",
                  path: "/system-integration",
                },
                {
                  id: "02",
                  title: "CHUYỂN ĐỔI SỐ",
                  img: "/banner/digital.png",
                  path: "/business-digitalization",
                },
                {
                  id: "03",
                  title: "GIẢI PHÁP CLOUD",
                  img: "/banner/cloud.png",
                  path: "/cloud-solutions",
                },
              ].map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={`group relative overflow-hidden group ${
                    item.id === "02" ? "bg-black" : "bg-secondary"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="object-cover h-[200px] transition-transform duration-300 group-hover:scale-105 sm:h-[500px]"
                  />
                  <div className="flex flex-col justify-end p-4 ">
                    <p className="text-white text-2xl font-bold">{item.id}</p>
                    <p className="text-white text-sm">{item.title}</p>
                  </div>
                  <div className=" absolute bottom-4 right-6 text-white group-hover:translate-x-2 transition-transform">
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Partner Section */}
      <section className="flex flex-col items-center justify-center w-full mb-20 max-w-[1200px]">
        <h2 className="text-center  font-bold flex flex-col gap-2 items-center md:text-4xl text-2xl">
          Đối Tác Của Chúng Tôi
          <hr className="w-36 h-[1px] bg-black border-none my-4" />
        </h2>

        <PartnerCarousel partners={partners} />
      </section>
      {/* About Us Section */}
      <section className="flex flex-col items-center mb-20 ">
        <h2 className="text-center text-2xl md:text-4xl font-bold items-center flex flex-col gap-2">
          Về Anh Khôi
          <hr className="w-36 h-[1px] bg-black border-none my-4" />
        </h2>
        <div className="grid grid-cols-1 mt-10 max-w-[1400px] items-center justify-center bg-lightbackground xl:grid-cols-2">
          <div className="p-8 xl:p-32">
            <h3 className="text-xl xl:text-3xl font-semibold">
              Giới Thiệu Chung
            </h3>
            <hr className="w-32 h-[1px] bg-black border-none my-4" />

            <p className=" text-sm xl:text-base">
              Công ty CP Tích hợp hệ thống Anh Khôi là một công ty khởi nghiệp
              tiên phong trong lĩnh vực Công nghệ thông tin, tập trung vào cung
              cấp các giải pháp tích hợp hệ thống, tư vấn chuyển đổi số và các
              giải pháp về Cloud cho doanh nghiệp. Chúng tôi là đối tác đáng tin
              cậy, hướng tới việc tối ưu hóa hiệu suất kinh doanh của khách hàng
              thông qua việc triển khai các giải pháp công nghệ tiên tiến, phù
              hợp với nhu cầu cụ thể của họ.
            </p>
          </div>
          <div className="relative h-[600px] flex justify-end">
            <Image
              src="/banner/about-1.png"
              alt="about1"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0">
              <div className="p-8 bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" p-8 xl:hidden block">
            <h3 className="text-xl font-semibold">Tầm Nhìn</h3>
            <hr className="w-32 h-[1px] bg-black border-none my-4" />
            <p className="text-sm">
              Tầm nhìn của chúng tôi là trở thành một trong những nhà cung cấp
              giải pháp công nghệ hàng đầu, mang lại giá trị vượt trội và sự đổi
              mới liên tục cho khách hàng của mình. Chúng tôi không chỉ đơn
              thuần là một nhà cung cấp dịch vụ, mà còn là một đối tác chiến
              lược đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.
            </p>
          </div>

          <div className="relative h-[600px] flex justify-end">
            <Image
              src="/banner/about-2.png"
              alt="about2"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0">
              <div className="p-8 bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-32 xl:block hidden">
            <h3 className="text-3xl font-semibold">Tầm Nhìn</h3>
            <hr className="w-32 h-[1px] bg-black border-none my-4" />
            <p>
              Tầm nhìn của chúng tôi là trở thành một trong những nhà cung cấp
              giải pháp công nghệ hàng đầu, mang lại giá trị vượt trội và sự đổi
              mới liên tục cho khách hàng của mình. Chúng tôi không chỉ đơn
              thuần là một nhà cung cấp dịch vụ, mà còn là một đối tác chiến
              lược đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 group cursor-pointer">
          <Link
            className="flex gap-2 items-center font-semibold text-lg transition-all duration-300 group-hover:text-xl"
            href="/about"
          >
            Tìm hiểu thêm về chúng tôi
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </Link>
          <hr className="w-52 h-[2px] bg-primary border-none my-2 transition-all duration-300 group-hover:w-24" />
        </div>
      </section>
      {/* Bài viết mới nhất Slider */}
      <section className="relative w-full overflow-hidden pb-20 ">
        <div className="flex ">
          <div className="w-1/2 py-12  bg-white text-secondary text-lg px-4 lg:text-4xl md:text-2xl md:px-24 sm:text-xl sm:px-16">
            <span className="font-bold">Bài Viết</span> Mới Về Giải Pháp <br />
            <span className="font-bold">Tích Hợp Hệ Thống</span>
          </div>
          <div
            className="w-1/2  flex items-center bg-secondary text-white font-bold 
            text-base px-4 
            sm:text-lg sm:px-8 sm:py-4
            md:text-xl md:px-12 md:py-6
            lg:text-2xl lg:px-16  lg:py-8
            xl:text-xl xl:px-24 xl:py-12
            "
          >
            <p
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {blogPosts[nextIndex].title}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden h-[80px] xs:h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px] ">
          <Carousel dots={false} slidesToShow={2} ref={carouselRef} infinite>
            {blogPosts.map((post, index) => {
              const nextPostIndex = (index + 1) % blogPosts.length;
              return (
                <div
                  key={post.id + nextPostIndex}
                  className="w-full flex-shrink-0 flex"
                >
                  <div className="relative h-[80px] xs:h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px] ">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className=" relative h-[80px] xs:h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]">
                    <Image
                      src={blogPosts[nextPostIndex].image}
                      alt={blogPosts[nextPostIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-white text-secondary text-xl font-bold right-0 flex justify-end">
            <div>
              <button
                onClick={prevSlide}
                className=" left-0 transform p-4 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover:-translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="right-0 top-0 transform p-4 bg-primary group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-1/2 px-6 sm:px-16 p-8 text-secondary text-sm sm:text-sm md:text-lg bg-secondary text-white group">
            <Link
              href={`/blog/${blogPosts[nextIndex].id}`}
              className="flex gap-2 items-center group-hover:text-xl transition-all "
            >
              Xem Chi Tiết Bài Viết
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:translate-x-2 transition-transform duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <hr className=" h-[1px] bg-primary border-none mt-2 w-0 sm:w-32 group-hover:w-20 transition-all duration-500" />
          </div>
        </div>
      </section>
      {/* Contact Us Section*/}
      <div>
        <h2 className="text-center text-lg flex-col md:text-xl md:flex-row lg:text-xl lg:flex xl:text-3xl xl:flex font-bold items-center flex gap-2 mb-10">
          <span className="font-light">Chúng tôi có thể giúp gì cho bạn?</span>
          Hãy nhắn tin cho chúng tôi!
        </h2>
      </div>
      <ContactSection />
    </main>
  );
}
