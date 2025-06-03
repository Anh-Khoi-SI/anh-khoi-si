"use client";

import ComingSoon from "@/components/shared/ComingSoon";
import axios from "@/utils/axios";
import { useEffect } from "react";

export default function Product() {
  const fetchProducts = async () => {
    const res = await axios.get("/product");

    if (res.status === 200) {
      return res.data;
    }
    throw new Error("Failed to fetch products");
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("Products fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="pt-[87px] px-4">
      <ComingSoon />
    </div>
  );
}
