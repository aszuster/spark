"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";

export default function RevealByLine({
  text,
  className,
  delay = 0.025,
  duration = 0.8,
  inView = false,
  marginNotInView = "-50px",
  marginInView = "-100px",
}) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={`relative block overflow-hidden min-h-[1px] ${className || ""}`}
    >
      <motion.span
        initial="initial"
        whileInView="inView"
        variants={{
          initial: {
            y: "100%",
          },
          inView: {
            y: 0,
          },
        }}
        viewport={
          !inView
            ? { margin: marginNotInView, once: true }
            : {
              margin: marginInView,
                once: true,
              }
        }
        transition={{
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        }}
        className="block relative"
      >
        {text}
      </motion.span>
    </div>
  );
}
