import { motion } from "framer-motion";
import ArrowButton from "../ui/ArrowButton";

const Banner = () => {
  return (
    <div id="trabaja-con-nosotros" className="mt-[-1px] lg:h-auto overflow-hidden w-full relative bg-p-blue-600 md:py-[37px] px-[5px] md:px-[15px]">
      <div className="flex flex-col gap-[40px] md:gap-[0px] md:flex-row items-center justify-between pt-[25px] pb-[43px] md:py-[74px] lg:py-[120px] px-[14px] md:px-[40px] xxl:px-[60px] rounded-[16px] md:rounded-[16px] lg:rounded-[80px] bg-gradient-to-l from-[#090A44] to-[#09082F]">
        <p className="font-muli text-[28px] md:text-[32px] lg:text-[48px] leading-[36px] md:leading-[38px] lg:leading-[54px] tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-2.4px] text-secondary-000 md:w-[291px] lg:w-[750px]">¿Querés trabajar con nosotros?</p>
        <ArrowButton text="Unite al equipo" className="w-full md:w-fit justify-between md:justify-start" />
      </div>
    </div>
  );
};

export default Banner;
