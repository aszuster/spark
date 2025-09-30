import { LetterRevealTest } from "../ui/LetterRevealTest";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";
import SectionLabel from "../ui/SectionLabel";
import { useFeatureStore } from "../quienes-somos/store";
import { useEffect, useRef } from "react";

const QueHacemos = () => {
  const {
    currentImageIndex,
    setCurrentImageIndex,
    currentTextIndex,
    setCurrentTextIndex,
  } = useFeatureStore();
  const sectionRef = useRef(null);

  // Array de imágenes (6 imágenes como mencionaste)
  const images = [
    "/img/que-hacemos/01.webp",
    "/img/que-hacemos/02.webp",
    "/img/que-hacemos/03.webp",
    "/img/que-hacemos/04.webp",
    "/img/que-hacemos/05.webp",
    "/img/que-hacemos/06.webp",
  ];

  // Array de textos que cambiarán con el scroll
  const texts = [
    "Participamos en todas las etapas del ciclo de vida de los Proyectos.",
    "Diseñamos soluciones innovadoras para la industria energética.",
    "Implementamos tecnologías de vanguardia en cada proyecto.",
    "Garantizamos la excelencia operativa en cada etapa.",
    "Optimizamos procesos para máxima eficiencia energética.",
    "Entregamos resultados que superan las expectativas del cliente.",
  ];

  // Variantes de animación para las imágenes
  const imageVariants = {
    enter: {
      opacity: 0,
      // scale: 1.02,
      // y: 10,
      zIndex: 2,
    },
    center: {
      opacity: 1,
      // scale: 1,
      // y: 0,
      zIndex: 1,
    },
    exit: {
      opacity: 0,
      // scale: 0.98,
      // y: -10,
      zIndex: 0,
    },
  };

  // Variantes de animación para los textos
  const textVariants = {
    enter: {
      opacity: 0,
      // y: 10,
      // rotateX: 15,
      // filter: "blur(2px)",
    },
    center: {
      opacity: 1,
      // y: 0,
      // rotateX: 0,
      // filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      // y: -10,
      // rotateX: -15,
      // filter: "blur(2px)",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      // Calcular el índice basado en el progreso del scroll
      const imageIndex = Math.floor(scrollProgress * images.length);
      const textIndex = Math.floor(scrollProgress * texts.length);

      const clampedImageIndex = Math.min(imageIndex, images.length - 1);
      const clampedTextIndex = Math.min(textIndex, texts.length - 1);

      setCurrentImageIndex(clampedImageIndex);
      setCurrentTextIndex(clampedTextIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setCurrentImageIndex, setCurrentTextIndex, images.length, texts.length]);

  return (
    <section ref={sectionRef} className="min-h-[600vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex">
        <div className="flex w-full">
          <div className="flex-1">
          <div className="relative w-[446px] h-[336px]">
            <div className="w-[446px] h-[336px] rounded-t-[40px] rounded-b-[180px] overflow-hidden relative">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="bg"
                  className="absolute inset-0 object-cover h-full w-full"
                  style={{ willChange: "transform, opacity" }}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.5 },
                    y: { duration: 0.4 },
                  }}
                />
              </AnimatePresence>
            </div>
            <div className="z-30 absolute top-[261px] left-[50%] translate-x-[-50%] w-[249px] h-[93px] bg-[#6a6a6a]/20 backdrop-blur-sm rounded-[24px] glassBorder flex flex-wrap gap-[8px] justify-center items-center py-[10px]">
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[E]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[EP]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[EPC]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[EPCm]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[O&M]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[BOT]</span>
              </div>
              <div className="py-[4px] px-[8px] w-fit border-[1px] border-secondary-000 rounded-[8px] text-secondary-000 text-[14px] font-normal tracking-[-0.56px]">
                <span>[BOOT]</span>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col flex-1 justify-center h-[550px] w-[465px]">
            <div className="flex flex-col gap-[28px]">
              <SectionLabel text="Qué hacemos" />
              <div className="relative h-[80px]">
                <p className="text-[32px] font-normal leading-[40px] tracking-[-1.28px] text-p-blue-500 w-[420px] absolute">
                Participamos en todas las etapas del ciclo de vida de los Proyectos.

                </p>
              </div>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  className="text-[16px] font-normal leading-[20px] tracking-[-1.28px] text-p-blue-500 w-[420px] absolute"
                  style={{ willChange: "transform, opacity, filter" }}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.6 },
                    y: { duration: 0.4 },
                    // rotateX: { duration: 0.8 },
                    filter: { duration: 0.2 },
                  }}
                >
                  {texts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
