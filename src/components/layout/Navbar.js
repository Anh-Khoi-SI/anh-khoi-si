"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Trang chủ", key: "home", href: "/" },
  { label: "Sản phẩm", key: "products", href: "/products" },
  { label: "Liên hệ", key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [current, setCurrent] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuRef = useRef(null);

  useEffect(() => {
    const menuItem = menuRef.current?.querySelector(`[data-key="${current}"]`);
    if (menuItem) {
      setUnderlineStyle({
        width: `${menuItem.offsetWidth}px`,
        left: `${menuItem.offsetLeft}px`,
      });
    }
  }, [current]);

  return (
    <div className="flex justify-between w-full bg-white p-6 fixed z-10">
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-[5px] font-regular text-2xl text-secondary">
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
        </div>

        {/* Menu */}
        <div className="relative h-[35px]">
          <ul ref={menuRef} className="flex gap-6 text-lg font-regular ">
            {menuItems.map((item) => (
              <li
                key={item.key}
                data-key={item.key}
                className={`cursor-pointer  ${
                  current === item.key ? "text-black" : "text-gray-600"
                }`}
                onClick={() => setCurrent(item.key)}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <div
              className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
              style={{ width: underlineStyle.width, left: underlineStyle.left }}
            />
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative border-[1px] flex items-center p-2 px-4 gap-2 border-secondary overflow-hidden group">
          {/* Lớp nền chạy từ trái sang phải */}
          <span className=" cursor-pointer absolute inset-0 w-full bg-gradient-to-r from-primary to-transparent transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>

          {/* Nội dung bên trên nền */}
          <div className="relative z-10 text-secondary cursor-pointer">
            Liên Hệ Với Chúng Tôi Ngay
          </div>
          <div className="relative z-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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

        <div className="flex gap-6">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            (+84) 123 456 789
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            info@anhkhoisi.com.vn
          </div>
        </div>
      </div>
    </div>
  );
}
