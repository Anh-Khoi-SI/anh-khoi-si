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
  { key: "blog", label: "Tin Tức", href: "/blog" },
  { key: "product", label: "Sản phẩm" },
];

const productItems = [
  { key: "switches", label: "Switch", href: "/product-list/switch" },
  { key: "routers", label: "Router", href: "/product-list/router" },
  {
    key: "access-points",
    label: "Access Point",
    href: "/product-list/wifi-access-point",
  },
];

const serviceItems = [
  {
    key: "1",
    label: <div className="text-black">Giải Pháp Tích Hợp Hệ Thống</div>,
    href: "/services/system-integration",
    // children: [
    //   {
    //     key: "1-1",
    //     label: "DC Infrastructure Solution",
    //     href: "/services/system-integration/dc-infra-solution", // Thêm link
    //   },
    //   {
    //     key: "1-2",
    //     label: "Mạng Doanh Nghiệp",
    //     href: "/services/system-integration/network-business", // Thêm link
    //   },
    //   {
    //     key: "1-3",
    //     label: "Mạng Quang",
    //     href: "/services/system-integration/fiber-network", // Thêm link
    //   },
    //   {
    //     key: "1-4",
    //     label: "Máy Chủ - Lưu Trữ",
    //     href: "/services/system-integration/server-storage", // Thêm link
    //   },
    // ],
  },
  {
    key: "2",
    label: <div className="text-black">Chuyển Đổi Số</div>,
    href: "/services/business-digitalization",

    // children: [
    //   {
    //     key: "2-1",
    //     label: "DC SDN Solution",
    //     href: "/services/business-digitalization/dc-sdn-solution",
    //   },
    //   {
    //     key: "2-2",
    //     label: "Wifi - Mạng không dây",
    //     href: "/services/business-digitalization/wifi-wireless-network",
    //   },
    //   {
    //     key: "2-3",
    //     label: "Bảo Mật Mạng",
    //     href: "/services/business-digitalization/network-security",
    //   },
    //   {
    //     key: "2-4",
    //     label: "DC Switching Solution",
    //     href: "/services/business-digitalization/dc-switching-solution",
    //   },
    // ],
  },
  {
    key: "3",
    label: <div className="text-black">Giải Pháp Cloud</div>,
    href: "/services/cloud-solutions",
    // children: [
    //   {
    //     key: "3-1",
    //     label: "Enterprise Data Storage",
    //     href: "/services/cloud-solutions/enterprise-data-storage",
    //   },
    //   {
    //     key: "3-2",
    //     label: "DC Switching Solution",
    //     href: "/services/cloud-solutions/dc-switching-solution",
    //   },
    //   {
    //     key: "3-3",
    //     label: "Bảo Mật Mạng",
    //     href: "/services/cloud-solutions/network-security",
    //   },
    // ],
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

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
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

  const [disableUnderline, setDisableUnderline] = useState(false);

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.href === pathname);
    if (activeItem) {
      setCurrent(activeItem.key);
      setDisableUnderline(false); // Cho phép underline khi có item chính xác
    } else if (pathname.startsWith("/services")) {
      setCurrent("service"); // Đặt current cho mục "Dịch vụ"
      setDisableUnderline(true); // Tắt hiệu ứng underline
    } else if (pathname.startsWith("/product-list")) {
      setCurrent("product"); // Đặt current cho mục "Sản phẩm"
      setDisableUnderline(true); // Tắt hiệu ứng underline
    }
  }, [pathname]);

  useEffect(() => {
    if (current === "service") {
      setUnderlineStyle({ left: 0, width: 0 }); // Ẩn underline
      return;
    }
    const activeElement = document.querySelector(`[data-key="${current}"]`);
    if (activeElement && menuRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [current, disableUnderline]); // Thêm disableUnderline vào dependency để cập nhật khi cần

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
          <div
            ref={menuRef}
            className="flex gap-6 text-sm font-regular z-10 relative lg:text-sm xl:text-lg "
          >
            {menuItems.map((item) => {
              if (item.key === "product") {
                return (
                  <ConfigProvider
                    key={item.key}
                    theme={{
                      token: {
                        borderRadiusLG: 0,
                        controlPaddingHorizontal: 20,
                        padding: 40,
                        fontSize: 16,
                      },
                      components: {
                        Dropdown: {
                          paddingBlock: 18,
                        },
                      },
                    }}
                  >
                    <Dropdown
                      menu={{
                        items: productItems.map((subItem) => ({
                          key: subItem.key,
                          label: (
                            <Link href={subItem.href}>{subItem.label}</Link>
                          ),
                        })),
                      }}
                      trigger={["hover"]}
                    >
                      <div
                        className={`${
                          current === "product"
                            ? "text-black border-b-[2px] border-primary "
                            : "text-gray-600"
                        } gap-2 text-sm font-regular z-10 relative lg:text-sm xl:text-lg  cursor-pointer pb-2  hover:text-black flex items-center `}
                      >
                        {item.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </Dropdown>
                  </ConfigProvider>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  data-key={item.key}
                  className={`cursor-pointer pb-2 ${
                    current === item.key ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div
              className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
              style={{
                width: underlineStyle.width,
                left: underlineStyle.left,
              }}
            ></div>
          </div>

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
                  paddingBlock: 18,
                },
              },
            }}
          >
            <Dropdown
              menu={{
                items: serviceItems.map((item) => ({
                  key: item.key,
                  label: <Link href={item.href}>{item.label}</Link>,
                  // children: item.children.map((child) => ({
                  //   key: child.key,
                  //   label: <Link href={child.href}>{child.label}</Link>,
                  // })),
                })),
              }}
              trigger={["hover"]}
            >
              <div
                className={`${
                  current === "service"
                    ? "text-black border-b-[2px] border-primary "
                    : "text-gray-600"
                } gap-2 text-sm font-regular z-10 relative lg:text-sm xl:text-lg  cursor-pointer pb-2  hover:text-black flex items-center `}
              >
                Dịch vụ - Giải pháp
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
              </div>
            </Dropdown>
          </ConfigProvider>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Button Liên Hệ */}
        <Link
          className="relative border-[1px] items-center p-2 px-4 gap-2 border-secondary overflow-hidden group hidden xl:flex"
          href="/contact"
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
        </Link>

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
              href="tel:02839970399"
            >
              028 399 70 399
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
                  Dropdown: {},
                },
              }}
            >
              <Dropdown
                menu={{
                  items: serviceItems.map((item) => ({
                    key: item.key,
                    label: (
                      <Link
                        onClick={handleCloseMenu}
                        className="w-full flex px-6 py-4 items-center"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ),
                  })),
                }}
                trigger={["click"]}
              >
                <div
                  className={`w-full items-center p-6 flex justify-between bg-lightbackground cursor-pointer relative `}
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  Sản Phẩm
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
                  Dropdown: {},
                },
              }}
            >
              <Dropdown
                menu={{
                  items: serviceItems.map((item) => ({
                    key: item.key,
                    label: (
                      <Link
                        onClick={handleCloseMenu}
                        className="w-full flex px-6 py-4 items-center"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ),
                  })),
                }}
                trigger={["click"]}
              >
                <div
                  className={`w-full items-center p-6 flex justify-between bg-lightbackground cursor-pointer relative `}
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  Dịch Vụ và Giải Pháp
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

      {/* <ConfigProvider
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
      </ConfigProvider> */}
    </div>
  );
}
