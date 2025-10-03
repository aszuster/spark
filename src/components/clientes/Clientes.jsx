// import { LetterRevealTest } from "../ui/LetterRevealTest";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";
import { Marquee } from "./Marquee";
import { Logos } from "./Logos";
import { div } from "motion/react-client";
import InfiniteMarquee from "./marqueeTest";

const Clientes = () => {
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
          <InfiniteMarquee />
          {/* <div className="flex items-end overflow-x-hidden h-[200px]">
            <Marquee>
              {Logos.map((logo, index) => {
                const isFirstLogo = index === 0;
                const isLastLogo = index === Logos.length - 1;
                
                return (
                  <div 
                    key={logo.id} 
                    className={`w-[178px] h-[100px] bg-secondary-000 rounded-[12px] flex items-center justify-center relative transition-all duration-300 ease-out hover:h-[200px] hover:w-[445px] origin-bottom ${
                      isFirstLogo ? 'ml-[]' : isLastLogo ? 'mr-0' : ''
                    }`}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    <img src={logo.url} alt={logo.name} className="h-[60px] w-auto" />
                  </div>
                );
              })}
            </Marquee>
          </div> */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
