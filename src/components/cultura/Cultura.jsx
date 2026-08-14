import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ArrowButton from "../ui/ArrowButton";

const Cultura = () => {
  const { t } = useTranslation();
  const values = t("cultura.values", { returnObjects: true });

  return (
    <section
      id="cultura"
      className=" overflow-hidden w-full  relative bg-p-blue-600 py-[40px] md:py-[78px] px-[20px] md:px-[32px] xxl:py-[99px] "
    >
      <div
        className={`w-fit p-[8px]  bg-[#E3E4E5]/20 backdrop-blur-sm  rounded-[6px] flex items-center justify-center font-inter uppercase text-[14px] font-normal tracking-[-0.7px] text-p-blue-500 buttonBorder`}
      >
        <span className=" text-secondary-000">{t("cultura.sectionLabel")}</span>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center mt-[18px] mb-[40px] md:mb-[27px] xxl:mb-0">
        <h3 className="mb-[40px] md:mb-[0px] font-muli text-[28px] md:text-[32px] lg:text-[48px] leading-[36px] md:leading-[38px] lg:leading-[54px] tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-2.4px] text-secondary-500 md:w-[387px] lg:w-[750px] xxl:w-[836px]">
          {t("cultura.heading")}
        </h3>
        <div className="flex flex-col gap-[13px]">
          <p className="font-inter text-[16px] leading-[16px] tracking-[-0.64px] text-secondary-000">
            {t("cultura.certificationsLabel")}
          </p>
          <div className="w-full md:w-[335px] lg:w-[475px] h-[142px] md:h-[142px] lg:h-[179px] xxl:w-[604px] xxl:h-[227px] rounded-[16px] xxl:rounded-[20px] py-[16px] px-[24px] xxl:py-[20px] xxl:px-[30px] bg-[#0A093D] flex items-center justify-between gap-[16px] lg:gap-[0px]">
            <img
              className="w-[241px] md:w-[241px] lg:w-[346px] xxl:w-[400px] h-auto"
              src="/img/cultura/certificate.webp"
              alt=""
            />
            <a href="https://www.seamosbosques.com.ar/formulario" className="rounded-full bg-secondary-000 p-[10px] md:p-[6px] lg:p-[10px] flex items-center justify-center">
              <img
                className="w-[50px] md:w-[60px] lg:w-[50px] xxl:w-[90px]"
                src="/img/cultura/compromiso.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <ArrowButton
        text={t("cultura.sustainabilityPolicyButton")}
        download={true}
        className="buttonBorder w-full md:w-fit justify-between md:justify-start"
        href="/docs/politica-sostenibilidad.pdf"
      />
      <div className="mt-[53px] md:mt-[130px] w-full h-[1700px] md:h-[1200px] lg:h-[800px] relative lg:mt-[200px]">
        {/* <div className="w-full md:w-[439px] lg:w-[794px] h-auto z-20 relative xxl:w-[986px]">
          <img
            className="w-full h-auto relative"
            src="/img/cultura/picture-both.webp"
            alt=""
          />
        </div> */}

        <div
          className="py-[52px] md:py-[0px] px-[23px]  z-0 h-[1200px] md:h-[1000px]  lg:h-[800px] 
        w-full lg:w-[1062px] absolute left-[50%] 
        translate-x-[-50%] bottom-[20px] md:top-[50%] md:translate-x-0 md:left-auto md:right-[-32px] 
        md:translate-y-[-50%] rounded-[40px] md:rounded-l-[80px] md:rounded-r-none 
        bg-[url('/img/cultura/background.png')] bg-cover bg-center flex items-center md:justify-center 
        justify-start xxl:justify-start lg:right-[-32px] lg:px-[118px]"
        >
          <div className="relative">
            <div className="absolute top-[-480px] md:top-[-280px] left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0  bg-[url('/img/cultura/group-1.jpg')] bg-center bg-cover w-[406px] h-[250px] rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-[30px] overflow-hidden"></div>
            <div className="absolute top-[-250px] md:top-[-180px] left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0 md:right-[-80px] bg-[url('/img/cultura/group-2.jpg')] bg-center bg-cover w-[400px] lg:w-[521px] h-[215px] rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-[30px] overflow-hidden"></div>
            <div className="bg-secondary-000 px-[8px] py-[6px] rounded-[6px] w-auto mb-[50px] max-w-[160px]">
              <p className="text-[14px] text-p-blue-500 font-inter uppercase">
                {t("cultura.valuesLabel")}
              </p>
            </div>
            <div className="flex flex-col gap-y-[40px] lg:grid lg:grid-cols-2 lg:gap-y-[40px] gap-x-[120px]">
              {values.map((value, index) => (
                <div key={index}>
                  <p className="mb-[8px] font-inter font-semibold text-secondary-000 text-[20px] leading-[28px] tracking-[-4%]">
                    {value.title}
                  </p>
                  <p className="font-inter font-regular text-[16px] leading-[24px] tracking-[-4%] text-secondary-000">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="absolute h-[485px] w-[710px] xxl:h-[485px] 
          xxl:w-[1019px] md:bg-[url('/img/cultura/bg-misc.svg')] xxl:bg-[url('/img/cultura/misc1920.png')] xxl:bg-contain bg-bottom bg-no-repeat 
          right-0 z-30 bottom-0  md:bottom-[175px] lg:bottom-0">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Cultura;
