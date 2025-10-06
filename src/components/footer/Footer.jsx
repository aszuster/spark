import { motion } from "framer-motion";
import Logo from "../../svg/logo";
import Phone from "../../svg/phone";
import Mail from "../../svg/mail";
import Linkedin from "../../svg/linkedin";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";

const Footer = () => {
  return (
    <footer className="lg:h-auto overflow-hidden w-full relative bg-p-blue-600 pt-[100px] px-[32px] pb-[28px]">
      <div className="flex justify-between items-start pb-[162px] pr-[321px]">
        <Logo color="var(--color-p-orange-600)" className="lg:w-[138px]" />
        <div className="flex justify-between items-center w-[750px]">
          <div className="flex flex-col gap-[24px] font-inter text-[24px] text-secondary-100 leading-[24px] tracking-[-1.2px] ">
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Quiénes somos</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Qué hacemos</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Cómo trabajamos</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Clientes</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Proyectos destacados</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Cultura</a>
            <a href="" className="hover:text-p-orange-600 transition-all duration-300 hover:underline">Trabajá con nosotros</a>
          </div>
          <div className="flex flex-col gap-[96px] w-[284px]">
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-[16px]">
                <Phone />
                <p className="font-inter text-[16px] leading-[16px] text-secondary-000 opacity-[0.7]">(+54) 11 2271 1825</p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Mail />
                <p className="font-inter text-[16px] leading-[16px] text-secondary-000 opacity-[0.7] ">info@sparkgy.com</p>
              </div>
            </div>

            <div>
              <p className="font-inter text-[16px] leading-[16px] text-secondary-000 opacity-[0.7] mb-[31px]">
                Serrano 669, C1414 DEM, Ciudad de Buenos Aires, Argentina
              </p>
              <div className="flex gap-[16px]">
                <div
                  className="p-[11px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Linkedin />
                </div>
                <div
                  className="py-[11px] px-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Facebook />
                </div>
                <div
                  className="py-[11px] px-[11px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[86px] items-center">
        <a href="" className="font-inter text-[14px] text-secondary-700">Términos y condiciones</a>
        <p className="font-inter text-[14px] text-secondary-700">Política de privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
