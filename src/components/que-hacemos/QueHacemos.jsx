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
  return (
    <section
      id="que-hacemos"
      className="block  md:min-h-auto w-full relative h-screen "
    >
      <SectionLabel
        className="absolute lg:top-[55px] left-[20px] lg:left-[35px] "
        text="Qué hacemos"
      />

      <div className="hidden lg:flex align-center w-full justify-between lg:max-w-[1080px] xl:max-w-[1280px] xxl:max-w-[1600px] lg:mx-auto py-[175px] gap-[150px]">
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
          <p className="font-bold uppercase py-[15px]">Ingeniería y construcción</p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
          <div>
            <p className="text-p-orange-500 font-bold">Ingeniería [E]</p>
            <p className="font-medium leading-[20px]">
              Desarrollamos Ingeniería en todas sus fases. Ingeniería
              Conceptual, Básica, y de Detalle. Estudios Especiales, Estimación
              de Costos, y Evaluación de Proyectos.
            </p>
          </div>
          <div>
            <p className="text-p-orange-500 font-bold">Plantas y Equipos Modulares [EP]</p>
            <p className="font-medium leading-[20px]">
              Diseñamos y Fabricamos Plantas de Procesos y Equipos Modulares.
            </p>
          </div>
          <div>
            <p className="text-p-orange-500 font-bold">Plantas Llave en Mano [EPC]</p>
            <p className="font-medium leading-[20px]">
              Diseñamos, Fabricamos y Construimos Plantas de Procesos Llave en
              Mano.
            </p>
          </div>
          <div>
            <p className="text-p-orange-500 font-bold">Gestión de Proyectos [EPCm / OE]</p>
            <p className="font-medium leading-[20px]">
              Realizamos la Gestión Integral de Proyectos. Ingeniería de
              Propiedad, Gestión de Suministros, Gestión Contractual, Gestión de
              Calidad, Oficina Técnica y Supervisión.
            </p>
          </div>
          </div>
        </div>
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
                    <p className="font-bold uppercase py-[15px]">Servicios petroleros</p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
          <div>
            <p className="text-p-orange-500 font-bold">Operación y Mantenimiento [O&M]</p>
            <p className="font-medium leading-[20px]">
              Realizamos Servicios de Operación de Plantas de Proceso para terceros. Soporte Técnico a Operaciones. Precomisionado, Comisionado, y Puesta en Marcha.
            </p>
          </div>
          <div>
            <p className="text-p-orange-500 font-bold">Well Testing</p>
            <p className="font-medium leading-[20px]">
             Servicio de medición y análisis de las variables asociadas a la producción de pozos.
            </p>
          </div>
          <div>
            <p className="text-p-orange-500 font-bold">Servicios de Procesamiento de Gas y Petróleo </p>
            <p className="font-medium leading-[20px]">
              Realizamos Servicios de Procesamientos de Gas y Petróleo para terceros con equipos propios.
            </p>
          </div>
          </div>
        </div>
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
                    <p className="font-bold uppercase py-[15px]">Midstream</p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
          <div>
            <p className="text-p-orange-500 font-bold">Procesamiento y Comercialización de LGN y GLP</p>
            <p className="font-medium leading-[20px]">
              Procesamos corrientes de LGN (Líquidos del Gas Natural) y GLP (Gas Licuado de Petróleo) para su puesta en valor comercial y posterior comercialización.
            </p>
          </div>
          <a href="#" className="px-[20px] py-[8px] rounded-3xl border border-black w-[155px] mt-[20px] hover:bg-p-orange-500 transition-all duration-300 hover:text-white hover:border-white"><p className="uppercase font-bold text-[18px] ">Midstream</p></a>
          </div>
        </div>
      </div>
      <div className="lg:sticky top-0 h-auto lg:h-screen w-full flex">
        {/* <img
          src="/img/que-hacemos/misc800.svg"
          alt="bg"
          className="absolute top-0 left-0 w-full lg:hidden tabletMisc"
        /> */}

        <div className="lg:flex w-full px-[20px] lg:px-0">
          <div className="lg:hidden py-[60px] pt-[30px] sl:pt-[60px] md:flex overflow-hidden md:justify-between md:pt-[60px] md:pb-[120px]">
            <div className="flex flex-col gap-[28px] relative md:w-full md:basis-1/2">
              <SectionLabel text="Qué hacemos" />
              <img
                src="/img/que-hacemos/logo-orange-2.svg"
                className="w-[150px]"
              />
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
