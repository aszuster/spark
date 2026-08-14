import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Menu from "../../svg/menu";
import NavbarMobile from "./NavbarMobile";
import LanguageSwitcher from "../ui/LanguageSwitcher";

// Mapea los IDs de sección del DOM a las claves usadas en navbar.desktop.links (es.json)
const SECTION_KEYS = {
  "quienes-somos": "quienesSomos",
  "que-hacemos": "queHacemos",
  "como-trabajamos": "comoTrabajamos",
  clientes: "clientes",
  "proyectos-destacados": "proyectosDestacados",
  cultura: "cultura",
  "trabaja-con-nosotros": "trabajaConNosotros",
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [currentSection, setCurrentSection] = useState(t("navbar.defaultSection"));
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get navbar position
      const navbarBottom = window.innerHeight - 58; // navbar is at bottom-[58px]

      // Light background section IDs
      const lightSections = [
        "quienes-somos",
        "que-hacemos",
        "como-trabajamos",
        "proyectos-destacados",
      ];

      // All sections in order
      const allSections = [
        "quienes-somos",
        "que-hacemos",
        "como-trabajamos",
        "clientes",
        "numbers",
        "proyectos-destacados",
        "cultura",
        "trabaja-con-nosotros",
      ];

      // Check which section the navbar is over
      let isOverLightSection = false;
      let currentSectionId = null; // default to null

      for (const sectionId of allSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if navbar intersects with this section
          if (rect.top < navbarBottom && rect.bottom > navbarBottom) {
            currentSectionId = sectionId;
            isOverLightSection = lightSections.includes(sectionId);
            break;
          }
        }
      }

      setIsDarkText(isOverLightSection);
      setCurrentSection(
        currentSectionId
          ? t(`navbar.desktop.links.${SECTION_KEYS[currentSectionId]}`)
          : t("navbar.defaultSection")
      );
      const hideInSection = currentSectionId === "numbers" ||
        (currentSectionId === "que-hacemos" && window.innerWidth < 1600);
      setIsHidden(hideInSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [t]);

  const handleNavClick = () => {
    // Only open the menu when it's closed
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <>
    <LanguageSwitcher className="hidden lg:flex fixed top-[35px] right-[40px] z-50" />
    <LanguageSwitcher className="flex lg:hidden fixed bottom-[28px] right-[24px] z-50" />
    <div
      className={`hidden lg:flex fixed bottom-[58px] left-[50%] translate-x-[-50%] z-50 transition-opacity duration-400 ease-in-out ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleNavClick}
      className={`flex overflow-hidden transition-all duration-500 ease-in-out bg-[#E3E4E5]/20
      backdrop-blur-sm rounded-[20px] items-center gap-[25px] py-[4px] pl-[20px] pr-[4px]
      w-auto group buttonBorder ${!isOpen ? "cursor-pointer" : ""}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        className="flex items-center gap-[12px] cursor-pointer bg-transparent border-none"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div
            className={`absolute w-5 h-[2px] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45" : "translate-y-[-8px]"
            }`}
            style={{ backgroundColor: isDarkText ? "#262535" : "white" }}
          ></div>
          <div
            className={`absolute w-5 h-[2px] rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: isDarkText ? "#262535" : "white" }}
          ></div>
          <div
            className={`absolute w-5 h-[2px] rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-[8px]"
            }`}
            style={{ backgroundColor: isDarkText ? "#262535" : "white" }}
          ></div>
        </div>
        <span
          className={`relative z-10 text-[14px] transition-colors duration-300`}
          style={{ color: isDarkText ? "#262535" : "white" }}
        >
          {isOpen ? t("navbar.menu.close") : t("navbar.menu.open")}
        </span>
      </button>
      <div
        className={`py-[17px] px-[20px] flex items-center justify-center rounded-[16px] bg-secondary-000 relative z-10 text-[14px] font-inter text-[#5E5D70] font-medium transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-w-[2000px] gap-[12px] opacity-100"
            : "max-w-[200px] gap-0 opacity-100"
        }`}
      >
        <span
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-0 max-w-0 overflow-hidden"
              : "opacity-100 max-w-[200px]"
          }`}
        >
          {currentSection}
        </span>
        <a
          href="#quienes-somos"
          onClick={(e) => handleLinkClick(e, "quienes-somos")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.quienesSomos")}
        </a>
        <a
          href="#que-hacemos"
          onClick={(e) => handleLinkClick(e, "que-hacemos")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.queHacemos")}
        </a>
        <a
          href="#como-trabajamos"
          onClick={(e) => handleLinkClick(e, "como-trabajamos")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.comoTrabajamos")}
        </a>
        <a
          href="#clientes"
          onClick={(e) => handleLinkClick(e, "clientes")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.clientes")}
        </a>
        <a
          href="#proyectos-destacados"
          onClick={(e) => handleLinkClick(e, "proyectos-destacados")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.proyectosDestacados")}
        </a>
        <a
          href="#cultura"
          onClick={(e) => handleLinkClick(e, "cultura")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.cultura")}
        </a>
        <a
          href="#trabaja-con-nosotros"
          onClick={(e) => handleLinkClick(e, "trabaja-con-nosotros")}
          className={`whitespace-nowrap transition-all duration-500 ${
            isOpen
              ? "opacity-100 max-w-[500px]"
              : "opacity-0 max-w-0 overflow-hidden"
          }`}
        >
          {t("navbar.desktop.links.trabajaConNosotros")}
        </a>
      </div>
    </motion.nav>
    </div>
    <NavbarMobile />
    </>
  );
};

export default Navbar;
