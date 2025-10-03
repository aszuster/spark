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

export default function Marquee({ hoveredLogoId, onLogoHover }) {
  return (
    <div className="overflow-hidden w-full relative h-[200px]">
      <div className="w-full h-full absolute bottom-0">
      <div className="flex items-end h-full">
        <motion.div
          className="flex gap-[20px] whitespace-nowrap "
            animate={{ x: ["0%", "-50%"] }} // move only half (because array is doubled)
          transition={{
            repeat: Infinity,
            duration: 50, // adjust speed - higher = slower
            ease: "linear",
          }}
        >
          {/* Duplicate logos once so the loop is seamless */}
          {[...Logos, ...Logos].map((logo, i) => {
            const isHovered = hoveredLogoId === logo.id;
            return (
              <motion.div
                key={i}
                layout
                className="flex-shrink-0 flex items-center justify-center bg-secondary-000 rounded-xl overflow-hidden group"
                initial={{ height: 100, width: 160 }}
                animate={isHovered ? { 
                  height: 200, 
                  width: 445, 
                  y: 0,
                  borderRadius: "xl"
                } : { 
                  height: 100, 
                  width: 160, 
                  y: 0,
                  borderRadius: "xl"
                }}
                whileHover={{ 
                  height: 200, 
                  width: 445, 
                  y: 0,
                  borderRadius: "xl"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ 
                  transformOrigin: "bottom",
                  alignSelf: "flex-end"
                }}
                onMouseEnter={() => onLogoHover && onLogoHover(logo.id)}
                onMouseLeave={() => onLogoHover && onLogoHover(null)}
              >
                <img
                  src={logo.url}
                  alt="logo"
                  className={`object-contain w-[126px] h-[49px] transition-all duration-400 ease-in-out ${
                    isHovered ? 'scale-y-200 scale-x-200' : 'group-hover:scale-y-200 group-hover:scale-x-200'
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </div>
  );
}
