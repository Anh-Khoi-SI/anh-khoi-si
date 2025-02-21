"use client";
import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, notification } from "antd";

export default function ContactSection() {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, description) => {
    api[type]({
      message: title,
      description: description,
      showProgress: true,
      pauseOnHover: true,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setLoading(false);
      openNotificationWithIcon(
        "warning",
        "Vui lòng điền đầy đủ thông tin",
        "Vui lòng kiểm tra lại và đảm bảo đã điền đầy đủ thông tin cần thiết. Cảm ơn bạn!"
      );
      return;
    }

    const submittedData = { ...formData };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      openNotificationWithIcon(
        "success",
        "Thông Tin Đã Được Gửi",
        "Cảm ơn bạn đã liên hệ với chúng tôi! Đội ngũ của chúng tôi sẽ liên hệ lại với bạn để hỗ trợ và giải đáp mọi thắc mắc. Xin cảm ơn và chúc bạn một ngày tốt lành!"
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Dừng loading
    }
    console.log(submittedData); // Đảm bảo log đúng biến
  }

  return (
    <>
      {contextHolder}

      <section className="flex flex-col items-center mb-20 relative w-full">
        {loading && (
          <div className="top-0 bottom-0 right-0 left-0 absolute flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-primary max-w-[1200px] w-full  py-14 px-8 lg:px-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Cột trái */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Tên"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-secondary bg-transparent outline-none p-2  placeholder:text-secondary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-secondary bg-transparent outline-none p-2  placeholder:text-secondary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Số Điện Thoại"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-secondary bg-transparent outline-none p-2  placeholder:text-secondary"
              />
            </div>

            {/* Cột phải */}
            <div className="flex flex-col gap-4">
              <textarea
                name="message"
                placeholder="Tin Nhắn"
                value={formData.message}
                onChange={handleChange}
                className="border-b border-black bg-transparent outline-none p-2 h-[155px] placeholder:text-secondary"
              ></textarea>

              <button
                type="submit"
                className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                disabled={loading}
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
