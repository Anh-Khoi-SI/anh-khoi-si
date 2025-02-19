"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MailEffect from "../ui/MailEffect";
import { ConfigProvider, Dropdown, Modal } from "antd";
import ContactSection from "../shared/ContactSection";

const menuItems = [
  { key: "home", label: "Trang chủ", href: "/" },
  { key: "about", label: "Giới thiệu", href: "/about" },
  { key: "product", label: "Sản phẩm", href: "/products" },
  { key: "contact", label: "Liên hệ", href: "/contact" },
];

const serviceItems = [
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/system-integration"
      >
        Giải Pháp Tích Hợp Hệ Thống
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/service-center">
        Trung Tâm Dịch Vụ
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/blog">
        Tin Tức Giải Pháp
      </Link>
    ),
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const menuRef = useRef(null);
  const pathname = usePathname();

  const [current, setCurrent] = useState("");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.href === pathname);
    if (activeItem) {
      setCurrent(activeItem.key);
    }
  }, [pathname]);

  useEffect(() => {
    const activeElement = document.querySelector(`[data-key="${current}"]`);
    if (activeElement && menuRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [current]);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.href === pathname);
    if (activeItem) {
      setCurrent(activeItem.key);
    } else if (
      pathname === "/service-center" ||
      pathname === "/system-integration" ||
      pathname === "/blog"
    ) {
      setCurrent("service"); // Đặt current cho mục "Dịch vụ"
    }
  }, [pathname]);

  return (
    <div
      className={`flex justify-between w-full ${
        pathname === "/about" && scrollY === 0 ? "bg-transparent" : "bg-white"
      } px-4 py-6 fixed transition-all duration-300 z-50`}
    >
      <div className="flex gap-8 items-center">
        {/* Logo */}
        <a
          className="flex items-center gap-[5px] font-regular text-secondary lg:text-base xl:text-lg 2xl:text-xl "
          href="/"
        >
          Anh
          <div className="rounded-full bg-secondary">
            <Image
              src="/logo/anhkhoi-pri.png"
              alt="logo"
              width={40}
              height={40}
              className="pl-[2px] pr-[1px] pb-[2px]"
            />
          </div>
          Khôi
        </a>

        {/* Menu */}
        <div
          className={`flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 lg:flex hidden`}
        >
          <ul
            ref={menuRef}
            className="flex gap-6 text-sm font-regular z-10 relative lg:text-sm xl:text-lg "
          >
            {menuItems.map((item) => (
              <Link key={item.key} href={item.href} data-key={item.key}>
                <li
                  className={`cursor-pointer pb-2 ${
                    current === item.key ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
            <div
              className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
              style={{
                width: underlineStyle.width,
                left: underlineStyle.left,
              }}
            ></div>
          </ul>

          <ConfigProvider
            theme={{
              token: {
                borderRadiusLG: 0,
                controlPaddingHorizontal: 20,
                padding: 40,
                fontSize: 16,
              },
              components: {
                Dropdown: {
                  paddingBlock: 16,
                },
              },
            }}
          >
            <Dropdown
              menu={{
                items: serviceItems,
              }}
              trigger={["hover"]}
            >
              <a
                className={`${
                  current === "service"
                    ? "text-black border-b-[2px] border-primary "
                    : "text-gray-600"
                } gap-2 text-sm font-regular z-10 relative lg:text-sm xl:text-lg  cursor-pointer pb-2  hover:text-black flex items-center `}
              >
                Dịch vụ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </Dropdown>
          </ConfigProvider>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Button Liên Hệ */}
        <div
          className="relative border-[1px] items-center p-2 px-4 gap-2 border-secondary overflow-hidden group hidden xl:flex"
          onClick={showModal}
        >
          {/* Lớp nền chạy từ trái sang phải */}
          <span className="cursor-pointer absolute inset-0 w-full bg-gradient-to-r from-primary to-transparent transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>

          {/* Nội dung bên trên nền */}
          <div className="relative z-10 text-secondary cursor-pointer text-sm 2xl:text-base">
            Liên Hệ Ngay
          </div>

          <div className="relative z-10 cursor-pointer transition-transform duration-500 group-hover:translate-x-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        {/* Thông Tin Liên Hệ*/}
        <div className=" gap-4 items-center lg:flex hidden">
          <div className="flex gap-1 items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 animate-ring"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <a
              className=" opacity-80 hover:opacity-100 transition-transform duration-300 text-sm 2xl:text-base"
              href="tel:0123456789"
            >
              (+84) 123 456 789
            </a>
          </div>

          <MailEffect />
        </div>

        {/* UI Mobile */}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-600 "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-white z-20 flex flex-col items-center">
            <div
              onClick={handleCloseMenu}
              className="flex items-center justify-between w-full px-6 py-6 border-b-[1px] border-black"
            >
              <a
                className="flex items-center gap-[5px] font-regular text-secondary lg:text-base xl:text-lg 2xl:text-xl "
                href="/"
              >
                Anh
                <div className="rounded-full bg-secondary">
                  <Image
                    src="/logo/anhkhoi-pri.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="pl-[2px] pr-[1px] pb-[2px]"
                  />
                </div>
                Khôi
              </a>

              <div>
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <Link
              className="w-full items-center p-6 flex justify-between bg-lightbackground"
              href="/"
              onClick={handleCloseMenu}
            >
              Trang Chủ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <Link
              className="w-full items-center p-6 flex justify-between bg-lightbackground"
              href="/about"
              onClick={handleCloseMenu}
            >
              Giới Thiệu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <Link
              className="w-full items-center p-6 flex justify-between bg-lightbackground"
              href="/products"
              onClick={handleCloseMenu}
            >
              Sản Phẩm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <Link
              className="w-full items-center p-6 flex justify-between bg-lightbackground"
              href="/contact"
              onClick={handleCloseMenu}
            >
              Liên Hệ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>

            <ConfigProvider
              theme={{
                token: {
                  borderRadiusLG: 0,
                  controlPaddingHorizontal: 20,
                  padding: 40,
                  fontSize: 16,
                  boxShadowSecondary: 0,
                },
                components: {
                  Dropdown: {
                    paddingBlock: 16,
                  },
                },
              }}
            >
              <Dropdown
                menu={{
                  items: serviceItems.map((item) => ({
                    key: item.key,
                    label: item.label,
                  })),
                }}
                trigger={["click"]}
              >
                <div
                  className={`w-full items-center p-6 flex justify-between bg-lightbackground cursor-pointer `}
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  Dịch Vụ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={` size-5  ${
                      serviceOpen ? " rotate-90" : ""
                    }  transition-transform `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Dropdown>
            </ConfigProvider>
          </div>
        )}
      </div>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "var(--primary)",
            },
          },
        }}
      >
        <Modal
          open={isModalOpen}
          footer={[]}
          className="w-full"
          onCancel={() => setIsModalOpen(false)}
          width={800}
        >
          <div className=" bg-primary">
            <p className="w-full flex items-center justify-center pt-10  text-2xl font-semibold px-2 uppercase">
              Liên Hệ Với Chúng Tôi Ngay
            </p>
            <ContactSection />
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
}
