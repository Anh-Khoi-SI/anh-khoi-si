import TypingEffect from "@/components/ui/TypingEffect";
import Image from "next/image";
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
export default function Home() {
  return (
    <main className="w-full bg-white text-black pt-[106px]">
      {/* Banner Section */}
      <section className="flex justify-center h-[300px] md:h-[250px] items-center">
        <div className="max-w-[1400px] flex flex-col gap-3 w-full">
          {/* Logo */}
          <div className="flex items-center gap-[5px] font-regular text-xl text-secondary">
            Anh
            <div className="rounded-full bg-secondary">
              <Image
                src="/logo/anhkhoi-pri.png"
                alt="logo"
                width={30}
                height={30}
                className="pl-[2px] pr-[1px] pb-[2px]"
              />
            </div>
            Khôi
          </div>
          <TypingEffect />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full relative mb-40 bg-lightbackground">
        <div className="flex w-full h-[650px] ">
          <div className="w-full h-full bg-primary">
            <div className=" absolute right-1/2 ">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              </div>
            </div>
            <div className=" whitespace-pre  pt-[100px] p-6 justify-center text-black text-xl w-full flex">
              <div className="flex justify-center h-fit">
                <p className=" font-light">Anh Khôi </p>
                <span className="font-medium">cung cấp các giải pháp về: </span>
                <div className="flex justify-center items-center pl-2">
                  <hr className="w-36 h-[1px] bg-black border-none " />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <p className="text-secondary text-lg w-full px-24 pt-10 max-w-[550px]">
              Chúng tôi cung cấp giải pháp tích hợp hệ thống, giúp doanh nghiệp
              vận hành hiệu quả và tối ưu chi phí.
            </p>
          </div>

          <div className="absolute w-full justify-center items-center flex pt-[150px]">
            <div className="col-span-2 flex relative w-[1270px] gap-0">
              {[
                {
                  id: "01",
                  title: "TÍCH HỢP HỆ THỐNG",
                  img: "/banner/system.png",
                },
                {
                  id: "02",
                  title: "CHUYỂN ĐỔI SỐ",
                  img: "/banner/digital.png",
                },
                {
                  id: "03",
                  title: "GIẢI PHÁP CLOUD",
                  img: "/banner/cloud.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden group ${
                    item.id === "02" ? "bg-black" : "bg-secondary"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="object-cover h-[500px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="   flex flex-col justify-end p-4 ">
                    <p className="text-white text-2xl font-bold">{item.id}</p>
                    <p className="text-white text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="flex flex-col items-center w-full">
        <div className="max-w-[1600px]">
          <h2 className="text-center text-5xl font-bold items-center flex flex-col gap-2">
            Đối Tác Của Chúng Tôi
            <hr className="w-36 h-[1px] bg-black border-none my-4" />
          </h2>

          <ConfigProvider
            theme={{
              token: {
                colorText: "var(--secondary)",
              },
            }}
          >
            <Carousel
              autoplay
              dots={false}
              slidesToShow={5}
              slidesToScroll={1}
              autoplaySpeed={1500}
              infinite
              arrows
              responsive={[
                { breakpoint: 1600, settings: { slidesToShow: 5 } }, // Extra large screens
                { breakpoint: 1200, settings: { slidesToShow: 4 } }, // Large screens
                { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Medium screens
                { breakpoint: 768, settings: { slidesToShow: 2 } }, // Small screens
                { breakpoint: 480, settings: { slidesToShow: 1 } }, // Extra small screens
              ]}
              className="py-10 relative"
            >
              {partners.map((partner, index) => (
                <img
                  src={partner.img}
                  alt={partner.alt}
                  key={index}
                  className="h-[120px] object-contain rounded-lg w-auto transition-all duration-300 transform hover:scale-110 p-[6px]"
                />
              ))}
            </Carousel>
          </ConfigProvider>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col items-center mb-20">
        <h2 className="text-center text-5xl font-bold items-center flex flex-col gap-2">
          Về Anh Khôi
          <hr className="w-36 h-[1px] bg-black border-none my-4" />
        </h2>
        <div className="grid grid-cols-2 mt-10 max-w-[1400px] items-center justify-center bg-lightbackground">
          <div className="p-32">
            <h3 className="text-3xl font-semibold">Giới Thiệu Chung</h3>
            <hr className="w-32 h-[1px] bg-black border-none my-4" />

            <p>
              Công ty CP Tích hợp hệ thống Anh Khôi là một công ty khởi nghiệp
              tiên phong trong lĩnh vực Công nghệ thông tin, tập trung vào cung
              cấp các giải pháp tích hợp hệ thống, tư vấn chuyển đổi số và các
              giải pháp về Cloud cho doanh nghiệp. Chúng tôi là đối tác đáng tin
              cậy, hướng tới việc tối ưu hóa hiệu suất kinh doanh của khách hàng
              thông qua việc triển khai các giải pháp công nghệ tiên tiến, phù
              hợp với nhu cầu cụ thể của họ.
            </p>
          </div>
          <div className="relative h-[600px] flex justify-end">
            <Image
              src="/banner/about-1.png"
              alt="about1"
              fill
              className="object-cover"
            />{" "}
          </div>
          <div className="relative h-[600px] flex justify-end">
            <Image
              src="/banner/about-2.png"
              alt="about2"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-32">
            <h3 className="text-3xl font-semibold">Tầm Nhìn</h3>
            <hr className="w-32 h-[1px] bg-black border-none my-4" />
            <p>
              Tầm nhìn của chúng tôi là trở thành một trong những nhà cung cấp
              giải pháp công nghệ hàng đầu, mang lại giá trị vượt trội và sự đổi
              mới liên tục cho khách hàng của mình. Chúng tôi không chỉ đơn
              thuần là một nhà cung cấp dịch vụ, mà còn là một đối tác chiến
              lược đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
