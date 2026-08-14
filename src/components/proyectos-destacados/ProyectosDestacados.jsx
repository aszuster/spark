import SectionLabel from "../ui/SectionLabel";
import ArrowButton from "../ui/ArrowButton";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chevron from "../../svg/Chevron";
import Logo from "../../svg/logo";

// Data no traducible (imagen del proyecto + logo del cliente) en el mismo orden
// que proyectosDestacados.projects en es.json / en.json.
const projectsMeta = [
  { image: "01.jpg", logo: "ypf.png", logoClass: "w-[75px] h-auto absolute top-0 right-0" },
  { image: "02.jpg", logo: "ypf.png", logoClass: "w-[75px] h-auto absolute top-0 right-0" },
  { image: "03.jpg", logo: "ypf.png", logoClass: "w-[75px] h-auto absolute top-0 right-0" },
  { image: "05.jpg", logo: "shell.svg", logoClass: "w-[50px] h-auto absolute top-0 right-0" },
  { image: "08.jpg", logo: "tgs.svg", logoClass: "w-[75px] h-auto" },
  { image: "04.jpg", logo: "pan-american.svg", logoClass: "w-[100px] h-auto absolute top-[-5px] right-[-5px]" },
  { image: "07.jpg", logo: "pluspetrol.png", logoClass: "w-[80px] h-auto absolute top-0 right-0" },
  { image: "06.jpg", logo: "phoenix.png", logoClass: "w-[120px] h-auto absolute top-0 right-0" },
  { image: "09.jpg", logo: "phoenix.png", logoClass: "w-[120px] h-auto absolute top-0 right-0" },
  { image: "10.jpg", logo: "facilities-energy.svg", logoClass: "w-[70px] h-auto absolute top-0 right-0" },
  { image: "12.jpg", logo: "geopark.png", logoClass: "w-[100px] h-auto absolute top-0 right-0" },
  { image: "09.jpg", logo: "phoenix.png", logoClass: "w-[120px] h-auto absolute top-0 right-0" },
  { image: "13.jpg", logo: "facilities-energy.svg", logoClass: "w-[70px] h-auto absolute top-0 right-0" },
  { image: "11.jpg", logo: "mega.png", logoClass: "w-[100px] h-auto absolute top-[-10px] right-0" },
];

const ProyectosDestacados = () => {
  const { t } = useTranslation();
  const projects = t("proyectosDestacados.projects", { returnObjects: true });

  return (
    <section
      id="proyectos-destacados"
      className="lg:min-h-screen w-full relative bg-secondary-200 md:pb-[120px] lg:pb-[80px]"
    >
      {/* <img
        src="/img/proyectos-destacados/k.svg"
        alt=""
        className="absolute top-0 right-0 h-full w-auto object-cover"
      /> */}
      <div className="z-10 relative mb-[60px] md:mb-[120px] px-[20px] md:px-0 ">
        <div>
          <SectionLabel
            text={t("proyectosDestacados.sectionLabel")}
            className="absolute top-[60px] md:top-[120px] md:left-[32px] bg-gradient-to-br from-[#E2E5EA] to-[#EFF1F6] border-[1px] border-secondary-000"
          />
        </div>
        <div className="lg:w-[650px] xl:w-[400px]   mx-auto w-full md:w-[300px] pt-[120px] ">
          <h3 className="text-p-blue-500 font-muli text-[20px] md:text-[20px] lg:text-[32px] font-semibold leadig-[24px] md:leading-[40px] tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.6px]">
            {t("proyectosDestacados.heading")}
          </h3>
        </div>
      </div>
      <div className="w-full">
        {/* Desktop Navigation - Hidden until 1025px */}
        <button className="hidden min-[1025px]:flex z-20 arrow-left arrow">
          <Chevron stroke="#fff" className="rotate-180" />
        </button>
        <button className="hidden min-[1025px]:flex z-20 arrow-right arrow">
          <Chevron stroke="#fff" />
        </button>
      </div>
      <div className="h-auto lg:h-[500px] w-full relative lg:max-w-[1000px] mx-auto">
        <Swiper
          slidesPerView={1}
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
          className="mySwiper mb-8 min-[1025px]:mb-0"
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
          {projects.map((project, index) => {
            const meta = projectsMeta[index];
            const logoContainerClass = meta.logoClass.includes("absolute")
              ? "flex items-start justify-between relative"
              : "flex items-start justify-between";

            return (
              <SwiperSlide key={index} className="!w-full min-[1025px]:!w-auto">
                <div className="flex flex-col w-full h-full items-center lg:block md:mx-0">
                  <div className="h-[500px] w-[250px] lg:w-[300px] bg-secondary-000 rounded-[20px] md:rounded-[30px] px-[20px] md:px-[15px] py-[30px] md:py-[40px] flex flex-col gap-[20px]">
                    <div className="w-full h-auto">
                      <img
                        src={`/img/proyectos-destacados/${meta.image}`}
                        alt=""
                      />
                    </div>
                    <div className="bg-secondary-000 rounded-[16px] md:rounded-[20px] w-full md:w-full h-auto">
                      <div className={logoContainerClass}>
                        <div>
                          <div className="bg-p-orange-500 rounded-[6px] h-[26px] w-[70px] px-[8px] flex items-center justify-center text-secondary-000">
                            <Logo />
                          </div>
                          <p className="uppercase text-[12px] font-bold pt-[8px]">
                            {project.category}
                          </p>
                        </div>
                        <div className={meta.logoClass}>
                          <img
                            src={`/img/clientes/${meta.logo}`}
                            alt=""
                            className="h-auto"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="pt-[20px] text-[14px] leading-[20px]">
                          <p className="uppercase">{project.title}</p>
                          <p className="pt-[10px] pb-[5px]">
                            {project.description}
                          </p>
                          <p className="text-p-orange-500">{project.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Mobile Navigation and Pagination - Hidden from 1025px up */}
        <div className="flex min-[1025px]:hidden items-center justify-center gap-4 px-[20px] pb-[40px]">
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
