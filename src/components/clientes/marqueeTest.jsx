import { motion } from "framer-motion";
import { useRef } from "react";
import { Logos } from "./Logos";

// const logos = [
//   "/img/clientes/pan-american.svg",
//   "/img/clientes/pluspetrol.png",
//   "/img/clientes/tgs.svg",
//   "/img/clientes/ypf.svg",
//   "/img/clientes/phoenix.png",
// ];

export default function InfiniteMarquee() {
  return (
    <div className="overflow-hidden w-full relative h-[200px]">
      <div className="flex items-end h-full">
        <motion.div
          className="flex gap-[20px] whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }} // move only half (because array is doubled)
          transition={{
            repeat: Infinity,
            duration: 20, // adjust speed
            ease: "linear",
          }}
        >
          {/* Duplicate logos once so the loop is seamless */}
          {[...Logos, ...Logos].map((logo, i) => (
            <motion.div
              key={i}
              layout
              className="flex-shrink-0 flex items-end justify-center bg-gray-100 rounded-xl overflow-hidden"
              initial={{ height: 100, width: 160 }}
              whileHover={{ scaleY: 1.5, width: 240 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformOrigin: "bottom" }}
            >
              <img
                src={logo.url}
                alt="logo"
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
