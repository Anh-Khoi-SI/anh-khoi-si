"use client";
import React from "react";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";

const items = [
  {
    type: "divider",
  },
  {
    key: "1",
    label: <Link href="/admin/manage-blog">Quản lý Blog</Link>,
  },
];

export default function AdminSidebar() {
  return (
    <div className="w-[200px] h-screen  text-white fixed top-[50px] left-0 z-50 items-center flex flex-col">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              borderRadiusLG: 0,
            },
          },
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          className="border-0 bg-white h-full"
          items={items}
        />
      </ConfigProvider>
    </div>
  );
}
