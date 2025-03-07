"use client";

import "antd/dist/reset.css";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import AdminLayout from "./admin/layout";
import "@ant-design/v5-patch-for-react-19";

import { metadata } from "./meta";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="vi">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      </head>
      <body className="min-h-screen">
        <AntdRegistry>
          {isAdmin ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </AntdRegistry>
        <Analytics />
      </body>
    </html>
  );
}
