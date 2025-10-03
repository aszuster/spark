import { motion } from "framer-motion";

const Marquee = ({ children }) => {

const marqueeAnimation ={
    x: ['0%', '-100%'],
    transition:{
        duration: 30,
        ease: 'linear',
        repeat: Infinity,

    }
}

  return (
    <div className="flex gap-[20px] shrink-0 grow-0 basis-auto overflow-x-hidden items-end">
      <motion.div className="flex shrink-0 grow-0 basis-auto min-w-min gap-[20px] items-end" animate={marqueeAnimation}>{children}</motion.div>
      <motion.div className="flex shrink-0 grow-0 basis-auto min-w-min gap-[20px] items-end" animate={marqueeAnimation}>{children}</motion.div>
    </div>
  );
};

export { Marquee };
