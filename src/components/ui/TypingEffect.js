"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const text = ["Giải Pháp Tích Hợp", "Hệ Thống"];

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function TypingEffect() {
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
    <h1 className="text-6xl font-bold text-left leading-[1.2]">
      {text.map((line, lineIndex) => (
        <span key={lineIndex} className="inline">
          {" "}
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
                    className="absolute -right-1 top-0 h-[60px] w-[4px] bg-black"
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
          {/* Xuống dòng sau "Hệ Thống" */}
          {lineIndex === 0 && <br />}
        </span>
      ))}
      {/* Con trỏ cuối cùng nằm ngay sau chữ "Thống" */}
      {cursorIndex >= totalLetters && (
        <motion.span
          className="inline-block h-[60px] w-[4px] bg-black"
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
