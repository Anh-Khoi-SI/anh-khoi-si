"use client";
import { subServiceData } from "@/constants/subServiceData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubServicePage() {
  const pathname = usePathname();
  const [lastSegment, setLastSegment] = useState("");

  useEffect(() => {
    if (pathname) {
      setLastSegment(pathname.split("/").pop());
    }
  }, [pathname]);

  const content = subServiceData[lastSegment] || "Nội dung mặc định";

  return (
    <div className="pt-[87px] items-center flex flex-col">
      <section className="w-full h-[400px] relative">
        <div className="absolute inset-0 bg-third opacity-90 z-20 items-center justify-center flex flex-col gap-4">
          <p className="px-4 text-4xl text-white font-bold">{content.title}</p>
          <p className="px-4 text-2xl text-white">{content.subTitle}</p>
        </div>
        <Image
          src="https://res.cloudinary.com/anh-khoi/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740020454/banner/system-integration.png"
          fill
          className="object-cover"
          alt="subServiceBanner"
        />
      </section>
      <section className="max-w-[1400px] w-full pt-10">
        <div></div>
      </section>
    </div>
  );
}
