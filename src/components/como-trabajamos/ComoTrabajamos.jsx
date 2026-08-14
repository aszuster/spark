import HorizontalScrollCarousel, { cards } from "./HorizontalScroll";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../ui/SectionLabel";
import ArrowDown from "../../svg/ArrowDown";
import Chevron from "../../svg/Chevron";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ComoTrabajamos = () => {
  const { t } = useTranslation();
  const paragraphs = t("comoTrabajamos.paragraphs", { returnObjects: true });

  return (
    <section id="como-trabajamos" className="block w-full relative">
      <div className="bg-secondary-000 relative pt-[20px] md:pt-[180px] lg:pt-[0px] pl-[10px] lg:pl-[0px]">
        <div className="flex h-[535px] items-center justify-center md:h-full">
          <div className="w-full lg:w-[90%] h-auto bg-bg-02 rounded-tl-[100px] mr-0 ml-auto pl-[68px] md:pl-[233px] xxl:pl-[307px] pt-[70px] lg:pt-[167px] pr-[20px] md:pr-[118px] lg:pr-[0px] z-10 relative">
            <motion.div
              className="hidden lg:block absolute lg:top-[132px]  lg:left-[-15px]  z-30"
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
                className=" h-[102px] w-[32px] bg-p-orange-500 flex items-center justify-center rounded-[20px] "
              >
                <ArrowDown />
              </motion.div>
            </motion.div>
            <div className="f lg:w-[679px] pb-[60px] lg:pb-[0px]">
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
                  text={t("comoTrabajamos.sectionLabel")}
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
                className="font-muli text-[20px] lg:text-[32px] font-semibold leading-[24px] lg:leading-[40px] tracking-[-1px] lg:tracking-[-1.6px] mt-[32px]"
              >
                {t("comoTrabajamos.intro")}
              </motion.p>
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
                className="text-p-orange-500 font-bold text-[34px] mb-[48px] mt-[20px]"
               >
                {t("comoTrabajamos.philosophy")}
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
                className="flex gap-[20px] flex-col lg:flex-row "
              >
                <div className="flex flex-col gap-[20px] font-inter text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] tracking-[-0.56px] lg:tracking-[-0.64px]">
                  <p>{paragraphs[0]}</p>
                  <p>{paragraphs[1]}</p>
                </div>
                <div className="flex flex-col gap-[20px] font-inter text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] tracking-[-0.56px] lg:tracking-[-0.64px]">
                  <p>{paragraphs[2]}</p>
                  <p>{paragraphs[3]}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Swiper Slider */}
        <div className="lg:hidden px-[20px] md:px-0 md:ml-[-10px] py-[60px] bg-bg-02">
          <img
            src="/img/como-trabajamos/a.svg"
            alt=""
            className="absolute bottom-0 left-[-140px] z-[0] h-[700px] w-auto"
          />
          <div className="relative ">
            <Swiper
              modules={[Pagination, Navigation]}

              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                  centeredSlides: true,
                }}}
              pagination={{
                clickable: true,
                el: ".custom-pagination-como",
                renderBullet: function (index, className) {
                  return '<div class="' + className + '"></div>';
                },
              }}
              navigation={{
                nextEl: ".arrow-right-como",
                prevEl: ".arrow-left-como",
              }}
              className="mySwiper"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id} className="md:w-[340px]! md:ml-[30px] md:pb-[70px]">
                  <div className="relative h-[460px] w-full overflow-hidden rounded-[16px] bg-transparent">
                    <div
                      style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="absolute inset-0 z-10"
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation and Pagination */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="arrow-left-como arrow-mobile">
                <Chevron stroke="#fff" className="rotate-180" />
              </button>

              <div
                className="custom-pagination-como p-[8px] rounded-[6px] flex gap-[8px] w-fit  bg-[#E3E4E5]/20 
      backdrop-blur-sm buttonBorderWhite"
              ></div>
            
              <button className="arrow-right-como arrow-mobile">
                <Chevron stroke="#fff" />
              </button>
            </div>
          </div>
        </div>

        <HorizontalScrollCarousel />
      </div>
    </section>
  );
};

export default ComoTrabajamos;
