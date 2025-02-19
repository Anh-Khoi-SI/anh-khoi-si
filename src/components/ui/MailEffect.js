"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MailEffect() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 800); // Chạy mỗi 1.5 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      className="flex gap-2 items-center cursor-pointer text-secondary hover:text-black transition-colors"
      href="mailto:info@anhkhoisi.com.vn"
    >
      {/* Căn giữa icon */}
      <div className="relative w-5 h-5 flex items-center justify-center ">
        <motion.svg
          key={isOpen ? "open" : "closed"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 absolute"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
              clipRule="evenodd"
            />
          ) : (
            <>
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </>
          )}
        </motion.svg>
      </div>

      <span className="transition-opacity duration-300 opacity-80 hover:opacity-100 text-sm 2xl:text-base">
        info@anhkhoisi.com.vn
      </span>
    </a>
  );
}
