import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Counter from "./Counter";

const Numbers = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Estados de tamaño para cada elemento
  const [activeState, setActiveState] = useState(0);

  // Configuración de los 3 estados
  const states = [
    {
      // Estado 1: Primer elemento grande
      first: {
        height: 341,
        numberClass:
          "text-[320px] leading-[288px] tracking-[-20px] number-base number-large",
        textClass: "text-[60px] leading-[60px] tracking-[-2.4px]",
        paddingNumber: "pb-[52px]",
        paddingText: "pb-[52px]",
        iconClass: "top-[25px]",
        iconSize: "w-[26px] h-[60px]",
        iconPath:
          "M14 0.839996V55.34L24.5 44.84L26 46.16L13 59.16L0 46.16L1.5 44.84L12 55.34V0.839996H14Z",
        viewBox: "0 0 26 60",
        numberValue: 350,
        numberPrefix: "+",
        // marginClass: "my-[38px]",
        gap: 48,
      },
      second: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 150,
        numberPrefix: "+",
        // marginClass: "my-[38px]",
        gap: 24,
      },
      third: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 250,
        numberPrefix: "",
        numberSuffix: "k",
        // marginClass: "my-[38px]",
        gap: 24,
      },
    },
    {
      // Estado 2: Segundo elemento grande
      first: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 350,
        numberPrefix: "+",
        numberSuffix: "",
        // marginClass: "my-[38px]",
        gap: 24,
      },
      second: {
        height: 341,
        numberClass:
          "text-[320px] leading-[288px] tracking-[-20px] number-base number-large",
        textClass: "text-[60px] leading-[60px] tracking-[-2.4px]",
        paddingNumber: "pb-[52px]",
        paddingText: "pb-[52px]",
        iconClass: "top-[25px]",
        iconSize: "w-[26px] h-[60px]",
        iconPath:
          "M14 0.839996V55.34L24.5 44.84L26 46.16L13 59.16L0 46.16L1.5 44.84L12 55.34V0.839996H14Z",
        viewBox: "0 0 26 60",
        numberValue: 150,
        numberPrefix: "+",
        numberSuffix: "",
        // marginClass: "my-[38px]",
        gap: 48,
      },
      third: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 250,
        numberPrefix: "",
        numberSuffix: "k",
        // marginClass: "my-[38px]",
        gap: 24,
      },
    },
    {
      // Estado 3: Tercer elemento grande
      first: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 350,
        numberPrefix: "+",
        numberSuffix: "",
        // marginClass: "my-[38px]",
        gap: 24,
      },
      second: {
        height: 160,
        numberClass:
          "text-[97px] leading-[88px] tracking-[-7.76px] number-base number-small",
        textClass: "text-[24px] leading-[24px] tracking-[-1.2px]",
        paddingNumber: "pb-[0px]",
        paddingText: "pb-[0px]",
        iconClass: "top-[50%] translate-y-[-50%]",
        iconSize: "w-[24px] h-[24px]",
        iconPath:
          "M22.904 0C22.6133 0.000526626 22.3346 0.116103 22.1289 0.321472C21.9231 0.526841 21.8071 0.805301 21.806 1.096V20.266L1.866 0.324C1.65879 0.133015 1.38578 0.0295246 1.10403 0.0351696C0.822292 0.0408146 0.55364 0.155157 0.354249 0.354289C0.154858 0.553421 0.0401679 0.821926 0.0341578 1.10366C0.0281476 1.3854 0.131283 1.65855 0.322001 1.866L20.262 21.808H1.096C0.805322 21.808 0.526551 21.9235 0.321012 22.129C0.115472 22.3345 0 22.6133 0 22.904C0 23.1947 0.115472 23.4734 0.321012 23.679C0.526551 23.8845 0.805322 24 1.096 24H22.904C23.1944 23.9989 23.4725 23.8831 23.6778 23.6778C23.8831 23.4725 23.9989 23.1944 24 22.904V1.096C23.9989 0.805647 23.8831 0.527487 23.6778 0.322175C23.4725 0.116863 23.1944 0.00105392 22.904 0Z",
        viewBox: "0 0 24 24",
        numberValue: 150,
        numberPrefix: "+",
        // marginClass: "my-[38px]",
        gap: 24,
      },
      third: {
        height: 341,
        numberClass:
          "text-[320px] leading-[288px] tracking-[-20px] number-base number-large",
        textClass: "text-[60px] leading-[60px] tracking-[-2.4px]",
        paddingNumber: "pb-[52px]",
        paddingText: "pb-[52px]",
        iconClass: "top-[25px]",
        iconSize: "w-[26px] h-[60px]",
        iconPath:
          "M14 0.839996V55.34L24.5 44.84L26 46.16L13 59.16L0 46.16L1.5 44.84L12 55.34V0.839996H14Z",
        viewBox: "0 0 26 60",
        numberValue: 250,
        numberPrefix: "",
        numberSuffix: "k",
        // marginClass: "my-[38px]",
        gap: 48,
      },
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular el estado activo basado en el scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.33) {
        setActiveState(0);
      } else if (latest < 0.66) {
        setActiveState(1);
      } else {
        setActiveState(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentState = states[activeState];

  // Función para determinar si un elemento debe animar (solo cuando es grande)
  const shouldAnimate = (elementKey) => {
    return currentState[elementKey].numberClass.includes("number-large");
  };

  // Función para renderizar el número (animado o estático)
  const renderNumber = (elementKey) => {
    const element = currentState[elementKey];
    if (shouldAnimate(elementKey)) {
      return (
        <>
          <Counter
            value={element.numberValue}
            prefix={element.numberPrefix}
            suffix={element.numberSuffix || ""}
            className=""
          />
          <span className="number-gradient-overlay">
            <Counter
              value={element.numberValue}
              prefix={element.numberPrefix}
              suffix={element.numberSuffix || ""}
              className=""
            />
          </span>
        </>
      );
    } else {
      const displayValue = `${element.numberPrefix}${element.numberValue}${
        element.numberSuffix || ""
      }`;
      return (
        <>
          {displayValue}
          <span className="number-gradient-overlay">{displayValue}</span>
        </>
      );
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <section
        id="numbers"
        ref={containerRef}
        className="hidden lg:block h-[300vh] w-full relative bg-p-blue-600"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <img
            src="/img/r.png"
            className="absolute top-0 right-0 h-full w-auto z-0"
          />
          <div className="my-[90px] px-[32px] z-30 relative w-full xxl:max-w-[1544px]">
            <div className="w-full h-[1px] bg-secondary-600 relative">
              <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] right-0"></div>
            </div>

            {/* Primer elemento */}

            <motion.div
              className={`flex justify-start items-center relative`}
              animate={{
                height: currentState.first.height,
                gap: currentState.first.gap,
                marginLeft: shouldAnimate("first") ? "30px" : "193px",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                marginLeft: { duration: 0.1, ease: "easeOut" },
              }}
            >
              <div
                className={`absolute ${currentState.first.iconClass} right-[10px] transition-all duration-600 ease-in-out`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={currentState.first.iconSize}
                  viewBox={currentState.first.viewBox}
                  fill="none"
                >
                  <path d={currentState.first.iconPath} fill="#7D7F83" />
                </svg>
              </div>
              <div
                className="flex items-end relative transition-all duration-600 ease-in-out "
                style={{ gap: `${currentState.first.gap}px` }}
              >
                <p
                  className={`font-muli font-normal transition-all duration-600 ease-in-out ${
                    activeState === 0 ? "ml-[39px]!" : "ml-[10px]"
                  } ${currentState.first.numberClass} flex items-end ${
                    currentState.first.paddingNumber
                  }`}
                >
                  {renderNumber("first")}
                </p>
                <p
                  className={`text-secondary-000 font-muli font-normal transition-all duration-600 ease-in-out ${currentState.first.textClass} flex items-end ${currentState.first.paddingText}`}
                >
                  proyectos ejecutados
                </p>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-secondary-600 relative">
              <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] left-0"></div>
            </div>

            {/* Segundo elemento */}
            <motion.div
              className={`flex justify-start items-center relative`}
              animate={{
                height: currentState.second.height,
                gap: currentState.second.gap,
                marginLeft: shouldAnimate("second") ? (windowWidth < 1440 ? "0px" : "200px") : "341px",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                marginLeft: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className={`absolute ${currentState.second.iconClass} right-[10px] transition-all duration-600 ease-in-out`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={currentState.second.iconSize}
                  viewBox={currentState.second.viewBox}
                  fill="none"
                >
                  <path d={currentState.second.iconPath} fill="#7D7F83" />
                </svg>
              </div>
              <div
                className="flex items-end relative transition-all duration-600 ease-in-out"
                style={{ gap: `${currentState.second.gap}px` }}
              >
                <p
                  className={`font-muli font-normal transition-all duration-600 ease-in-out ${currentState.second.numberClass} flex items-end ${currentState.second.paddingNumber}`}
                >
                  {renderNumber("second")}
                </p>
                <p
                  className={`text-secondary-000 font-muli font-normal transition-all duration-600 ease-in-out ${currentState.second.textClass} flex items-end ${currentState.second.paddingText}`}
                >
                  profesionales
                </p>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-secondary-600 relative">
              <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] right-0"></div>
            </div>

            {/* Tercer elemento */}
            <motion.div
              className={`flex justify-start items-center relative`}
              animate={{
                height: currentState.third.height,
                gap: currentState.third.gap,
                marginLeft: shouldAnimate("third") ? "90px" : "570px",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                marginLeft: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className={`absolute ${currentState.third.iconClass} right-[10px] transition-all duration-600 ease-in-out`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={currentState.third.iconSize}
                  viewBox={currentState.third.viewBox}
                  fill="none"
                >
                  <path d={currentState.third.iconPath} fill="#7D7F83" />
                </svg>
              </div>
              <div
                className="flex items-end relative transition-all duration-600 ease-in-out"
                style={{ gap: `${currentState.third.gap}px` }}
              >
                <p
                  className={`font-muli font-normal transition-all duration-600 ease-in-out ${currentState.third.numberClass} flex items-end ${currentState.third.paddingNumber}`}
                >
                  {renderNumber("third")}
                </p>
                <p
                  className={`text-secondary-000 font-muli font-normal transition-all duration-600 ease-in-out ${currentState.third.textClass} flex items-end ${currentState.third.paddingText}`}
                >
                  h/año de Ingeniería
                </p>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-secondary-600 relative">
              <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] left-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <MobileNumbers />
    </>
  );
};

// Mobile Counter Component - ensures numbers are visible
const MobileCounter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const numericValue = typeof value === "number" && !isNaN(value) ? value : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 150,
  });
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedNumber = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
        ref.current.textContent = `${prefix}${formattedNumber}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  // Set initial value
  useEffect(() => {
    if (ref.current && !isInView) {
      ref.current.textContent = `${prefix}0${suffix}`;
    }
  }, [prefix, suffix, isInView]);

  return (
    <span
      ref={ref}
      className="font-muli font-normal text-[64px] md:text-[130px] leading-[58px] md:leading-[140px] tracking-[-5.12px] number-mobile-wrapper"
    >
      {prefix}0{suffix}
    </span>
  );
};

// Mobile Numbers Component
const MobileNumbers = () => {
  const mobileStats = [
    {
      value: 350,
      prefix: "+",
      suffix: "",
      text: "proyectos ejecutados",
    },
    {
      value: 150,
      prefix: "+",
      suffix: "",
      text: "profesionales",
    },
    {
      value: 250,
      prefix: "",
      suffix: "k",
      text: "h/año de Ingeniería",
    },
  ];

  return (
    <section className="lg:hidden w-full relative bg-p-blue-600 py-[90px] md:pt-[106px] px-[22px] overflow-hidden md:mb-[-1px]">
      <img
        src="/img/r.png"
        alt=""
        className="absolute top-0 right-[-70px] h-full w-auto object-cover z-0"
      />
      <div className="relative z-10 flex flex-col gap-[32px]">
        {mobileStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[1px] bg-secondary-600 relative mb-[24px]">
              <div
                className={`w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}
              ></div>
            </div>

            <div className="flex items-end gap-[12px] md:ml-[75px]">
              <div className="relative flex items-end gap-[12px]">
                <MobileCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-secondary-000 font-muli font-normal text-[18px] md:text-[24px] leading-[20px] tracking-[-0.9px]">
                {stat.text}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="w-full h-[1px] bg-secondary-600 relative mt-[8px]">
          <div className="w-[8px] h-[8px] bg-p-orange-600 rounded-[2px] absolute top-[-3.6px] left-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
