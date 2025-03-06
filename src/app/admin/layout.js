"use client";

import React from "react";
import AdminSidebar from "@/components/layout/admin/AdminSidebar";
import AdminHeader from "@/components/layout/admin/AdminHeader";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function AdminLayout({ children }) {
  return (
    <AntdRegistry>
      <div>
        <AdminSidebar />
        <div className="overflow-hidden ml-[110px] mt-[30px]">
          <AdminHeader />
          <div>{children}</div>
        </div>
      </div>
    </AntdRegistry>
  );
}
