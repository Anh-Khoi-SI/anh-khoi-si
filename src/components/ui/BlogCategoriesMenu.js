"use client";

import { useEffect, useState } from "react";
import { Menu, ConfigProvider, Spin } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BlogCategoriesMenu() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/blog-categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Lỗi khi lấy danh mục blog:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/blog/${category.key}`);
  };

  const menuItems = categories.map((category) => {
    if (category.children && category.children.length > 0) {
      return {
        key: category.key,
        label: category.label,
        children: category.children.map((child) => ({
          key: child.key,
          label: child.label,
          onClick: () => handleCategoryClick(child),
        })),
      };
    } else {
      return {
        key: category.key,
        label: category.label,
        onClick: () => handleCategoryClick(category),
      };
    }
  });
  return (
    <div>
      <div className="border-[1px] border-[#f0f0f0] p-4 font-semibold text-xl">
        Danh Mục Bài Viết
      </div>
      {loading ? (
        <Spin className="flex justify-center items-center w-full" />
      ) : (
        <ConfigProvider
          theme={{
            token: {
              fontSize: 16,
              margin: 20,
            },
            components: {
              Menu: {
                subMenuItemBg: "var(--background)",
                subMenuItemBorderRadius: 0,
              },
            },
          }}
        >
          <Menu mode="inline" items={menuItems} />
        </ConfigProvider>
      )}
    </div>
  );
}
