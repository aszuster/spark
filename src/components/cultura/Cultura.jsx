import { motion } from "framer-motion";
import ArrowButton from "../ui/ArrowButton";

const Cultura = () => {
  return (
    <section id="cultura" className=" overflow-hidden w-full h-full relative bg-p-blue-600 py-[40px] lg:py-[78px] px-[20px] lg:px-[32px] xxl:py-[99px] ">
      <div
        className={`w-fit p-[8px]  bg-[#E3E4E5]/20 backdrop-blur-sm  rounded-[6px] flex items-center justify-center font-inter uppercase text-[14px] font-normal tracking-[-0.7px] text-p-blue-500 buttonBorder`}
      >
        <span className=" text-secondary-000">Cultura</span>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center mt-[18px] mb-[40px] lg:mb-[27px] xxl:mb-0">
        <h3 className="mb-[40px] lg:mb-[0px] font-muli text-[28px] lg:text-[48px] leading-[36px] lg:leading-[54px] tracking-[-1.4px] lg:tracking-[-2.4px] text-secondary-500 lg:w-[750px] xxl:w-[836px]">
          Excelencia técnica, trabajo colaborativo y respeto por las personas.
        </h3>
        <div className="flex flex-col gap-[13px]">
          <p className="font-inter text-[16px] leading-[16px] tracking-[-0.64px] text-secondary-000">
            Certificaciones
          </p>
          <div className="w-full lg:w-[475px] h-[142px] lg:h-[179px] xxl:w-[604px] xxl:h-[227px] rounded-[16px] xxl:rounded-[20px] py-[16px] px-[24px] xxl:py-[20px] xxl:px-[30px] bg-[#0A093D] flex items-center justify-between gap-[16px] lg:gap-[0px]">
            <img
              className="w-[241px] lg:w-[346px] xxl:w-[440px] h-auto"
              src="/img/cultura/certificate.webp"
              alt=""
            />
            <div className="rounded-full bg-secondary-000 p-[10px] flex items-center justify-center">
              <img
                className="w-[50px] lg:w-[50px] xxl:w-[60px]"
                src="/img/cultura/compromiso.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <ArrowButton
        text="Política de Sostenibilidad"
        download={true}
        className="buttonBorder w-full lg:w-fit justify-between lg:justify-start"
      />
      <div className="mt-[53px] md:mt-[130px] w-full h-[629px] lg:h-[538px] relative xxl:mt-[148px] xxl:h-[668px]">
        <div className="w-full md:w-[794px] h-auto z-20 relative xxl:w-[986px]">
          <img
            className="w-full h-auto relative"
            src="/img/cultura/picture-both.webp"
            alt=""
          />
        </div>
        <div className="py-[52px] md:py-[0px] px-[23px] md:px-[0px] z-0 h-[375px] md:h-[485px] w-full md:w-[710px] xxl:h-[485px] xxl:w-[1019px] absolute left-[50%] translate-x-[-50%] bottom-[20px] md:top-[50%] md:right-[-32px] md:translate-y-[-50%] rounded-[40px] md:rounded-l-[80px] bg-[url('/img/cultura/background.png')] bg-cover bg-center flex items-center md:justify-center justify-start overflow-hidden xxl:justify-start">
          <div className="relative xxl:pl-[232px]">
          <p className="font-muli text-[24px] md:text-[38px] leading-[24px] md:leading-[24px] tracking-[-1.52px] text-secondary-000 mb-[58px] md:mb-[59px] font-semibold">
            Nuestros valores
          </p>
          <ul className="text-inter text-[16px] md:text-[24px] leading-[28px] md:leading-[28px] tracking-[-0.96px] text-secondary-000 flex flex-col md:gap-[12px] gap-[8px]">
            <li>Pasión y Compromiso</li>
            <li>Confiabilidad e Innovación</li>
            <li>Agilidad</li>
            <li>Trabajo en Equipo</li>
            <li>Transparencia</li>
            <li>Honestidad</li>
          </ul>
         
          </div>
          <div className="absolute h-[485px] w-[710px] xxl:h-[485px] 
          xxl:w-[1019px] lg:bg-[url('/img/cultura/bg-misc.svg')] xxl:bg-[url('/img/cultura/misc1920.png')] xxl:bg-contain bg-bottom bg-no-repeat 
          right-0 z-30 bottom-0">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cultura;
