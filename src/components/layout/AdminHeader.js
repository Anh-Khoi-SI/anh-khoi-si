"use client";
import React from "react";
import Image from "next/image";

export default function AdminHeader() {
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
      <div>a</div>
    </div>
  );
}
