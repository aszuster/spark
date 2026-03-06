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

  // Íconos en círculos (siempre visibles en ambos steps)
  const circleIcons = [
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
  ];

  // Array de imágenes (2 steps)
  const images = ["/img/que-hacemos/01.jpg", "/img/que-hacemos/bg-2.png"];

  // Array de textos que cambiarán con el scroll
  const texts = [
    "Participamos en todas las etapas del ciclo de vida de los Proyectos.",
    "Diseñamos soluciones innovadoras para la industria energética.",
  ];

  // Array de estados de contenido con elementos complejos
  const contentStates = [
    {
      id: 0,
      type: "card",
      icon: "/img/que-hacemos/ingenieria.svg",
      title: "Título step 1",
      text: "Contenido del step 1.",
    },
    {
      id: 1,
      type: "card",
      icon: "/img/que-hacemos/ingenieria.svg",
      title: "Título step 2",
      text: "Contenido del step 2.",
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
      const adjustedProgress = scrollProgress < 0.5 ? scrollProgress / 0.5 : 1;

      const imageIndex = Math.floor(adjustedProgress * images.length);
      const textIndex = Math.floor(adjustedProgress * texts.length);
      const contentIndex = Math.floor(adjustedProgress * contentStates.length);

      const clampedImageIndex = Math.min(imageIndex, images.length - 1);
      const clampedTextIndex = Math.min(textIndex, texts.length - 1);
      const clampedContentIndex = Math.min(
        contentIndex,
        contentStates.length - 1,
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
      className="block min-h-screen md:min-h-auto lg:h-[260vh] w-full relative md:overflow-hidden lg:overflow-visible"
    >
      <div className="lg:sticky top-0 h-auto lg:h-screen w-full flex">
        {/* <img
          src="/img/que-hacemos/misc800.svg"
          alt="bg"
          className="absolute top-0 left-0 w-full lg:hidden tabletMisc"
        /> */}
        <img
          src="/img/que-hacemos/misc.svg"
          alt="bg"
          className="absolute top-0 left-0 w-[80%] hidden lg:block xxl:hidden"
        />
        <img
          src="/img/que-hacemos/misc-2.svg"
          alt="bg"
          className="absolute top-0  left-0 w-[75%]  hidden xxl:block"
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
            className="hidden flex-1 lg:flex flex-col lg:items-center lg:max-w-[45%]  lg:relative "
          >
            {/* Iconos horizontales para el primer estado */}
            <div className=" lg:flex-1/2 lg:order-2 lg:flex lg:flex-col lg:justify-center">
              <div className="max-h-[150px] flex flex-col">
                <p className="text-[20px] lg:max-w-[400px] leading-[24px]">
                  Participamos en todas las etapas del ciclo de vida de los
                  Proyectos.
                </p>
                <div className="hidden lg:flex lg:justify-self-start flex-wrap gap-[12px] w-[400px] lg:h-[275px] justify-center items-end z-10">
                  {circleIcons.map((element, index) => (
                    <div
                      key={`icon-${index}`}
                      className="w-[67px] h-[67px] bg-secondary-200 rounded-[80px] flex items-center justify-center"
                      title={element.content}
                    >
                      <img
                        className="w-[47px] h-[47px]"
                        src={element.icon}
                        alt={element.content}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-[186px] h-[128px] md:w-[446px] md:h-[336px] lg:w-[400px] lg:h-[280px] xl:w-[446px] xl:h-[336px] xxl:w-[554px] xxl:h-[400px] lg:flex-1/2">
              <div className="ml-[8px] w-[186px] h-[128px] md:w-[446px] md:h-[336px] lg:w-[400px] lg:h-[280px] xl:w-[446px] xl:h-[336px] xxl:w-[554px] xxl:h-[400px] rounded-t-[40px] rounded-b-[180px] overflow-hidden relative">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="bg"
                    className="absolute inset-0 object-cover h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                </AnimatePresence>
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
              {/* Pills — colores se invierten en step 2 */}
              <div
                className={`z-30 w-[65px] h-[25px] top-[120px] left-[53%] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px] xxl:h-[45px]
              absolute lg:top-[260px] xl:top-[320px] xxl:top-[380px] md:left-[50%] translate-x-[-50%] border-[1px] rounded-[24px]
               flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
               ${currentImageIndex === 0 ? "bg-p-orange-500 border-p-orange-500" : "bg-secondary-000 border-secondary-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] xxl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-secondary-000" : "text-p-orange-500"}`}
                >
                  <span>[EPCm]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[10px] left-[10px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
              xxl:h-[45px] absolute md:left-0 lg:top-[110px] xl:top-[130px] xxl:top-[160px] translate-x-[-50%] border-[1px] rounded-[24px]
              flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
              ${currentImageIndex === 0 ? "bg-p-orange-500 border-p-orange-500" : "bg-secondary-000 border-secondary-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-secondary-000" : "text-p-orange-500"}`}
                >
                  <span>[E]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[10px] right-[-10px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
              xxl:h-[45px] absolute lg:top-[110px] xl:top-[130px]  xxl:top-[160px] md:right-0 translate-x-[50%] border-[1px] rounded-[24px]
              flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
              ${currentImageIndex === 0 ? "bg-secondary-000 border-secondary-500" : "bg-p-orange-500 border-p-orange-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-p-orange-500" : "text-secondary-000"}`}
                >
                  <span>[BOOT]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[50px] left-[20px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
               xxl:h-[45px] absolute lg:top-[170px] xl:top-[210px] xxl:top-[240px] md:left-[4%] translate-x-[-50%] border-[1px] rounded-[24px]
               flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
               ${currentImageIndex === 0 ? "bg-p-orange-500 border-p-orange-500" : "bg-secondary-000 border-secondary-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-secondary-000" : "text-p-orange-500"}`}
                >
                  <span>[EP]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[50px] right-[0px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
              xxl:h-[45px] absolute lg:top-[170px] xl:top-[210px] xxl:top-[240px] md:right-[4%] translate-x-[50%] border-[1px] rounded-[24px]
              flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
              ${currentImageIndex === 0 ? "bg-secondary-000 border-secondary-500" : "bg-p-orange-500 border-p-orange-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-p-orange-500" : "text-secondary-000"}`}
                >
                  <span>[BOT]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[90px] left-[40px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
              xxl:h-[45px] absolute lg:top-[220px] xl:top-[280px] xxl:top-[320px] md:left-[14%] translate-x-[-50%] border-[1px] rounded-[24px]
               flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
               ${currentImageIndex === 0 ? "bg-p-orange-500 border-p-orange-500" : "bg-secondary-000 border-secondary-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-secondary-000" : "text-p-orange-500"}`}
                >
                  <span>[EPC]</span>
                </div>
              </div>
              <div
                className={`z-30 w-[65px] h-[25px] top-[90px] right-[20px] lg:w-[100px] lg:h-[35px] xl:w-[130px] xl:h-[40px] xxl:w-[150px]
              xxl:h-[45px] absolute lg:top-[220px] xl:top-[280px] xxl:top-[320px] md:right-[14%] translate-x-[50%] border-[1px] rounded-[24px]
               flex flex-wrap gap-[8px] justify-center items-center transition-colors duration-500
               ${currentImageIndex === 0 ? "bg-secondary-000 border-secondary-500" : "bg-p-orange-500 border-p-orange-500"}`}
              >
                <div
                  className={`w-fit text-[14px] lg:text-[18px] xl:text-[22px] font-semibold md:tracking-[1px] transition-colors duration-500 ${currentImageIndex === 0 ? "text-p-orange-500" : "text-secondary-000"}`}
                >
                  <span>[O&M]</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:flex flex-col flex-1 justify-center h-full items-center">
            <div className="flex flex-col gap-[100px] h-[550px] lg:h-full lg:py-[30px] xxl:py-0 xxl:h-[600px] w-full lg:gap-0 lg:pl-[20px] lg:pr-[30px]">
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
                <motion.img
                  src="/img/que-hacemos/logo-orange-2.svg"
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
                  className="w-[200px] h-auto xxl:pt-[50px]"
                />
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
                    {currentImageIndex === 0 ? (
                      <div className="flex flex-col items-start lg:h-[150px] ">
                        <p className="text-[26px] font-muli uppercase lg:pb-[60px]">
                          Ingeniería y construcción
                        </p>
                        <div className="flex gap-[60px]">
                          <div className="flex flex-col gap-[30px]">
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli font-medium">
                                Ingeniería [E]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Desarrollamos Ingeniería en todas sus fases.
                                Ingeniería Conceptual, Básica, y de Detalle.
                                Estudios Especiales, Estimación de Costos, y
                                Evaluación de Proyectos.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Plantas y Equipos Modulares [EP]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Diseñamos y Fabricamos Plantas de Procesos y
                                Equipos Modulares.
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[30px]">
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Plantas Llave en Mano [EPC]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Diseñamos, Fabricamos y Construimos Plantas de
                                Procesos Llave en Mano.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Gestión de Proyectos [EPCm / OE]
                              </h3>
                              <p className="font-inter xxl:text-[18px]  xxl:leading-[27px]">
                                Realizamos la Gestión Integral de Proyectos.
                                Ingeniería de Propiedad, Gestión de Suministros,
                                Gestión Contractual, Gestión de Calidad, Oficina
                                Técnica y Supervisión.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-start lg:h-[150px] lg:pr-[50px]">
                        <p className="text-[26px] font-muli uppercase lg:pb-[30px] xl:pb-[60px]">
                          Midstream
                        </p>
                        <div className="flex gap-[60px]">
                          <div className="flex flex-col gap-[30px]">
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli font-medium">
                                Servicios de Procesamiento de Gas y Petróleo
                                [BOOT]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Realizamos Servicios de Procesamientos de Gas y
                                Petróleo para terceros con equipos propios.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Procesamiento y Comercialización de LGN y GLP
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Procesamos corrientes de LGN (Líquidos del Gas
                                Natural) y GLP (Gas Licuado de Petróleo) para su
                                puesta en valor comercial y posterior
                                comercialización.
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[30px]">
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Operación y Mantenimiento [O&M]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Realizamos Servicios de Operación de Plantas de
                                Proceso para terceros. Soporte Técnico a
                                Operaciones. Precomisionado, Comisionado, y
                                Puesta en Marcha.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-p-orange-500 text-[22px] leading-[28px] xxl:text-[24px] font-muli">
                                Well Testing [WT]
                              </h3>
                              <p className="font-inter xxl:text-[18px] xxl:leading-[27px]">
                                Servicio de medición y análisis de las variables
                                asociadas a la producción de pozos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
          <div className="lg:hidden py-[60px] pt-[30px] sl:pt-[60px] md:flex overflow-hidden md:justify-between md:pt-[60px] md:pb-[120px]">
            <div className="flex flex-col gap-[28px] relative md:w-full md:basis-1/2">
              <SectionLabel text="Qué hacemos" />
              <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]"/>
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
                className="mySwiper mt-[20px] md:mt-0"
              >
                {/* Slide 1 — Ingeniería y construcción */}
                <SwiperSlide>
                  <div className="flex flex-col items-start gap-[20px]">
                    <p className="text-[18px] font-muli uppercase pb-[4px]">
                      Ingeniería y construcción
                    </p>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Ingeniería [E]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Desarrollamos Ingeniería en todas sus fases. Ingeniería
                        Conceptual, Básica, y de Detalle. Estudios Especiales,
                        Estimación de Costos, y Evaluación de Proyectos.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Plantas y Equipos Modulares [EP]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Diseñamos y Fabricamos Plantas de Procesos y Equipos
                        Modulares.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Plantas Llave en Mano [EPC]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Diseñamos, Fabricamos y Construimos Plantas de Procesos
                        Llave en Mano.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Gestión de Proyectos [EPCm / OE]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Realizamos la Gestión Integral de Proyectos. Ingeniería
                        de Propiedad, Gestión de Suministros, Gestión
                        Contractual, Gestión de Calidad, Oficina Técnica y
                        Supervisión.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 — Midstream */}
                <SwiperSlide>
                  <div className="flex flex-col items-start gap-[20px]">
                    <p className="text-[18px] font-muli uppercase pb-[4px]">
                      Midstream
                    </p>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Servicios de Procesamiento de Gas y Petróleo [BOOT]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Realizamos Servicios de Procesamientos de Gas y Petróleo
                        para terceros con equipos propios.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Procesamiento y Comercialización de LGN y GLP
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Procesamos corrientes de LGN (Líquidos del Gas Natural)
                        y GLP (Gas Licuado de Petróleo) para su puesta en valor
                        comercial y posterior comercialización.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Operación y Mantenimiento [O&M]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Realizamos Servicios de Operación de Plantas de Proceso
                        para terceros. Soporte Técnico a Operaciones.
                        Precomisionado, Comisionado, y Puesta en Marcha.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-p-orange-500 text-[16px] font-muli font-semibold">
                        Well Testing [WT]
                      </h3>
                      <p className="font-inter text-[14px] leading-[18px] sl:leading-[24px]">
                        Servicio de medición y análisis de las variables
                        asociadas a la producción de pozos.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
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
