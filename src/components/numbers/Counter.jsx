import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 *
 * @param root0
 * @param root0.value
 */


export default function Counter({
  value,
  direction = "up",
  className,
  prefix = "",
  suffix = ""
}) {
  const ref = useRef(null);
  
  // Validar que value sea un número válido
  const numericValue = typeof value === 'number' && !isNaN(value) ? value : 0;
  
  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 150,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : numericValue);
    }
  }, [motionValue, isInView, numericValue, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedNumber = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
        ref.current.textContent = `${prefix}${formattedNumber}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <span className={className} ref={ref} />;
}