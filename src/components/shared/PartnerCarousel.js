// components/PartnerCarousel.js
"use client"; // This directive indicates that this component should be rendered on the client side

import { useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";

const PartnerCarousel = ({ partners }) => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Default to 5 slides
  const [slidesToScroll, setSlidesToScroll] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToScroll(1);
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToScroll(2);
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToScroll(3);
        setSlidesToShow(3);
      } else {
        setSlidesToScroll(5);
        setSlidesToShow(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "var(--secondary)",
        },
      }}
    >
      <div className="w-full overflow-hidden">
        <Carousel
          autoplay
          dots={false}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          autoplaySpeed={2000}
          infinite
          arrows
        >
          {partners.map((partner, index) => (
            <img
              src={`https://res.cloudinary.com/anh-khoi/image/upload/partners/${partner.title}.png`}
              alt={partner.alt}
              key={index}
              className="p-[6px] h-[120px] object-contain rounded-lg w-auto transition-all duration-300 transform hover:scale-110"
            />
          ))}
        </Carousel>
      </div>
    </ConfigProvider>
  );
};

export default PartnerCarousel;
