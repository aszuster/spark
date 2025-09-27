import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Logo from "../../svg/logo";
import ArrowButton from "../ui/ArrowButton";

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
        className="sticky top-0 p-[16px] h-screen overflow-hidden"
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
          <Logo
            color="var(--color-secondary-000)"
            className="absolute top-[32px] left-[28px] z-30"
          />
          <div className="absolute px-[20px] top-0 left-0 w-full h-full flex items-center justify-between z-30">
            <h2 className="font-muli text-[86px] font-semibold leading-[84px] tracking-[-4.3px] text-secondary-000 w-[920px]">
              Soluciones de Ingeniería y Proyectos para la Industria
            </h2>
            <div className="flex flex-col gap-[24px] items-start">
              <p className="font-inter text-[14px] font-normal leading-[24px] tracking-[-0.56px] text-secondary-000 w-[330px]">
                Pensamos, Diseñamos, Construimos, y Operamos instalaciones
                industriales alineadas con criterios de eficiencia y optimizadas
                conforme a las necesidades de cada contexto.
              </p>
              <ArrowButton text="Nuestras soluciones" />
            </div>
          </div>
          <div className="absolute bottom-[32px] left-[28px] z-30">
            <ul className="text-secondary-000 font-inter text-[14px] font-normal leading-[24px] tracking-[-0.56px] list-disc list-inside">
              <li>PETRÓLEO Y GAS (Uptream / Midstream / Downstream)</li>
              <li>ENERGÍA (Renovables / Nuclear / Hidrógeno)</li>
              <li>QUÍMICA</li>
              <li>MINERÍA</li>
            </ul>
          </div>
          <img src="/img/hero/misc.png" alt="" className="absolute bottom-0 left-0 z-30 w-[465.5px] h-[166px]" />
          <img src="/img/hero/misc2.png" alt="" className="absolute top-0 right-[50px] z-30 w-[498px] h-[183px]" />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
