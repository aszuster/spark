import React from "react";
import { motion } from "motion/react";

export const LetterReveal = ({text, className}) => {
  return (
    <div>
      <FlipText className={className}>{text}</FlipText>
    </div>
  );
};

const DURATION = 0.35;
const STAGGER = 0.05;

const FlipText = ({ children, className }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{
        margin: "-100px",
        once: true,
      }}
      className="relative block overflow-hidden whitespace-nowrap"
    //   style={{
    //     lineHeight: 0.75,
    //   }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "105%",
              },
              inView: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${className}`}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};