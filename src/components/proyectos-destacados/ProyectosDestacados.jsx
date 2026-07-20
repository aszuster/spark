import SectionLabel from "../ui/SectionLabel";
import ArrowButton from "../ui/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chevron from "../../svg/Chevron";
import Logo from "../../svg/logo";

const ProyectosDestacados = () => {
  return (
    <section
      id="proyectos-destacados"
      className="lg:min-h-screen w-full relative bg-secondary-200 md:pb-[120px] lg:pb-[80px]"
    >
      <img
        src="/img/proyectos-destacados/k.svg"
        alt=""
        className="absolute top-0 right-0 h-full w-auto object-cover"
      />
      <div className="z-10 relative mb-[60px] md:mb-[120px] px-[20px] md:px-0 ">
        <div>
          <SectionLabel
            text="Proyectos Destacados"
            className="absolute top-[60px] md:top-[120px] md:left-[32px] bg-gradient-to-br from-[#E2E5EA] to-[#EFF1F6] border-[1px] border-secondary-000"
          />
        </div>
        <div className="lg:w-[650px] xl:w-[400px]   mx-auto w-full md:w-[493px] pt-[120px] ">
          <h3 className="text-p-blue-500 font-muli text-[20px] md:text-[20px] lg:text-[32px] font-semibold leadig-[24px] md:leading-[40px] tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.6px]">
            Proyectos que generan valor
          </h3>

        </div>
      </div>
      <div className="w-full">
        {/* Desktop Navigation - Hidden on mobile */}
        <button className="hidden md:flex z-20 arrow-left arrow">
          <Chevron stroke="#fff" className="rotate-180" />
        </button>
        <button className="hidden md:flex z-20 arrow-right arrow">
          <Chevron stroke="#fff" />
        </button>
</div>
      <div className="h-auto md:h-[462px] w-full relative lg:max-w-[1000px] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1025: {
              slidesPerView: 3,
              // slidesPerView: "auto",
              spaceBetween: 50,
              centeredSlides: false,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper mb-8 md:mb-0"
          navigation={{
            nextEl: ".arrow-right, .arrow-right-mobile",
            prevEl: ".arrow-left, .arrow-left-mobile",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-proyectos",
            renderBullet: function (index, className) {
              return '<div class="' + className + '"></div>';
            },
          }}
        >
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[25px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/01.jpg" alt="" />
                </div>
                <div className="hidden md:block  bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[75px] h-auto">
                      <img
                        src="/img/clientes/ypf.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería conceptual
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Gathering LNG - ENI</p>
                      <p className="pt-[10px] pb-[5px]">
                        Red de gathering del gas que se inyectará el proyecto
                        lng. <br/>Cuadal: 60 mmscmd
                      </p>
                      <p className="text-p-orange-500">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[25px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/02.jpg" alt="" />
                </div>
                <div className="hidden md:block    bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[75px] h-auto">
                      <img
                        src="/img/clientes/ypf.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería conceptual
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Argentina LNG - Pretratamiento</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de pre-tratamiento de gas de 25 mmscmd

                      </p>
                      <p className="text-p-orange-500">2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[25px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/03.jpg" alt="" />
                </div>
                <div className="hidden md:block   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[75px] h-auto">
                      <img
                        src="/img/clientes/ypf.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería conceptual
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Oleoducto Vaca Muerta Sur</p>
                      <p className="pt-[10px] pb-[5px]">
                        Oleoducto vmos incluyendo las estaciones de bombeo
                      </p>
                      <p className="text-p-orange-500">2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/04.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[100px] h-auto">
                      <img
                        src="/img/clientes/pan-american.svg"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería básica extendida
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Gasoducto dedicado LNG</p>
                      <p className="pt-[10px] pb-[5px]">
                        Gasoducto 480km - 36 pulgadas + estación de compresión 70.000 hp
                      </p>
                      <p className="text-p-orange-500">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/05.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/shell.svg"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería conceptual
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">CPF Bajada de añelo</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de petróleo crudo 40.000 bbl/d y gas 120 MSCMD
                      </p>
                      <p className="text-p-orange-500">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/06.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/phoenix.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería y construcción <span className="text-p-orange-500">EPC</span>
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Planta tratamiento de crudo mata mora</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de crudo Mata Mora - 20.000 bbl/d
                      </p>
                      <p className="text-p-orange-500">2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/07.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/pluspetrol.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería básica extendida
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Planta de tratamiento de gas La Calera fase 1.5</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de gas La Calera fase 1.5
                      </p>
                      <p className="text-p-orange-500">2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/08.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/tgs.svg"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería básica extendida
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Planta de extracción de LPG</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de gas de 24 mmscmd
                      </p>
                      <p className="text-p-orange-500">2022-2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/09.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/phoenix.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería y construcción <span className="text-p-orange-500
                      ">EPC</span>
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Planta tratamiento de gas Mata Mora</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de gas Mata Mora - 250.000 mscd
                      </p>
                      <p className="text-p-orange-500">2022-2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/10.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/facilities-energy.svg"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                      Ingeniería y construcción <span className="text-p-orange-500
                      ">EPC</span>
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Fraccionadora sargento vidal</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de fraccionamiento, Condensados (2.000 TN/M) con producción de Gasolina y LPG
                      </p>
                      <p className="text-p-orange-500">2025-2026</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/11.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/mega.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                     Owner engineering
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Proyecto expansión planta Bahía Blanca</p>
                      <p className="pt-[10px] pb-[5px]">
                        Equipo de 45 profesionales al Servicio del Owner Engineering de la Ingeniería, Calidad, Seguridad, Fabricación de Equipos, Planificación, Supervisión en Campo y Oficina Técnica
                      </p>
                      <p className="text-p-orange-500">2023-2026</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/09.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/phoenix.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                     Operación y mantenimiento
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Planta tratamiento de gas Mata Mora</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de tratamiento de gas Mata Mora - 250.000 mscd
                      </p>
                      <p className="text-p-orange-500">2022-2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/12.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/geopark.png"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                     Ingeniería y construcción <span className="text-p-orange-500">EPC</span>
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Upgrade batería Loma Jarillosa</p>
                      <p className="pt-[10px] pb-[5px]">
                        Ampliación de la Bateria de Crudo hasta una producción de 10.000 Bbl/da
                      </p>
                      <p className="text-p-orange-500">2026</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
          <SwiperSlide className="!w-auto">
            <div className="flex flex-col w-full h-full mx-[20px] md:items-center lg:block md:mx-0">
              <div className="w-full h-[280px] md:w-[623px] lg:w-[300px] md:h-[462px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                <div className="w-full h-auto">
                  <img src="/img/proyectos-destacados/13.jpg" alt="" />
                </div>
                <div className="hidden md:block px-[16px]   bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                  <div className="flex items-center justify-between">
                    <div className="] bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                      <Logo />
                    </div>
                    <div className="w-[50px] h-auto">
                      <img
                        src="/img/clientes/facilities-energy.svg"
                        alt=""
                        className="w-[106px] h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="uppercase text-[12px] font-bold pt-[8px]">
                     Operación y mantenimiento
                    </p>
                    <div  className="pt-[20px] text-[14px] leading-[20px]">
                      <p className="uppercase">Fraccionadora Sargento Vidal</p>
                      <p className="pt-[10px] pb-[5px]">
                        Planta de fraccionamiento, condensados (2.000 tn/m) con producción de gasolina y lpg
                      </p>
                      <p className="text-p-orange-500">En ejecución</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden bg-secondary-000 rounded-[16px]  w-full  h-full px-[20px] py-[24px]">
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
        </Swiper>

        {/* Mobile Navigation and Pagination - Hidden on desktop */}
        <div className="flex md:hidden items-center justify-center gap-4 px-[20px] pb-[40px]">
          <button className="arrow-left-mobile arrow-mobile">
            <Chevron stroke="#fff" className="rotate-180" />
          </button>

          <div className="custom-pagination-proyectos bg-[#F7F7F7] p-[8px] rounded-[6px] flex gap-[8px] w-fit"></div>

          <button className="arrow-right-mobile arrow-mobile">
            <Chevron stroke="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProyectosDestacados;
