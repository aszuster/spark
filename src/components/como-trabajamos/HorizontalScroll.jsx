import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../ui/SectionLabel";
import ArrowDown from "../../svg/ArrowDown";

// const Example = () => {
//   return (

//   );
// };

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="hidden lg:block relative h-[max(300vh,1800px)] bg-secondary-000">
      {/* Imagen de fondo que se mantiene fija como "piso" */}

      <div className="sticky top-0 left-[846px] flex h-[max(100vh,600px)] items-center overflow-hidden z-0">
        <motion.div
          style={{ x }}
          className="flex gap-4 ml-[846px] lg:ml-[350px] xxl:ml-[450px] z-20"
        >
          {cards.map((card, index) => {
            return <Card card={card} index={index} key={card.id} />;
          })}
        </motion.div>
        <img
          src="/img/como-trabajamos/a.svg"
          alt=""
          className="absolute bottom-0 left-0 z-[1] h-[800px] w-auto"
        />
        <div className="absolute bottom-0 right-0 z-0 w-[90%] h-full bg-bg-02"></div>
      </div>
    </section>
  );
};

const Card = ({ card, index }) => {
  const { t } = useTranslation();

  // Función para calcular el delay basado en el índice
  const getDelay = () => {
    // En pantallas xxl, las primeras 4 cards tienen stagger
    // En otras pantallas, solo las primeras 2
    const isXxl = window.innerWidth >= 1536; // xxl breakpoint
    const staggerCount = isXxl ? 4 : 2;

    if (index < staggerCount) {
      return 0.4 + index * 0.2;
    }
    return 0;
  };

  return (
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
        delay: getDelay(),
      }}
      key={card.id}
      className="group relative h-[460px] w-[329px] overflow-hidden rounded-[16px] bg-transparent z-20"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-10 transition-transform duration-300  "
      ></div>
      <div className="absolute inset-0 z-20 flex items-end justify-center pb-[24px] px-[16px] pt-[16px]">
        <div className="bg-secondary-000 text-p-blue-500 pb-[24px] px-[16px] pt-[16px] rounded-[12px]">
          <p className="text-inter font-semibold text-[18px] leading-[20px] tracking-[-0.9px] mb-[16px]">
            {t(`comoTrabajamos.cards.${index}.title`)}
          </p>
          <p className="text-inter font-normal text-[14px] leading-[20px] tracking-[-0.7px]">
            {t(`comoTrabajamos.cards.${index}.description`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// El texto (title/description) vive en comoTrabajamos.cards dentro de es.json / en.json,
// en el mismo orden que este array. Acá solo queda la data no traducible (imagen e id).
export const cards = [
  { url: "/img/como-trabajamos/01.webp", id: 1 },
  { url: "/img/como-trabajamos/02.webp", id: 2 },
  { url: "/img/como-trabajamos/03.webp", id: 3 },
  { url: "/img/como-trabajamos/04.webp", id: 4 },
  { url: "/img/como-trabajamos/05.webp", id: 5 },
  { url: "/img/como-trabajamos/06.webp", id: 6 },
  { url: "/img/como-trabajamos/07.webp", id: 7 },
  { url: "/img/como-trabajamos/08.webp", id: 8 },
  { url: "/img/como-trabajamos/09.webp", id: 9 },
];

export default HorizontalScrollCarousel;
