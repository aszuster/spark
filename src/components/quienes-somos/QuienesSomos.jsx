import { LetterReveal } from "../ui/LetterReveal";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";

const QuienesSomos = () => {
  return (
    <section className="h-screen md:h-[900px] lg:h-screen overflow-hidden w-full relative">
      <SectionLabel text="Quiénes somos" />
      <motion.div
        className="hidden md:block absolute md:bottom-[400px] md:right-[18%] lg:bottom-[110px] xxl:bottom-[150px] lg:right-[27%] xxl:right-[23%] z-30"
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
        <div className="hidden flex-1 md:flex items-center justify-start md:pl-[122px] lg:pl-[146px] xxl:pl-[185px] pr-4 z-10">
          <div className="md:w-[434px] lg:w-[677px] xxl:w-[878px]">
            <LetterReveal
              text="Spark es una organización liderada y conformada por profesionales de amplia experiencia y compromiso, que desempeña roles clave en Proyectos destacados a nivel global."
              className="font-muli md:text-[32px] md:leading-[38px] md:tracking-[-1.6px] lg:text-[40px] xxl:text-[48px] font-semibold lg:leading-[52px] xxl:leading-[60px] tracking-[-2.4px] text-p-blue-500"
            />
          </div>
        </div>

        {/* con gradiente */}
        <div className="md:hidden flex items-center justify-center px-[20px]">
          <p className="font-muli text-[28px] font-semibold leading-[36px] tracking-[-1.4px] text-transparent bg-clip-text bg-gradient-to-br from-p-blue-500 to-p-orange-500">
            Spark es una organización liderada y conformada por profesionales de
            amplia experiencia y compromiso, que desempeña roles clave en
            Proyectos destacados a nivel global.
          </p>
        </div>

        {/* Contenedor del video a la derecha */}
        <div className="hidden md:block relative bg-secondary-000 h-full flex-shrink-0">
          <div className="absolute md:right-[-150px] md:top-[-150px] lg:right-[-10px] lg:top-auto lg:bottom-[-50px] xxl:bottom-[-35px] h-full w-auto md:aspect-[2/5] lg:aspect-[2.8/5] mask-[url(/img/quienes-somos/s.svg)] mask-center mask-no-repeat mask-size-contain">
            <video
              autoPlay
              muted
              loop
              className="h-full w-full object-cover object-center"
            >
              <source src="/video/quienes-somos.mp4" type="video/mp4" />
            </video>
            {/* <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                          background: 'linear-gradient(180deg, rgba(9, 8, 26, 0.00) -11.95%, rgba(9, 8, 26, 0.50) 52.99%), rgba(237, 238, 240, 0.80)',
                          backgroundBlendMode: 'normal, soft-light, hue, plus-darker'
                      }}
                  ></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
