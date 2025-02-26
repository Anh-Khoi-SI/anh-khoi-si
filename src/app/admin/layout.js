"use client";
import React from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <html lang="vi">
      <body className="h-screen flex">
        {/* Sidebar */}
        <AdminSidebar />
        <AdminHeader />
        {/* Main Content */}
        <div className="flex-1 overflow-hidden ml-[200px] mt-[50px]">
          <div className="h-full p-6 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
