// import { LetterRevealTest } from "../ui/LetterRevealTest";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";

const QuienesSomos = () => {
  return (
    <div id="quienes-somos" className="h-[725px] md:h-[655px] lg:h-screen overflow-hidden">
      <div>
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
          className="md:hidden z-30 mx-[20px] mt-[80px] mb-[90px]"
        >
          <ul className="text-secondary-800 font-inter text-[14px] font-normal leading-[24px] tracking-[-0.56px] list-disc list-inside">
            <li className="leading-[20px]">PETRÓLEO Y GAS <br /> <span className="pl-[20px] leading-[24px]">(Uptream / Midstream / Downstream)</span></li>
            <li>ENERGÍA (Renovables / Nuclear / Hidrógeno)</li>
            <li>QUÍMICA</li>
            <li>MINERÍA</li>
          </ul>
        </motion.div>
      </div>
      <section className="h-[756px] md:h-[655px] lg:h-screen overflow-hidden w-full relative">
        <img src="/img/quienes-somos/s-grey.png" alt="bg" className="md:hidden absolute top-[19px] right-0 h-[423px] w-auto" />
        <SectionLabel className="absolute lg:top-[55px] left-[20px] lg:left-[35px] " text="Quiénes somos" />

        <div className="flex h-full">
          {/* Contenedor del texto a la izquierda */}
          {/* <div className="flex-1 flex items-center justify-start lg:pl-[146px] xxl:pl-[185px] pr-4 z-10">
          <div className="lg:w-[677px] xxl:w-[878px]">
            <LetterReveal 
              text="Spark es una organización liderada y conformada por profesionales de amplia experiencia y compromiso, que desempeña roles clave en Proyectos destacados a nivel global."
              className="font-muli lg:text-[40px] xxl:text-[48px] font-semibold lg:leading-[52px] xxl:leading-[60px] tracking-[-2.4px] text-transparent bg-clip-text bg-gradient-to-br from-p-blue-500 to-p-orange-500"
            />
          </div>
        </div> */}
          <div className="md:flex-1 md:flex items-center justify-start md:pl-[122px] lg:pl-[146px] xxl:pl-[185px] md:pr-4 z-10">
            <div className="px-[20px] mt-[80px] z-30 md:px-0 md:mt-0 md:w-[434px] lg:w-[677px] xxl:w-[878px] ">
              <motion.p 
               initial="initial"
               whileInView="inView"
               variants={{
                 initial: {
                   y: 30,
                   opacity: 0,
                 },
                 inView: {
                   y: 0,
                   opacity: 1,
                 },
               }}
               viewport={{ margin: "-50px", once: true }}
               transition={{
                 duration: 0.8,
                 ease: "easeInOut",
                 delay:  0.025,
               }}
              className="font-muli text-[28px] font-semibold leading-[36px] tracking-[-1.4px] md:text-[32px] md:leading-[38px] md:tracking-[-1.6px] lg:text-[40px] xxl:text-[48px] lg:leading-[52px] xxl:leading-[60px] text-transparent bg-clip-text bg-gradient-to-br from-p-blue-500 via-p-orange-500 to-p-blue-500 bg-[length:200%_200%] animate-gradient-diagonal">
              Spark es una organización liderada y conformada por profesionales
              de amplia experiencia y compromiso, que desempeña roles clave en
              Proyectos destacados a nivel global.
              </motion.p>
              {/* <LetterRevealTest
                text="Spark es una organización liderada y conformada por profesionales de amplia experiencia y compromiso, que desempeña roles clave en Proyectos destacados a nivel global."
                className="font-muli md:text-[32px] md:leading-[38px] md:tracking-[-1.6px] lg:text-[40px] xxl:text-[48px] font-semibold lg:leading-[52px] xxl:leading-[60px] tracking-[-2.4px] text-p-blue-500"
              /> */}
            </div>
          </div>

          {/* con gradiente */}
          {/* <div className="md:hidden  px-[20px] mt-[80px] z-30">
            <p className="font-muli text-[28px] font-semibold leading-[36px] tracking-[-1.4px] text-transparent bg-clip-text bg-gradient-to-br from-p-blue-500 to-p-orange-500">
              Spark es una organización liderada y conformada por profesionales
              de amplia experiencia y compromiso, que desempeña roles clave en
              Proyectos destacados a nivel global.
            </p>
          </div> */}

          {/* Contenedor del video a la derecha */}
          <div className="hidden md:block relative bg-secondary-000 h-full flex-shrink-0">
            <div className="absolute md:right-[-200px] md:top-[50px] lg:right-[0px] lg:top-auto lg:bottom-[0px] xxl:bottom-[0px] md:w-[472px] md:h-[605px] lg:w-[460px] lg:h-[698px] xxl:w-[577px] xxl:h-[876px] mask-[url(/img/quienes-somos/s.svg)] mask-center mask-no-repeat mask-size-contain">
              <video
                autoPlay
                muted
                loop
                className="h-full w-full object-cover object-center"
              >
                <source src="/video/quienes-somos.mp4" type="video/mp4" />
              </video>
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(18, 16, 51, 0.00) -11.95%, rgba(51, 18, 35, 0.35) 52.99%), linear-gradient(45deg, rgba(59, 7, 100, 0.15) 0%, rgba(18, 16, 51, 0.20) 100%)',
                  backgroundBlendMode: 'soft-light, overlay'
                }}
              ></div>
            </div>
            <motion.div
              className="hidden md:block absolute md:bottom-[95px] md:right-[170px] lg:bottom-[110px] xxl:bottom-[150px] lg:right-[381px] xxl:right-[483px] z-30"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <motion.div
                animate={{ translateY: ["0px", "10px", "10px", "0px", "0px"] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                className="h-[102px] w-[32px] bg-p-orange-500 flex items-center justify-center rounded-[20px] "
              >
                <ArrowDown />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
