"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function TypingEffect({ text, ui }) {
  const fullText = text.join(" "); // Ghép thành 1 chuỗi
  const [cursorIndex, setCursorIndex] = useState(0);
  const totalLetters = fullText.length;

  useEffect(() => {
    if (cursorIndex < totalLetters) {
      const timeout = setTimeout(() => {
        setCursorIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [cursorIndex, totalLetters]);

  let currentIndex = -1; // Vị trí tổng thể của ký tự

  return (
    <h1
      className={`
      text-left font-bold leading-[1.2]
      ${ui === "about" ? "md:text-[17px] lg:text-[26px] xl:text-[38px]" : ""}
      ${ui === "SysInt" ? "text-3xl sm:text-6xl leading-[0.6]" : ""}
      ${!["about", "SysInt"].includes(ui) ? "text-5xl w-full sm:text-6xl" : ""}
    `}
    >
      {text.map((line, lineIndex) => (
        <span key={lineIndex} className="inline">
          {/* Dùng inline để không xuống dòng */}
          {line.split("").map((letter, i) => {
            currentIndex++; // Tăng vị trí tổng thể
            return (
              <span key={i} className="relative inline-block">
                <motion.span
                  custom={currentIndex}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
                {/* Hiển thị con trỏ tại vị trí hiện tại */}
                {currentIndex === cursorIndex && (
                  <motion.span
                    className={` ${
                      ui === "about"
                        ? "bg-white sm:h-[20px] lg:h-[35px]"
                        : "bg-black h-[55px]"
                    }

                    ${
                      ui === "SysInt"
                        ? "bg-white h-[20px] sm:h-[60px] "
                        : "bg-black h-[55px]"
                    }
                     absolute -right-1 top-0  w-[4px]`}
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </span>
            );
          })}
          {lineIndex === 0 && (
            <>
              <br className="block sm:hidden" />
            </>
          )}
          {lineIndex === 0 && (ui === "about" || ui === "SysInt") && (
            <br className="block" />
          )}

          {/* Xuống dòng sau "Hệ Thống" */}
          {lineIndex === 1 && ui !== "about" && ui !== "SysInt" && <br />}
        </span>
      ))}
      {/* Con trỏ cuối cùng */}
      {cursorIndex >= totalLetters && (
        <motion.span
          className={` ${
            ui === "about"
              ? "bg-white h-[10px] sm:h-[20px] lg:h-[35px]"
              : "bg-black h-[40px] sm:h-[55px]"
          }
          
           ${
             ui === "SysInt"
               ? "bg-white h-[20px] sm:h-[60px]"
               : "bg-black h-[40px] sm:h-[55px]"
           }
           inline-block  w-[4px]`}
          animate={{ opacity: [1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      )}
    </h1>
  );
}
