"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AdminHeader() {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => setIsShow(!isShow);

  return (
    <div className="fixed top-0 left-0 right-0 h-[50px] bg-white shadow-md px-4 flex items-center z-50 transition-all duration-300 justify-between">
      <a
        className="flex items-center gap-[5px] font-regular text-secondary text-base"
        href="/admin"
      >
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
      </a>
      <div className="flex items-centertext-sm cursor-pointer ">
        <div
          onClick={handleShow}
          className="flex items-center cursor-pointer gap-2"
        >
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span>
            Xin Chào, <span className="font-medium">Admin</span>
          </span>
        </div>
      </div>

      {isShow && (
        <div className="absolute right-0 top-10 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Đăng xuất
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
