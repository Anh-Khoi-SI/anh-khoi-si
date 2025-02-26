"use client";
import React from "react";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";

const items = [
  {
    type: "divider",
  },
  {
    key: "sub1",
    label: "Liên Hệ",
    children: [
      {
        key: "1",
        label: "Option 1",
      },
      {
        key: "2",
        label: "Option 2",
      },
      {
        key: "3",
        label: "Option 3",
      },
      {
        key: "4",
        label: "Option 4",
      },
    ],
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
