import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Logo from "../../svg/logo";
import ArrowButton from "../ui/ArrowButton";
import RevealByLine from "../ui/RevealByLine";
import FadeInAnimation from "../ui/FadeInAnimation";
// import RevealByLine from "../ui/RevealByLine";

const Hero = () => {
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    // Secuencia de animaciones
    const timer1 = setTimeout(() => {
      setAnimationState("slideUp"); // Se desliza desde abajo al centro
    }, 200);

    const timer2 = setTimeout(() => {
      setAnimationState("masked"); // Se queda con la máscara
    }, 1000);

    const timer3 = setTimeout(() => {
      setAnimationState("expand"); // Se expande completamente
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Definir las animaciones según el estado
  const getAnimationProps = () => {
    switch (animationState) {
      case "slideUp":
        return {
          clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)", // Mantiene el rectángulo pequeño
          y: 0, // Se desliza al centro
        };
      case "masked":
        return {
          clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)", // Se queda con el rectángulo pequeño
          y: 0,
        };
      case "expand":
        return {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Se expande completamente
          y: 0,
        };
      default:
        return {
          clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)", // Estado inicial con rectángulo pequeño
          y: 400,
        };
    }
  };

  return (
    <>
      <motion.div
        className="top-0 p-[16px] h-screen overflow-hidden"
        //   style={{
        //     scale,
        //     y,
        //   }}
        initial={{
          clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)", // Rectángulo pequeño en el centro
          y: 400, // Desde abajo
        }}
        animate={getAnimationProps()}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="h-full rounded-[24px] overflow-hidden relative">
          <motion.video
            className="z-10 w-auto min-w-full min-h-full max-w-full overflow-hidden object-cover rounded-[24px]"
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            height="auto"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>

          {/* Gradiente overlay */}
          <div
            className="absolute inset-0 z-20 rounded-[48px]"
            style={{
              background: `linear-gradient(180deg, rgba(18, 16, 51, 0.00) -11.95%, rgba(51, 18, 35, 0.45) 52.99%)`,
              backgroundBlendMode: "soft-light",
            }}
          />
          <FadeInAnimation>
          <Logo
            color="var(--color-secondary-000)"
            className="absolute top-[20px] left-[16px] lg:top-[32px] lg:left-[28px] z-30 w-[97px] lg:w-[137px]"
          />
          </FadeInAnimation>
          <div className="absolute px-[12px] py-[40px] lg:px-[20px] top-0 left-0 w-full h-full flex flex-col justify-end gap-[32px] md:justify-center lg:gap-auto lg:flex-row lg:items-center lg:justify-between z-30">
            <h2 className="font-muli text-[34px] md:text-[60px] lg:text-[86px] font-semibold leading-[40px] md:leading-[68px] lg:leading-[101px] tracking-[-1.7px] md:tracking-[-3px] lg:tracking-[-4.3px] text-secondary-000 w-full lg:w-[920px]">
              <RevealByLine
                text="Soluciones de Ingeniería"
                className="text-secondary-000"
                delay={1.5}
              />{" "}
              <RevealByLine
                text="y&nbsp;Proyectos para"
                delay={1.6}
                className="text-secondary-000"
              />{" "}
              <RevealByLine
                text="la Industria"
                delay={1.7}
                className="text-secondary-000"
              />
            </h2>
            <div className="flex flex-col gap-[32px] lg:gap-[24px] items-start">
              <p className="font-inter text-[14px] font-normal leading-[24px] tracking-[-0.56px] text-secondary-000 w-full md:w-[488px] lg:w-[330px] xxl:mr-[115px]">
                <RevealByLine
                  text="Pensamos, Diseñamos, Construimos, y Operamos"
                  delay={1.8}
                  className="text-secondary-000"
                />
                <RevealByLine
                  text="instalaciones industriales alineadas con criterios de"
                  delay={1.9}
                  className="text-secondary-000"
                />
                <RevealByLine
                  text="eficiencia y optimizadas conforme a las necesidades"
                  delay={2}
                  className="text-secondary-000"
                />
                <RevealByLine
                  text="de cada contexto."
                  delay={2.1}
                  className="text-secondary-000"
                />
                {/* Pensamos, Diseñamos, Construimos, y Operamos instalaciones
                industriales alineadas con criterios de eficiencia y optimizadas
                conforme a las necesidades de cada contexto. */}
              </p>
              <ArrowButton text="Nuestras soluciones" />
            </div>
          </div>
          <FadeInAnimation delay={2.2}>
          <div className="hidden md:block md:absolute bottom-[32px] left-[28px] z-30">
            <ul className="text-secondary-000 font-inter text-[14px] font-normal leading-[24px] tracking-[-0.56px] list-disc list-inside">
              <li>PETRÓLEO Y GAS (Uptream / Midstream / Downstream)</li>
              <li>ENERGÍA (Renovables / Nuclear / Hidrógeno)</li>
              <li>QUÍMICA</li>
              <li>MINERÍA</li>
            </ul>
          </div>
          </FadeInAnimation>
          <img
            src="/img/hero/misc.png"
            alt=""
            className="hidden md:block md:absolute bottom-0 left-0 z-30 w-[465.5px] h-[166px]"
          />
          <img
            src="/img/hero/misc2.png"
            alt=""
            className="hidden lg:block lg:absolute top-0 right-[50px] z-30 w-[498px] h-[183px] xxl:right-[175px]"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
