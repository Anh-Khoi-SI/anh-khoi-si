// components/PartnerCarousel.js
"use client"; // This directive indicates that this component should be rendered on the client side

import { use, useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";

const partners = [
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377956/partners/wumh49yf5xvmchgjbtg8.png",
    alt: "Partner 1",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377956/partners/nmj1nd9m7cu8prfvay47.png",
    alt: "Partner 2",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377956/partners/apf5ouhq6r2cksi1imws.png",
    alt: "Partner 3",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377956/partners/uo2jjlihzwdyvf03lkxf.png",
    alt: "Partner 4",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/hkisasmnpdssxxz18tio.png",
    alt: "Partner 5",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/gpbjtcuqav70jc9kji6i.png",
    alt: "Partner 6",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/oq15dnjh9xe1mftipijr.png",
    alt: "Partner 7",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/w0lvf7xuvqhirouecwhx.png",
    alt: "Partner 8",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/cugk0hxjtscbgnnzr8ce.png",
    alt: "Partner 9",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/xokfbukjppztnfqj6puq.png",
    alt: "Partner 10",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377957/partners/zleimk5dfhlzpngp69fy.png",
    alt: "Partner 11",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/rescwlfshnuaxsszbwbv.png",
    alt: "Partner 12",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/cmi2q1ld87xe7udmruti.png",
    alt: "Partner 13",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/ulusizikdl8rldn5xpwf.png",
    alt: "Partner 14",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/fkp6hg89uy1rd8pyxbmf.png",
    alt: "Partner 15",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/drkgxkf2kaxwlwlno6lw.png",
    alt: "Partner 16",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/spknhkuqlhcwwpem5lh8.png",
    alt: "Partner 17",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/sihhe6ygnjnypq4uhhpa.png",
    alt: "Partner 18",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377958/partners/vuaroiptmsjpahgevp5k.png",
    alt: "Partner 19",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/xm0q0wmg3m1qdmnvx6ey.png",
    alt: "Partner 20",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/uz8rhggpj0ul6mlal86q.png",
    alt: "Partner 21",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/es8ej3ox1yws4itsftyn.png",
    alt: "Partner 22",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/d1xmvcbc435b0lgoakhf.png",
    alt: "Partner 23",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/wvj7fv8yqnuq3ts3i2qc.png",
    alt: "Partner 24",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/uezn8wdde38imtosrske.png",
    alt: "Partner 25",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/gjhz2ltrts66hzpciscz.png",
    alt: "Partner 26",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/y4jpwcaza9drcsedmbgr.png",
    alt: "Partner 27",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377959/partners/i5jqrene53vajcabquos.png",
    alt: "Partner 28",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377960/partners/muth5vjr6jizxutg4vag.png",
    alt: "Partner 29",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377960/partners/oo099d1ihjottpehlxuk.png",
    alt: "Partner 30",
  },
  {
    img: "https://res.cloudinary.com/anh-khoi/image/upload/v1739377960/partners/txnhc1ib0zxobnzkeqth.png",
    alt: "Partner 31",
  },
];

const PartnerCarousel = () => {
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
              src={partner.img}
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
