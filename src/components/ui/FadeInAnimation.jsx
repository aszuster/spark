"use client";
import { motion } from "framer-motion";
import React from "react";

export default function FadeInAnimation({
  children,
  className,
  delay = 0.025,
  duration = 0.8,
  inView = false,
  marginNotInView = "-50px",
  marginInView = "-100px",
}) {

  return (
      <motion.div
        initial="initial"
        animate="inView"
        whileInView="inView"
        variants={{
          initial: {
            y: 10,
            opacity: 0,
          },
          inView: {
            y: 0,
            opacity: 1,
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
        className={`${className}`}
      >
        {children}
      </motion.div>
  );
}
