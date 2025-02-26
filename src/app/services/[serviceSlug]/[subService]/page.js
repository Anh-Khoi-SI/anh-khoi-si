"use client";
import { usePathname } from "next/navigation";

export default function SubServicePage() {
  const pathname = usePathname();

  return <div className="pt-[87px]">activeItem</div>;
}
