// import { LetterRevealTest } from "../ui/LetterRevealTest";
import SectionLabel from "../ui/SectionLabel";
import { motion } from "framer-motion";
import ArrowDown from "../../svg/ArrowDown";
import Marquee from "./Marquee";
import { Logos } from "./Logos";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Chevron from "../../svg/Chevron";
import "swiper/css";
import "swiper/css/navigation";

const Clientes = () => {
  const [hoveredLogoId, setHoveredLogoId] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section id="clientes">
      {/* Desktop Version */}
      <div className="hidden lg:block lg:min-h-screen w-full relative bg-p-blue-600">
        <div className="p-[16px] lg:rounded-[80px] overflow-hidden bg-[url('/img/blue-bg.png')] bg-cover bg-center bg-[#0E0D29] bg-blend-color-dodge">
          <div className="pt-[80px] pb-[115px]">
            <div className="flex flex-col gap-[22px] pl-[28px] pb-[60px]">
              <SectionLabel
                text="Clientes"
                className="bg-[#dddddd]/24! backdrop-blur-sm! text-secondary-000! glassBorder"
              />
              <h3 className="font-muli text-[48px] leading-[57px] tracking-[-2.4px] text-secondary-500 w-[600px]">
                Empresas líderes <br />
                que confían en Spark
              </h3>
            </div>
            <div className="w-full h-full">
            <div className="w-fit h-auto grid grid-cols-[repeat(6,minmax(0,146px))] gap-[20px] mx-auto">
              {Logos.map((logo, index) => {
                const isFirstOfLastFour = index === Logos.length - 4;
                return (
                  <div
                    key={`${logo.id}-${index}`}
                    className={`group w-[146px] h-[80px] flex items-center justify-center bg-secondary-000 rounded-xl overflow-hidden cursor-pointer ${
                      isFirstOfLastFour ? 'col-start-2' : ''
                    }`}
                  >
                    <div className="max-w-[115px] transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className={`object-contain w-[${logo.width}px] h-[${logo.height}px]`}
                    />
                    </div>
                  </div>
                );
              })}
            </div>
            </div>

            {/* <div className="mb-[80px] xxl:mb-[120px]">
            <Marquee 
              hoveredLogoId={hoveredLogoId} 
              onLogoHover={setHoveredLogoId}
            />
          </div> */}
            {/* <div className="w-[558px] h-[143px] xxl:h-[112px] xxl:w-[820px] flex flex-wrap gap-x-[24px] gap-y-[12px] ml-[600px] xxl:ml-[796px]">
            {Logos.map((logo, i) => {
              const isHovered = hoveredLogoId === logo.id;
              return (
                <div 
                  key={i} 
                  className="hover:cursor-pointer"
                  onMouseEnter={() => setHoveredLogoId(logo.id)}
                  onMouseLeave={() => setHoveredLogoId(null)}
                >
                  <p className={`font-inter text-[16px] tracking-[-0.8px] relative after:content-[''] after:absolute after:left-[-7px] after:top-[50%] 
                  after:translate-y-[-50%] after:w-[7px] after:h-[7px] after:rounded-[2px] after:bg-p-orange-600 after:opacity-0 after:transition-all after:duration-300
                  transition-all duration-300 ${
                    isHovered 
                      ? 'text-secondary-000 pl-[10px] after:opacity-100' 
                      : 'text-secondary-700 hover:text-secondary-000 hover:pl-[10px] hover:after:opacity-100'
                  }`}>
                    {logo.name}
                  </p>
                </div>
              );
            })}
          </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full relative bg-p-blue-600 py-[8px] mt-[-1px] overflow-hidden">
        <div className="bg-[url('/img/blue-bg.png')] bg-cover bg-center bg-[#0E0D29] bg-blend-color-dodge rounded-[40px] mx-[16px] pt-[80px] pb-[50px] md:pb-[115px]">
          {/* Header */}
          <div className="flex flex-col gap-[22px] px-[24px] mb-[40px]">
            <SectionLabel
              text="Clientes"
              className="bg-[#dddddd]/24! backdrop-blur-sm! text-secondary-000! glassBorder"
            />
            <h3 className="font-muli text-[24px] leading-[28px] tracking-[-1.2px] text-secondary-500 w-full">
              Empresas líderes <br />
              que confían en Spark
            </h3>
          </div>

          {/* Swiper Logos */}
          <div className="relative mb-[40px] overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              breakpoints={{
                768: {
                  spaceBetween: 10,
                },
              }}
              spaceBetween={-30}
              slidesPerView="auto"
              centeredSlides={true}
              centeredSlidesBounds={false}
              loop={true}
              loopedSlides={Logos.length}
              speed={300}
              watchSlidesProgress={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".arrow-right-clientes",
                prevEl: ".arrow-left-clientes",
              }}
              onSlideChange={(swiper) => {
                setActiveSlideIndex(swiper.realIndex);
              }}
              className="clientes-swiper"
            >
              {Logos.map((logo, index) => (
                <SwiperSlide key={`${logo.id}-${index}`}>
                  <div className="flex items-center justify-center bg-secondary-000 rounded-xl overflow-hidden">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Logo Names List */}
            <div className="px-[24px] md:flex md:justify-end">
              <div className="flex flex-wrap gap-x-[24px] gap-y-[12px] md:gap-y-[16px] md:w-[522px] my-[60px]">
                {Logos.map((logo) => {
                  const isActive =
                    activeSlideIndex ===
                    Logos.findIndex((l) => l.id === logo.id);
                  return (
                    <div key={logo.id} className="cursor-pointer">
                      <p
                        className={`font-inter text-[14px] md:text-[16px] tracking-[-0.7px] relative after:content-[''] after:absolute after:left-[-7px] after:top-[50%] 
                  after:translate-y-[-50%] after:w-[7px] after:h-[7px] after:rounded-[2px] after:bg-p-orange-600 after:opacity-0 after:transition-all after:duration-300
                  transition-all duration-300 ${
                    isActive
                      ? "text-secondary-000 pl-[10px] after:opacity-100"
                      : "text-secondary-700"
                  }`}
                      >
                        {logo.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className=" md:flex md:justify-end">
              <div className="flex items-center justify-center gap-4 mt-8 md:justify-start md:w-[522px] md:mr-[24px]">
                <button className="arrow-left-clientes arrow-mobile">
                  <Chevron stroke="#fff" className="rotate-180" />
                </button>

                <button className="arrow-right-clientes arrow-mobile">
                  <Chevron stroke="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
