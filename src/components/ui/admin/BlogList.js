"use client"; // Chạy chỉ trên client

import { useState, useEffect } from "react";
import { List, Spin } from "antd";

const BlogList = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spin size="large" className="w-full" />;
  if (!blogs) return <p>Không có bài viết nào.</p>;

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{ pageSize: 3 }}
      dataSource={blogs}
      renderItem={(item) => (
        <List.Item
          key={item._id}
          actions={[
            <a key="edit" href={`/admin/manage-blog/${item._id}`}>
              Chỉnh Sửa Bài Viết
            </a>,
            <a key="delete" className="text-red-500">
              Xóa Bài
            </a>,
          ]}
          extra={<img width={170} alt={item.title} src={item.banner} />}
        >
          <List.Item.Meta
            title={<a href={`/admin/manage-blog/${item._id}`}>{item.title}</a>}
            description={item.subTitle}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default BlogList;
