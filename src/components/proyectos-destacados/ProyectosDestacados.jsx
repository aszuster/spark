import SectionLabel from "../ui/SectionLabel";
import ArrowButton from "../ui/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Chevron from "../../svg/Chevron";

const ProyectosDestacados = () => {
  return (
    <section id="proyectos-destacados" className="hidden lg:block lg:h-screen w-full relative bg-secondary-200">
      <img
        src="/img/proyectos-destacados/k.svg"
        alt=""
        className="absolute top-0 right-0 h-full w-auto object-cover"
      />
      <div className="z-10 relative mb-[120px]">
        <div>
          <SectionLabel
            text="Proyectos Destacados"
            className="absolute top-[120px] lg:left-[32px] bg-gradient-to-br from-[#E2E5EA] to-[#EFF1F6] border-[1px] border-secondary-000"
          />
        </div>
        <div className="flex flex-col gap-[32px] items-start mx-auto w-[493px] pt-[120px]">
          <h3 className="text-p-blue-500 font-muli text-[32px] font-semibold! leadig-[40pxs] tracking-[-1.6px]">
            Proyectos que generan valor
          </h3>
          <ArrowButton
            text="Antecedentes (.pdf)"
            download={true}
            className="text-p-blue-500! bg-gradient-to-br! from-[#E2E5EA]! to-[#EFF1F6]! border-[1px]! border-secondary-000!"
          />
        </div>
      </div>
      <div className="h-[462px] w-full relative">
        <Swiper
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1025: {
              slidesPerView: 1.5,
              spaceBetween: 150,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 1.5,
              spaceBetween: 150,
              centeredSlides: true,
            },
            1920: {
              slidesPerView: 'auto',
              spaceBetween: 150,
              centeredSlides: true,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        >
          <SwiperSlide>
            <div className="w-[918px] h-[462px] bg-[url('/img/proyectos-destacados/01.webp')] bg-cover bg-center rounded-[40px] px-[30px] py-[40px] flex items-end justify-end">
              <div className="px-[20px] py-[24px] bg-secondary-000 rounded-[20px] w-[464px] h-auto">
                <div className="flex items-center justify-between">
                  <div className="] bg-p-orange-600 rounded-[6px] h-[26px] w-[70px] flex items-center justify-center">
                    <span className="text-secondary-000 font-inter text-[14px] leading-[14px] tracking-[-0.7px] uppercase">
                      Cliente
                    </span>
                  </div>
                  <div className="w-[106px] h-auto">
                    <img
                      src="/img/clientes/pan-american.svg"
                      alt=""
                      className="w-[106px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Proyecto:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px] mb-[10px]">
                  PO Planta Compresora
                </p>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Alcance:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px]">
                  Ingeniería Conceptual y Básica
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[918px] h-[462px] bg-[url('/img/proyectos-destacados/02.webp')] bg-cover bg-bottom rounded-[40px] px-[30px] py-[40px] flex items-end justify-end">
              <div className="px-[20px] py-[24px] bg-secondary-000 rounded-[20px] w-[464px] h-auto">
                <div className="flex items-center justify-between">
                  <div className="] bg-p-orange-600 rounded-[6px] h-[26px] w-[70px] flex items-center justify-center">
                    <span className="text-secondary-000 font-inter text-[14px] leading-[14px] tracking-[-0.7px] uppercase">
                      Cliente
                    </span>
                  </div>
                  <div className="w-[105px] h-auto">
                    <img
                      src="/img/clientes/tgs.svg"
                      alt=""
                      className="w-[105px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Proyecto:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px] mb-[10px]">
                  PTG TRATAYEN
                </p>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Alcance:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px]">
                  Ingeniería Básica Extendida
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[918px] h-[462px] bg-[url('/img/proyectos-destacados/03.jpg')] bg-cover bg-bottom rounded-[40px] px-[30px] py-[40px] flex items-end justify-end">
              <div className="px-[20px] py-[24px] bg-secondary-000 rounded-[20px] w-[464px] h-auto">
                <div className="flex items-center justify-between">
                  <div className="] bg-p-orange-600 rounded-[6px] h-[26px] w-[70px] flex items-center justify-center">
                    <span className="text-secondary-000 font-inter text-[14px] leading-[14px] tracking-[-0.7px] uppercase">
                      Cliente
                    </span>
                  </div>
                  <div className="w-[168px] h-auto">
                    <img
                      src="/img/clientes/phoenix.png"
                      alt=""
                      className="w-[168px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Proyecto:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px] mb-[10px]">
                  CPF Mata Mora
                </p>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Alcance:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px]">
                  EPC
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[918px] h-[462px] bg-[url('/img/proyectos-destacados/04.jpeg')] bg-cover bg-bottom rounded-[40px] px-[30px] py-[40px] flex items-end justify-end">
              <div className="px-[20px] pt-[14px] pb-[24px] bg-secondary-000 rounded-[20px] w-[464px] h-auto">
                <div className="flex items-center justify-between">
                  <div className="] bg-p-orange-600 rounded-[6px] h-[26px] w-[70px] flex items-center justify-center">
                    <span className="text-secondary-000 font-inter text-[14px] leading-[14px] tracking-[-0.7px] uppercase">
                      Cliente
                    </span>
                  </div>
                  <div className="w-[147px] h-auto">
                    <img
                      src="/img/clientes/mega.png"
                      alt=""
                      className="w-[147px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Proyecto:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px] mb-[10px]">
                  Ampliación Planta de Fraccionamiento
                  <br />
                  Bahía Blanca
                </p>
                <div className="flex items-center gap-[8px]">
                  {/* <Chevron stroke="#4A5468" className="w-[6px] h-[14px]" /> */}
                  <p className="text-secondary-700 font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.64px]">
                    Alcance:
                  </p>
                </div>
                <p className="text-p-blue-600 font-muli text-[14px] leading-[24px] tracking-[-0.56px]">
                  Owner Engineering
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="z-20 arrow-left arrow">
          <Chevron stroke="#fff" className="rotate-180"/>
        </button>
        <button className="z-20 arrow-right arrow">
          <Chevron stroke="#fff"  />
        </button>
      </div>
    </section>
  );
};

export default ProyectosDestacados;
