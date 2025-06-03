import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div
      key={product._id}
      className={`border border-gray-300 rounded-sm flex ${
        layoutType === "horizontal"
          ? "flex-row items-center gap-2 p-2 sm:p-3 w-full max-w-[500px]"
          : "flex-col "
      } h-auto hover:border-gray-400 cursor-pointer overflow-hidden 
            transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white `}
      onClick={() => handleProductClick(product)}
    >
      {/* Image Section */}
      <div
        className={`flex items-center justify-center bg-gray-100 relative ${
          layoutType === "horizontal"
            ? "h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
            : "h-[130px] min-[380px]:h-[160px] xs:h-[180px] sm:h-[220px] w-full"
        } overflow-hidden`}
      >
        {product.images.length ? (
          <Image
            src={product.images?.[0]?.url || "/placeholder-image.png"}
            alt={product.title}
            className="p-4 w-full h-full object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            preview={false}
          />
        ) : (
          <div className="p-4 w-full h-full object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">No image</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div
        className={`flex flex-col  justify-between ${
          layoutType === "horizontal" ? "flex-1" : "p-2 min-[380px]:p-3 xs:p-4"
        } relative bg-white`}
      >
        <p className="text-[12px] sm:text-[14px] font-medium line-clamp-2 text-red-600  ">
          {product.productID}
        </p>
        <p className="text-[14px] sm:text-[16px] font-normal line-clamp-2">
          {product.title}
        </p>
        <p className="text-[16px] sm:text-[18px] font-semibold text-primary">
          Liên hệ
        </p>

        {/* Hover Arrow */}
        <div className="absolute bottom-2 right-3 opacity-0 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${
              layoutType === "horizontal" ? "w-5 h-5" : "size-4"
            } text-gray-600`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Product;
