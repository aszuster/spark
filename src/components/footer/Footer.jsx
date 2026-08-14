import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../../svg/logo";
import Phone from "../../svg/phone";
import Mail from "../../svg/mail";
import Linkedin from "../../svg/linkedin";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";

const Footer = () => {
  const { t } = useTranslation();
  const addresses = t("footer.addresses", { returnObjects: true });

  return (
    <footer className="mt-[-1px] h-full md:h-auto overflow-hidden w-full relative bg-p-blue-600 pt-[100px] px-[32px] pb-[28px]">
      <div className="flex flex-col md:flex-row justify-between items-start pb-[150px] lg:pb-[162px] xxl:pr-[321px]">
        <div className="hidden lg:flex items-center gap-[20px]">
          <Logo
            color="var(--color-p-orange-600)"
            className="mb-[80px] md:mb-0 md:w-[138px] lg:w-[200px] lg:h-[44px]"
          />
          <p className="hidden md:block uppercase font-muli text-[20px] lg:text-[20px] w-[133px] font-normal leading-[24px] tracking-[-0.56px] text-secondary-000">
            {t("footer.tagline")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[92px] md:gap-[0px] justify-between md:items-center md:w-[490px] lg:w-[750px]">
          <div className="flex flex-col gap-[20px] md:gap-[24px] font-inter text-[20px] lg:text-[20px] text-secondary-100 md:leading-[24px] tracking-[-1.2px] ">
            <a
              href="#quienes-somos"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.quienesSomos")}
            </a>
            <a
              href="#que-hacemos"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.queHacemos")}
            </a>
            <a
              href="#como-trabajamos"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.comoTrabajamos")}
            </a>
            <a
              href="#clientes"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.clientes")}
            </a>
            <a
              href="#proyectos-destacados"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.proyectosDestacados")}
            </a>
            <a
              href="#cultura"
              className="hover:text-p-orange-600 transition-all duration-300 hover:underline"
            >
              {t("footer.links.cultura")}
            </a>
          </div>
          <div className="flex flex-col gap-[84px] md:gap-[96px] w-[284px] md:w-[185px] lg:w-[284px] md:h-full lg:h-auto ">
            <div className="flex flex-col gap-[12px] md:gap-[22px]">
              <div className="flex items-center gap-[16px]">
                <Phone />
                <p className="font-inter text-[16px] leading-[16px] text-secondary-000 opacity-[0.7]">
                  {t("footer.contact.phone")}
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Mail />
                <a
                  href="mailto:info@sparkgy.com"
                  className="font-inter text-[16px] leading-[16px] text-secondary-000 opacity-[0.7] hover:text-p-orange-600 transition-all duration-300"
                >
                  {t("footer.contact.email")}
                </a>
              </div>
            </div>

            <div className="">
              <p className="font-inter text-[14px] md:text-[16px] md:leading-[16px] text-secondary-000 opacity-[0.7] mb-[40px] md:mb-[64px] lg:mb-[31px]">
                {addresses[0]}
              </p>
              <p className="font-inter text-[14px] md:text-[16px] md:leading-[16px] text-secondary-000 opacity-[0.7] mb-[40px] md:mb-[64px] lg:mb-[31px]">
                {addresses[1]}
              </p>
              <div className="flex gap-[16px]">
                {/* <a href="https://www.linkedin.com/company/sparknrgsol"
                  className="p-[11px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Linkedin />
                </a> */}
                {/* <div
                  className="py-[11px] px-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Facebook />
                </div> */}
                {/* <div
                  className="py-[11px] px-[11px] cursor-pointer relative overflow-hidden transition-all duration-300 bg-[#E3E4E5]/20 
      backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-000 buttonBorder
      w-auto group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                  <Twitter />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[86px] md:items-center">
        <a href="" className="font-inter text-[14px] text-secondary-700">
          {t("footer.termsAndConditions")}
        </a>
        <p className="font-inter text-[14px] text-secondary-700">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
