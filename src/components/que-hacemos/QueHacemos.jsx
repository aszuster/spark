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
    currentContentIndex,
    setCurrentContentIndex,
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

  // Array de estados de contenido con elementos complejos
  const contentStates = [
    {
      id: 0,
      type: "list",
      title:
        "Participamos en todas las etapas del ciclo de vida de los Proyectos.",
      elements: [
        { icon: "/img/que-hacemos/icon.svg", content: "Ingeniería" },
        { icon: "/img/que-hacemos/icon.svg", content: "Plantas Modulares" },
        { icon: "/img/que-hacemos/icon.svg", content: "Gestión de Proyectos" },
        {
          icon: "/img/que-hacemos/icon.svg",
          content: "Operación y Mantenimiento",
        },
        {
          icon: "/img/que-hacemos/icon.svg",
          content: "Servicios de Procesamiento de Gas y Petróleo",
        },
      ],
    },
    {
      id: 1,
      type: "card",
      icon: "/img/que-hacemos/icon.svg",
      title: "Ingeniería",
      text: "Desarrollamos Ingeniería en todas sus fases. Ingeniería Conceptual, Básica, y de Detalle. Incluyendo Estudios Especiales, Estimación de Costos, y Evaluación de Proyectos.",
    },
    {
      id: 2,
      type: "card",
      icon: "/img/que-hacemos/icon.svg",
      title: "Plantas Modulares",
      text: "Fabricamos Plantas de Procesos y Equipos Modulares para la Industria.",
    },
    {
      id: 3,
      type: "card",
      icon: "/img/que-hacemos/icon.svg",
      title: "Gestión de Proyectos",
      text: "Realizamos la Gestión Integral de Proyectos. Ingeniería de Propiedad, gestión de suministros, gestión de calidad, oficina técnica y supervisión.",
    },
    {
      id: 4,
      type: "card",
      icon: "/img/que-hacemos/icon.svg",
      title: "Operación y Mantenimiento",
      text: "Realizamos Precomisionado, Comisionado, y Puesta en Marcha. Operación de Plantas de Proceso. Soporte Técnico a Operaciones.",
    },
    {
      id: 5,
      type: "card",
      icon: "/img/que-hacemos/icon.svg",
      title: "Servicios de Procesamiento de Gas y Petróleo",
      text: "Realizamos Servicios de Procesamientos de Gas y Petróleo para el Upstream y el Midstream con equipos propios.",
    },
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
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  // Variantes de animación para contenido complejo
  const contentVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  // Variantes de animación para elementos individuales
  const elementVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      // Calcular el índice basado en el progreso del scroll
      // Ajustar el progreso para que el último estado se mantenga más tiempo
      const adjustedProgress = scrollProgress < 0.8 ? scrollProgress / 0.8 : 1;

      const imageIndex = Math.floor(adjustedProgress * images.length);
      const textIndex = Math.floor(adjustedProgress * texts.length);
      const contentIndex = Math.floor(adjustedProgress * contentStates.length);

      const clampedImageIndex = Math.min(imageIndex, images.length - 1);
      const clampedTextIndex = Math.min(textIndex, texts.length - 1);
      const clampedContentIndex = Math.min(
        contentIndex,
        contentStates.length - 1
      );

      setCurrentImageIndex(clampedImageIndex);
      setCurrentTextIndex(clampedTextIndex);
      setCurrentContentIndex(clampedContentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    setCurrentImageIndex,
    setCurrentTextIndex,
    setCurrentContentIndex,
    images.length,
    texts.length,
    contentStates.length,
  ]);

  return (
    <section ref={sectionRef} className="hidden lg:block min-h-[600vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex">
        <motion.div 
                  initial="initial"
                  whileInView="inView"
                  variants={{
                    initial: {
                      y: 20,
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
                    delay:  1,
                  }}
        className="absolute bg-[#F7F7F7] p-[8px] rounded-[6px] w-fit flex flex-col gap-[8px] top-[50%] translate-y-[-50%] right-[32px]">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className={`h-[8px] w-[8px] rounded-[2px] transition-colors duration-300 ${
                currentImageIndex === index
                  ? "bg-p-orange-600"
                  : "bg-secondary-400"
              }`}
            />
          ))}
        </motion.div>
        <img
          src="/img/que-hacemos/misc.svg"
          alt="bg"
          className="absolute top-0 left-0 w-[90%] xxl:hidden"
        />
        <img
          src="/img/que-hacemos/misc2.svg"
          alt="bg"
          className="absolute top-0 left-0 w-[90%] hidden xxl:block"
        />
        <div className="flex w-full">
          <motion.div
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
              delay: 0.5,
            }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="relative w-[446px] h-[336px] xxl:w-[554px] xxl:h-[400px]">
              <div className="w-[446px] h-[336px] xxl:w-[554px] xxl:h-[400px] rounded-t-[40px] rounded-b-[180px] overflow-hidden relative">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    s
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
              <div className="z-30 absolute top-[261px] xxl:top-[345px] left-[50%] translate-x-[-50%] w-[249px] h-[93px] bg-[#6a6a6a]/20 backdrop-blur-sm rounded-[24px] glassBorder flex flex-wrap gap-[8px] justify-center items-center py-[10px]">
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
          </motion.div>
          <div className="flex flex-col flex-1 justify-center h-full items-center">
            <div className="flex flex-col gap-[100px] h-[550px] w-[491px]">
              <div className="flex flex-col gap-[28px] relative">
                <motion.div
                  initial="initial"
                  whileInView="inView"
                  variants={{
                    initial: {
                      y: 10,
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
                    delay: 0.7,
                  }}
                >
                  <SectionLabel text="Qué hacemos" />
                </motion.div>
                <motion.p
                  initial="initial"
                  whileInView="inView"
                  variants={{
                    initial: {
                      y: 20,
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
                    delay: 0.8,
                  }}
                  className="text-[32px] font-normal leading-[40px] tracking-[-1.28px] text-p-blue-500 w-[373px]"
                >
                  Participamos en todas las etapas del ciclo de vida de los
                  Proyectos.
                </motion.p>
              </div>
              <motion.div 
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
                          delay:  0.9,
                        }}
              className="relative min-h-[400px]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 space-y-6"
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.4 },
                    }}
                  >
                    {/* Renderizar según el tipo de card */}
                    {contentStates[currentImageIndex]?.type === "list" ? (
                      // Card tipo lista (primera card)
                      <>
                        <div className="space-y-4">
                          {contentStates[currentImageIndex]?.elements.map(
                            (element, index) => (
                              <motion.div
                                key={`${currentImageIndex}-${index}`}
                                className="flex items-center gap-3"
                                variants={elementVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                  duration: 0.4,
                                  // delay: index * 0.1,
                                }}
                              >
                                <div className="w-[32px] h-[32px] p-[2.5px] flex items-center justify-center bg-secondary-200 rounded-[8px]">
                                  <img
                                    className="w-[21px] h-[21px]"
                                    src={element.icon}
                                    alt={element.content}
                                  />
                                </div>
                                <span className="text-[24px] font-normal leading-[38px] tracking-[-1.2px] text-p-blue-500">
                                  {element.content}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </>
                    ) : (
                      // Cards tipo ícono grande + título + texto (cards 2-6)
                      <>
                        <div className="flex flex-col items-start">
                          <motion.div
                            className="w-[97px] h-[97px] bg-secondary-200 rounded-[13px] flex items-center justify-center mb-[31px]"
                            variants={elementVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                          >
                            <img
                              className="w-[67px] h-[67px]"
                              src={contentStates[currentImageIndex]?.icon}
                              alt={contentStates[currentImageIndex]?.title}
                            />
                          </motion.div>
                          <motion.h2
                            className="text-[40px] font-normal leading-[48px] tracking-[-2px] text-p-blue-500 w-[446px] text-left mb-[24px]"
                            variants={elementVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                          >
                            {contentStates[currentImageIndex]?.title}
                          </motion.h2>
                          <motion.p
                            className="text-[16px] font-inter font-normal leading-[24px] tracking-[-0.64px] text-p-blue-500 w-[446px] text-left"
                            variants={elementVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                          >
                            {contentStates[currentImageIndex]?.text}
                          </motion.p>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
