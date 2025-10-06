import { motion } from "framer-motion";
import ArrowButton from "../ui/ArrowButton";

const Banner = () => {
  return (
    <div className="lg:h-auto overflow-hidden w-full relative bg-p-blue-600 py-[37px] px-[15px]">
      <div className="flex items-center justify-between py-[120px] px-[40px] xxl:px-[60px] rounded-[80px] bg-gradient-to-l from-[#090A44] to-[#09082F]">
        <p className="font-muli text-[48px] leading-[54px] tracking-[-2.4px] text-secondary-000">¿Querés trabajar con nosotros?</p>
        <ArrowButton text="Unite al equipo" />
      </div>
    </div>
  );
};

export default Banner;
