import { motion } from "framer-motion";
import ArrowButton from "../ui/ArrowButton";

const Cultura = () => {
  return (
    <section className=" overflow-hidden w-full relative bg-p-blue-600 py-[78px] px-[32px]">
      <div
        className={`w-fit p-[8px]  bg-[#E3E4E5]/20 backdrop-blur-sm  rounded-[6px] flex items-center justify-center font-inter uppercase text-[14px] font-normal tracking-[-0.7px] text-p-blue-500 buttonBorder`}
      >
        <span className=" text-secondary-000">Cultura</span>
      </div>
      <div className="flex justify-between items-center mt-[18px] mb-[27px]">
        <h3 className="font-muli text-[48px] leading-[54px] tracking-[-2.4px] text-secondary-500 w-[750px]">
          Excelencia técnica, trabajo colaborativo y respeto por las personas.
        </h3>
        <div className="flex flex-col gap-[13px]">
          <p className="font-inter text-[16px] leading-[16px] tracking-[-0.64px] text-secondary-000">
            Certificaciones
          </p>
          <div className="w-[475px] h-[179px]] rounded-[16px] py-[16px] px-[24px] bg-[#0A093D] flex items-center justify-between">
            <img
              className="w-[346px] h-auto"
              src="/img/cultura/certificate.webp"
              alt=""
            />
            <div className="rounded-full bg-secondary-000 p-[10px] flex items-center justify-center">
              <img
                className="w-[50px]"
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
        className="buttonBorder"
      />
      <div className="mt-[130px] w-full h-[538px] relative">
        <div className="w-[794px] h-auto z-20 relative">
          <img
            className="w-full h-auto relative"
            src="/img/cultura/picture-both.webp"
            alt=""
          />
        </div>
        <div className="z-0 h-[485px] w-[710px] absolute top-[50%] right-[-32px] translate-y-[-50%] rounded-l-[80px] bg-[url('/img/cultura/background.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
          <div className="relative">
          <p className="font-muli text-[38px] leading-[24px] tracking-[-1.52px] text-secondary-000 mb-[59px] semibold">
            Nuestros valores
          </p>
          <ul className="text-inter text-[24px] leading-[28px] tracking-[-0.96px] text-secondary-000 flex flex-col gap-[12px]">
            <li>Pasión y Compromiso</li>
            <li>Confiabilidad e Innovación</li>
            <li>Agilidad</li>
            <li>Trabajo en Equipo</li>
            <li>Transparencia</li>
            <li>Honestidad</li>
          </ul>
         
          </div>
          <img className="absolute bottom-[-80px] right-0 w-full h-full z-30" src="/img/cultura/bg-misc.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cultura;
