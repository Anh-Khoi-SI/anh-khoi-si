"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import axios from "axios";

export default function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return; // Nếu không có id, không fetch API

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/blogs?id=${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Spin />;

  if (!blog) return null;

  return (
    <div className="">
      <input className="text-2xl font-bold" value={blog.title} />
      <p className="text-gray-600">{blog.subTitle}</p>
      <img
        src={blog.banner}
        alt="Blog banner"
        className="mt-4 w-full max-h-64 object-cover"
      />
      <div className="mt-4">{blog.content}</div>
    </div>
  );
}
