import { LetterRevealTest } from "../ui/LetterRevealTest";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";
import SectionLabel from "../ui/SectionLabel";
import { useFeatureStore } from "../quienes-somos/store";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Chevron from "../../svg/Chevron";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    "/img/que-hacemos/01.jpg",
    "/img/que-hacemos/01.jpg",
    "/img/que-hacemos/01.jpg",
    "/img/que-hacemos/01.jpg",
    "/img/que-hacemos/01.jpg",
    "/img/que-hacemos/01.jpg",
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
        { icon: "/img/que-hacemos/ingenieria.svg", content: "Ingeniería" },
        {
          icon: "/img/que-hacemos/plantas-modulares.svg",
          content: "Plantas Modulares",
        },
        {
          icon: "/img/que-hacemos/gestion-proyectos.svg",
          content: "Gestión de Proyectos",
        },
        {
          icon: "/img/que-hacemos/operacion-mantenimiento.svg",
          content: "Operación y Mantenimiento",
        },
        {
          icon: "/img/que-hacemos/servicios-gas-petroleo.svg",
          content: "Servicios de Procesamiento de Gas y Petróleo",
        },
      ],
    },
    {
      id: 1,
      type: "card",
      icon: "/img/que-hacemos/ingenieria.svg",
      title: "Ingeniería",
      text: "Desarrollamos Ingeniería en todas sus fases. Ingeniería Conceptual, Básica, y de Detalle. Incluyendo Estudios Especiales, Estimación de Costos, y Evaluación de Proyectos.",
    },
    {
      id: 2,
      type: "card",
      icon: "/img/que-hacemos/plantas-modulares.svg",
      title: "Plantas Modulares",
      text: "Fabricamos Plantas de Procesos y Equipos Modulares para la Industria.",
    },
    {
      id: 3,
      type: "card",
      icon: "/img/que-hacemos/gestion-proyectos.svg",
      title: "Gestión de Proyectos",
      text: "Realizamos la Gestión Integral de Proyectos. Ingeniería de Propiedad, gestión de suministros, gestión de calidad, oficina técnica y supervisión.",
    },
    {
      id: 4,
      type: "card",
      icon: "/img/que-hacemos/operacion-mantenimiento.svg",
      title: "Operación y Mantenimiento",
      text: "Realizamos Precomisionado, Comisionado, y Puesta en Marcha. Operación de Plantas de Proceso. Soporte Técnico a Operaciones.",
    },
    {
      id: 5,
      type: "card",
      icon: "/img/que-hacemos/servicios-gas-petroleo.svg",
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
    <section
      id="que-hacemos"
      ref={sectionRef}
      className="block h-auto lg:h-[600vh] w-full relative md:overflow-hidden lg:overflow-visible"
    >
      <div className="sticky top-0 h-auto lg:h-screen w-full flex">
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
            delay: 1,
          }}
          className="hidden absolute bg-[#F7F7F7] p-[8px] rounded-[6px] w-fit lg:flex flex-col gap-[8px] top-[50%] translate-y-[-50%] right-[32px]"
        >
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
          src="/img/que-hacemos/misc800.svg"
          alt="bg"
          className="absolute top-0 left-0 w-full lg:hidden tabletMisc"
        />
        <img
          src="/img/que-hacemos/misc.svg"
          alt="bg"
          className="absolute top-0 right-0 w-full hidden lg:block xxl:hidden"
        />
        <img
          src="/img/que-hacemos/misc2.svg"
          alt="bg"
          className="absolute top-0  left-0 w-[90%] hidden xxl:block"
        />
        <div className="lg:flex w-full px-[20px] lg:px-0">
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
            className="flex-1 flex flex-col lg:items-center  lg:relative"
          >
            {/* Iconos horizontales para el primer estado */}
            <div className="lg:flex-1/2 lg:order-2">
              <AnimatePresence mode="sync">
                {currentImageIndex === 0 && (
                  <motion.div
                    key="icons-horizontal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:flex  lg:justify-self-start flex-wrap gap-[12px] w-[400px] lg:h-[275px] justify-center items-end z-10"
                  >
                    {contentStates[0]?.elements.map((element, index) => (
                      <motion.div
                        key={`icon-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-[67px] h-[67px] bg-secondary-200 rounded-[80px] flex items-center justify-center"
                        title={element.content}
                      >
                        <img
                          className="w-[47px] h-[47px]"
                          src={element.icon}
                          alt={element.content}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative w-[186px] h-[128px] md:w-[446px] md:h-[336px] xxl:w-[554px] xxl:h-[400px] lg:flex-1/2">
              <div className="ml-[8px] w-[186px] h-[128px] md:w-[446px] md:h-[336px] xxl:w-[554px] xxl:h-[400px] rounded-t-[40px] rounded-b-[180px] overflow-hidden relative">
                <img
                  src="/img/que-hacemos/01.jpg"
                  alt="bg"
                  className="absolute inset-0 object-cover h-full w-full"
                />
              </div>
              {/* <div className="z-30 absolute top-[261px] xxl:top-[345px] left-[50%] translate-x-[-50%] w-[249px] h-[93px] bg-[#6a6a6a]/20 backdrop-blur-sm rounded-[24px] glassBorder flex flex-wrap gap-[8px] justify-center items-center py-[10px]">
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
              </div> */}
              <div
                className="z-30 w-[65px] h-[25px] top-[120px] left-[53%] md:w-[130px] md:h-[40px] xxl:w-[150px] xxl:h-[45px] 
              absolute md:top-[320px] xxl:top-[380px] md:left-[50%] translate-x-[-50%]  bg-secondary-000 border-[1px] border-secondary-500 rounded-[24px] 
               flex flex-wrap gap-[8px] justify-center items-center "
              >
                <div className=" w-fit text-p-orange-500 text-[14px] md:text-[22px] xxl:text-[26px]  font-normal md:tracking-[1px]">
                  <span>[EPCm]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[10px] left-[10px] md:w-[130px] md:h-[40px] xxl:w-[150px] 
              xxl:h-[45px] absolute md:left-0 md:top-[130px] xxl:top-[160px] translate-x-[-50%]  bg-secondary-000 
              border-[1px] border-secondary-500 rounded-[24px] flex flex-wrap gap-[8px] justify-center items-center "
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px] font-normal md:tracking-[1px]">
                  <span>[E]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[10px] right-[-10px] md:w-[130px] md:h-[40px] xxl:w-[150px] 
              xxl:h-[45px] absolute md:top-[130px] xxl:top-[160px] md:right-0 translate-x-[50%]  bg-secondary-000 
              border-[1px] border-secondary-500 rounded-[24px]  flex flex-wrap gap-[8px] justify-center items-center "
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px]  font-normal md:tracking-[1px]">
                  <span>[BOOT]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[50px] left-[20px] md:w-[130px] md:h-[40px] xxl:w-[150px]
               xxl:h-[45px] absolute md:top-[210px] xxl:top-[240px] md:left-[4%]  translate-x-[-50%] 
                bg-secondary-000 border-[1px] border-secondary-500 rounded-[24px] flex flex-wrap gap-[8px] 
                justify-center items-center "
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px] font-normal md:tracking-[1px]">
                  <span>[EP]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[50px] right-[0px] md:w-[130px] md:h-[40px] xxl:w-[150px] 
              xxl:h-[45px] absolute md:top-[210px] xxl:top-[240px] md:right-[4%]  translate-x-[50%] 
               bg-secondary-000 border-[1px] border-secondary-500 rounded-[24px]  flex flex-wrap gap-[8px] justify-center
                items-center"
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px] font-normal md:tracking-[1px]">
                  <span>[BOT]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[90px] left-[40px] md:w-[130px] md:h-[40px] xxl:w-[150px] 
              xxl:h-[45px] absolute md:top-[280px] xxl:top-[320px] md:left-[14%]  translate-x-[-50%] 
               bg-secondary-000 border-[1px] border-secondary-500 rounded-[24px] flex flex-wrap gap-[8px] 
               justify-center items-center "
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px] font-normal md:tracking-[1px]">
                  <span>[EPC]</span>
                </div>
              </div>
              <div
                className="z-30 w-[65px] h-[25px] top-[90px] right-[20px] md:w-[130px] md:h-[40px] xxl:w-[150px] 
              xxl:h-[45px] absolute md:top-[280px] xxl:top-[320px] md:right-[14%]  translate-x-[50%] 
               bg-secondary-000 rounded-[24px] border-[1px] border-secondary-500 flex flex-wrap gap-[8px] 
               justify-center items-center"
              >
                <div className=" w-fit  text-p-orange-500 text-[14px] md:text-[22px] font-normal md:tracking-[1px]">
                  <span>[O&M]</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:flex flex-col flex-1 justify-center h-full items-center">
            <div className="flex flex-col gap-[100px] h-[550px] w-[491px]  lg:gap-0 lg:justify-between">
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
                  delay: 0.9,
                }}
                className="relative min-h-[400px] lg:min-h-[200px]"
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 space-y-6 lg:flex lg:flex-col lg:justify-end"
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
                                <div className="w-[12px] h-[12px] bg-p-orange-500 rounded-[3px]"></div>
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
                        <div className="flex flex-col items-start lg:h-[150px]">
                          <motion.div
                            className="lg:absolute lg:left-[-196px] w-[97px] h-[97px] lg:w-[140px] lg:h-[140px] bg-bg-02 rounded-[80px] flex items-center justify-center mb-[31px] lg:mb-0"
                            variants={elementVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                          >
                            <img
                              className="w-[67px] h-[67px] lg:w-[100px] lg:h-[100px]"
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
          <div className="lg:hidden mt-[83px] py-[60px] md:flex overflow-hidden md:justify-between md:pt-[60px] md:pb-[120px]">
            <div className="flex flex-col gap-[28px] relative md:w-full md:basis-1/2">
              <SectionLabel text="Qué hacemos" />
              <p className="text-[20px] font-muli font-normal leading-[24px] tracking-[-0.8px] text-p-blue-500 w-full md:w-[285px]">
                Participamos en todas las etapas del ciclo de vida de los
                Proyectos.
              </p>
            </div>
            <div className="relative md:w-[385px] md:basis-1/2">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                  renderBullet: function (index, className) {
                    return '<div class="' + className + '"></div>';
                  },
                }}
                navigation={{
                  nextEl: ".arrow-right-que-hacemos",
                  prevEl: ".arrow-left-que-hacemos",
                }}
                className="mySwiper mt-[54px] md:mt-0"
              >
                {contentStates.map((item, index) => (
                  <SwiperSlide key={index}>
                    {item.type === "list" ? (
                      <div className="space-y-[24px]">
                        {item.elements.map((element, index) => (
                          <div
                            key={`${index}-${index}`}
                            className="flex items-center gap-3"
                          >
                            <div className="w-[12px] h-[12px] flex items-center justify-center bg-p-orange-500 rounded-[3px]">
                            </div>
                            <span className="font-muli text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-p-blue-500">
                              {element.content}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-start">
                        <div className="w-[67px] h-[67px] bg-secondary-200 rounded-[80px] flex items-center justify-center mb-[31px]">
                          <img
                            className="w-[47px] h-[47px]"
                            src={item.icon}
                            alt={item.title}
                          />
                        </div>
                        <h2 className="text-[24px] font-muli font-semibold leading-[38px] text-p-blue-500 w-full text-left mb-[24px]">
                          {item.title}
                        </h2>
                        <p className="text-[16px] font-inter font-normal leading-[24px] tracking-[-0.64px] text-p-blue-500 w-full text-left">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation and Pagination */}
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 md:absolute md:bottom-0 md:left-0 md:right-0 md:w-full">
              <button className="arrow-left-que-hacemos arrow-mobile">
                <Chevron stroke="#fff" className="rotate-180" />
              </button>

              <div className="custom-pagination bg-[#F7F7F7] p-[8px] rounded-[6px] flex gap-[8px] w-fit"></div>

              <button className="arrow-right-que-hacemos arrow-mobile">
                <Chevron stroke="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
