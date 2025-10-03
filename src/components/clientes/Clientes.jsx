// import { LetterRevealTest } from "../ui/LetterRevealTest";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";
import Marquee from "./Marquee";
import { Logos } from "./Logos";
import { useState } from "react";

const Clientes = () => {
  const [hoveredLogoId, setHoveredLogoId] = useState(null);

  return (
    <section className="lg:h-screen overflow-hidden w-full relative bg-p-blue-600">
      <div className="m-[16px] h-full lg:rounded-[80px] bg-[url('/img/blue-bg.png')] bg-cover bg-center bg-[#0E0D29] bg-blend-color-dodge">
        <div className="pt-[80px] pb-[115px]">
          <div className="flex flex-col gap-[22px] pl-[28px]">
            <SectionLabel
              text="Clientes"
              className="bg-[#dddddd]/24! backdrop-blur-sm! text-secondary-000! glassBorder"
            />
            <h3 className="font-muli text-[48px] leading-[57px] tracking-[-2.4px] text-secondary-500 w-[600px]">
              Empresas líderes <br />
              que confían en Spark
            </h3>
          </div>
          <div className="mb-[80px] xxl:mb-[120px]">
            <Marquee 
              hoveredLogoId={hoveredLogoId} 
              onLogoHover={setHoveredLogoId}
            />
          </div>
          <div className="w-[558px] h-[143px] xxl:h-[112px] xxl:w-[820px] flex flex-wrap gap-x-[24px] gap-y-[12px] ml-[600px] xxl:ml-[796px]">
            {Logos.map((logo, i) => {
              const isHovered = hoveredLogoId === logo.id;
              return (
                <div 
                  key={i} 
                  className="hover:cursor-pointer"
                  onMouseEnter={() => setHoveredLogoId(logo.id)}
                  onMouseLeave={() => setHoveredLogoId(null)}
                >
                  <p className={`font-inter text-[16px] tracking-[-0.8px] relative after:content-[''] after:absolute after:left-[-7px] after:top-[50%] 
                  after:translate-y-[-50%] after:w-[7px] after:h-[7px] after:rounded-[2px] after:bg-p-orange-600 after:opacity-0 after:transition-all after:duration-300
                  transition-all duration-300 ${
                    isHovered 
                      ? 'text-secondary-000 pl-[10px] after:opacity-100' 
                      : 'text-secondary-700 hover:text-secondary-000 hover:pl-[10px] hover:after:opacity-100'
                  }`}>
                    {logo.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
