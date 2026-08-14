import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ArrowButton from "../ui/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Chevron from "../../svg/Chevron";
import "swiper/css";
import "swiper/css/navigation";

// El texto (title/description) vive en unite.cards dentro de es.json / en.json,
// en el mismo orden que este array. Acá solo queda el id, usado como key.
const cardIds = [1, 2, 3, 4, 5];

const Unite = () => {
  const { t } = useTranslation();
  const cards = t("unite.cards", { returnObjects: true });

  return (
    <section
      id="trabaja-con-nosotros"
      className="mt-[-1px] lg:h-auto overflow-hidden w-full relative bg-p-blue-600  px-[20px] md:px-[32px]  md:py-[78px]"
    >
      <h3 className="md:max-w-[380px] mb-[40px] font-muli text-[28px] md:text-[32px] lg:text-[48px] leading-[36px] md:leading-[38px] lg:leading-[54px] tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-2.4px] text-secondary-500 md:w-[387px] lg:w-[750px] xxl:w-[836px]">
        {t("unite.heading")}
      </h3>
      <ArrowButton
      href="mailto:sumate@sparkgy.com"
        text={t("unite.cta")}
        className="w-full md:w-fit justify-between md:justify-start"
      />
      <div className="relative mt-[40px] overflow-hidden">
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            768: {
              spaceBetween: 20,
              slidesPerView: "auto",
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: "auto",
              // slidesOffsetBefore: typeof window !== 'undefined' ? window.innerWidth / 2 - 329 / 2 : 0,
            },
          }}
          spaceBetween={20}
          slidesPerView="auto"
          speed={300}
          watchSlidesProgress={true}
          navigation={{
            nextEl: ".arrow-right-unite",
            prevEl: ".arrow-left-unite",
          }}
          className="unite-swiper"
        >
            {cards.map((card, index) => (
              <SwiperSlide key={`${cardIds[index]}-${index}`}>
                <div className="w-[329px] h-[289px] p-[32px] flex flex-col justify-center gap-y-[16px] bg-[url('/img/blue-bg.png')] bg-[#0E0D29] bg-cover bg-blend-color-dodge rounded-[12px]">
                  <p className={`text-inter font-semibold text-[28px] ${cardIds[index] === 5 ? "h-[100px]" : "h-[65px]"}  leading-[32px] tracking-[-5%] text-secondary-000`}>
                    {card.title}
                  </p>
                  <p className="text-inter text-[16px] leading-[20px] tracking-[-5%] text-secondary-000">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center justify-center gap-4">
            <button className="arrow-left-unite arrow-mobile">
              <Chevron stroke="#fff" className="rotate-180" />
            </button>
            <button className="arrow-right-unite arrow-mobile">
              <Chevron stroke="#fff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unite;
