import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import ArrowDown from "../../svg/ArrowDown";

const Example = () => {
  return (
    <div className="bg-secondary-000 relative">
      <div className="flex h-[535px] items-center justify-center ">
        <div className="w-[90%] h-full bg-bg-02 rounded-tl-[100px] mr-0 ml-auto pl-[233px] xxl:pl-[307px] pt-[167px] z-10 relative">
          <motion.div
            className="hidden md:block absolute lg:top-[132px]  lg:left-[-15px]  z-30"
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
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.4,
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
          <div className="f w-[679px]">
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
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <SectionLabel
                text="Cómo trabajamos"
                className={"bg-secondary-000"}
              />
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
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="font-muli text-[32px] font-semibold leading-[40px] tracking-[-1.6px] mb-[48px] mt-[32px]"
            >
              Nos comprometemos con los objetivos de cada Proyecto haciendo
              propia la mirada del negocio (Engineering for Bussines).
            </motion.p>
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
                delay: 0.3,
              }}
              className="flex gap-[20px]"
            >
              <div className="flex flex-col gap-[20px] font-inter text-[16px] font-normal leading-[24px] tracking-[-0.64px]">
                <p>
                  Desarrollamos e integramos tecnologías de procesos complejos
                  garantizando la solución más adecuada para cada Proyecto.
                </p>
                <p>
                  Aplicamos el conocimiento y la capacidad de análisis para la
                  solución de cada desafío.
                </p>
              </div>
              <div>
                <p>
                  Mantenemos un alto grado de independencia de proveedores
                  (agnósticos tecnológicos).
                </p>
                <p>
                  Trabajamos conforme a los estándares de cada industria y cada
                  operador. Nos adaptamos al contexto de cada Proyecto.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-secondary-000">
      {/* Imagen de fondo que se mantiene fija como "piso" */}

      <div className="sticky top-0 left-[846px] flex h-screen items-center overflow-hidden z-0">
        <motion.div style={{ x }} className="flex gap-4 ml-[846px] xxl:ml-[814px] z-20">
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
  // Función para calcular el delay basado en el índice
  const getDelay = () => {
    // En pantallas xxl, las primeras 4 cards tienen stagger
    // En otras pantallas, solo las primeras 2
    const isXxl = window.innerWidth >= 1536; // xxl breakpoint
    const staggerCount = isXxl ? 4 : 2;
    
    if (index < staggerCount) {
      return 0.4 + (index * 0.2);
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
        <div className="bg-secondary-000 text-p-blue-500 pb-[24px] px-[16px] pt-[16px]">
          <p className="text-inter font-semibold text-[18px] leading-[20px] tracking-[-0.9px] mb-[16px]">
            {card.title}
          </p>
          <p className="text-inter font-normal text-[14px] leading-[20px] tracking-[-0.7px]">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;

const cards = [
  {
    url: "/img/como-trabajamos/01.webp",
    title: "Instalaciones de Superficie",
    description:
      "Pozos | Pads | Captación | Separación Primaria | Almacenaje y Transferencia | Bombeo Multifásico | Ensayo de Pozos",
    id: 1,
  },
  {
    url: "/img/como-trabajamos/02.webp",
    title: "Tratamiento de Gas y Condensados",
    description:
      "Ajuste de Punto de Rocío | Remoción de Gases Acidos | Remoción de Mercurio | Recuperación y Fraccionamiento de NGL, LPG y Gasolinas | Licuefacción LNG",
    id: 2,
  },
  {
    url: "/img/como-trabajamos/03.webp",
    title: "Tratamiento de Petróleo",
    description:
      "Estabilización | Deshidratación | Desalado | Remoción de Contaminantes",
    id: 3,
  },
  {
    url: "/img/como-trabajamos/04.webp",
    title: "Tratamiento de Agua de Producción",
    description:
      "Tratamiento Secundario | Tratamiento Terciario | Almacenaje y Reinyección | Separación de Sólidos | Recuperación de Hidrocarburos",
    id: 4,
  },
  {
    url: "/img/como-trabajamos/05.webp",
    title: "Transporte",
    description:
      "Gasoductos, Oleoductos, Poliductos | Trampas Receptoras-Lanzadoras | Estaciones de Compresión | Estaciones de Bombeo | Estaciones Reguladoras | Estaciones de Almacenaje",
    id: 5,
  },
  {
    url: "/img/como-trabajamos/06.webp",
    title: "Unidades de Refinación",
    description:
      "Destilación Atmosférica y Vacío | Fraccionamiento | Hidrotratamiento | Remoción de Gases Acidos",
    id: 6,
  },
  {
    url: "/img/como-trabajamos/07.webp",
    title: "Servicios Auxiliares",
    description:
      "Generación de Energía Eléctrica | Circuitos de Vapor | Circuito de Fluidos Térmicos | Agua de Enfriamiento | Circuitos de Refrigeración | Aire de Instrumentos / Servicios | Nitrógeno | Sistemas de Drenajes | Sistemas de Venteos | Sistemas de Lucha contra Incendio",
    id: 7,
  },
  {
    url: "/img/como-trabajamos/08.webp",
    title: "Generación Eléctrica",
    description:
      "Centrales Térmicas | Turbogeneradores | Motogeneradores | Unidades de Recuperación | Ciclos Combinados | Cogeneración | Electrificación de Yacimientos",
    id: 7,
  },
  {
    url: "/img/como-trabajamos/09.webp",
    title: "Minería de Litio",
    description:
      "Pozos y Piletas | Concentración de Salmuera | Extracción Directa | Planta de Carbonato de Litio",
    id: 7,
  },
];
