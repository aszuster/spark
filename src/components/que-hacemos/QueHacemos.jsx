import { LetterRevealTest } from "../ui/LetterRevealTest";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const ingenieria = t("queHacemos.columns.ingenieriaYConstruccion", { returnObjects: true });
  const serviciosPetroleros = t("queHacemos.columns.serviciosPetroleros", { returnObjects: true });
  const midstream = t("queHacemos.columns.midstream", { returnObjects: true });

  return (
    <section
      id="que-hacemos"
      className="block  md:min-h-auto w-full relative min-h-screen "
    >
      <SectionLabel
        className="absolute lg:top-[55px] left-[20px] lg:left-[35px]"
        text={t("queHacemos.sectionLabel")}
      />

      <div className="hidden lg:flex align-center w-full justify-between lg:max-w-[1280px] xxl:max-w-[1600px] lg:mx-auto py-[175px] lg:py-[135px] xl:py-[175px] gap-[150px]">
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
          <p className="font-bold uppercase py-[15px]">
            {ingenieria.title}
          </p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
            {ingenieria.items.map((item, index) => (
              <div key={index}>
                <p className="text-p-orange-500 font-bold">{item.label}</p>
                <p className="font-medium leading-[20px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
          <p className="font-bold uppercase py-[15px]">{serviciosPetroleros.title}</p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
            {serviciosPetroleros.items.map((item, index) => (
              <div key={index}>
                <p className="text-p-orange-500 font-bold">{item.label}</p>
                <p className="font-medium leading-[20px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <img src="/img/que-hacemos/logo-orange-2.svg" className="w-[150px]" />
          <p className="font-bold uppercase py-[15px]">{midstream.title}</p>
          <div className="flex flex-col gap-[20px] pt-[10px]">
            {midstream.items.map((item, index) => (
              <div key={index}>
                <p className="text-p-orange-500 font-bold">{item.label}</p>
                <p className="font-medium leading-[20px]">{item.text}</p>
              </div>
            ))}
            <a
              href="https://fesa.com.ar/"
              className="px-[20px] py-[8px] rounded-3xl border border-black w-[155px] mt-[20px] hover:bg-p-orange-500 transition-all duration-300 hover:text-white hover:border-white"
            >
              <p className="uppercase font-bold text-[18px] ">{midstream.cta}</p>
            </a>
          </div>
        </div>
      </div>


          <div className="lg:hidden px-[20px] py-[100px] pt-[30px] sl:pb-[60px] sl:pt-[60px] md:flex overflow-hidden md:justify-between md:pt-[60px] md:pb-[120px]">
            <div className="flex flex-col gap-[28px] relative md:w-full md:basis-1/2">
              {/* <SectionLabel text="Qué hacemos" /> */}
              <img
                src="/img/que-hacemos/logo-orange-2.svg"
                className="w-[150px] pt-[25px]"
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
                  <div className="">
                    <p className="font-bold uppercase py-[15px]">
                      {ingenieria.title}
                    </p>
                    <div className="flex flex-col gap-[20px] pt-[10px]">
                      {ingenieria.items.map((item, index) => (
                        <div key={index}>
                          <p className="text-p-orange-500 font-bold">{item.label}</p>
                          <p className="font-medium leading-[20px]">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 — Servicios petroleros */}
                <SwiperSlide>
                  <div className="">
                    <p className="font-bold uppercase py-[15px]">
                      {serviciosPetroleros.title}
                    </p>
                    <div className="flex flex-col gap-[20px] pt-[10px]">
                      {serviciosPetroleros.items.map((item, index) => (
                        <div key={index}>
                          <p className="text-p-orange-500 font-bold">{item.label}</p>
                          <p className="font-medium leading-[20px]">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 — Midstream */}
                <SwiperSlide>
                  <div className="">
                    <p className="font-bold uppercase py-[15px]">{midstream.title}</p>
                    <div className="flex flex-col gap-[20px] pt-[10px]">
                      {midstream.items.map((item, index) => (
                        <div key={index}>
                          <p className="text-p-orange-500 font-bold">{item.label}</p>
                          <p className="font-medium leading-[20px]">{item.text}</p>
                        </div>
                      ))}
                      <a
                        href="https://fesa.com.ar/"
                        className="px-[20px] py-[8px] rounded-3xl border border-black w-[155px] mt-[20px] hover:bg-p-orange-500 transition-all duration-300 hover:text-white hover:border-white"
                      >
                        <p className="uppercase font-bold text-[18px] ">
                          {midstream.cta}
                        </p>
                      </a>
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
    </section>
  );
};

export default QueHacemos;
