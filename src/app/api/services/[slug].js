export default function handler(req, res) {
  const { slug } = req.query;

  // Dữ liệu giả lập (thay bằng database thực tế)
  const services = [
    {
      slug: "network-setup",
      name: "Cấu hình mạng",
      description: "Dịch vụ cài đặt hệ thống mạng",
      image: "/images/network.jpg",
    },
    {
      slug: "server-installation",
      name: "Cài đặt Server",
      description: "Cấu hình và triển khai máy chủ",
      image: "/images/server.jpg",
    },
  ];

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return res.status(404).json({ message: "Dịch vụ không tồn tại" });
  }

  res.status(200).json(service);
}
