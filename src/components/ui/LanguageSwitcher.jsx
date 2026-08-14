import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Light background section IDs (same sections used in Navbar/NavbarMobile)
const LIGHT_SECTIONS = [
  "quienes-somos",
  "que-hacemos",
  "como-trabajamos",
  "proyectos-destacados",
];

// All sections in order
const ALL_SECTIONS = [
  "quienes-somos",
  "que-hacemos",
  "como-trabajamos",
  "clientes",
  "numbers",
  "proyectos-destacados",
  "cultura",
  "trabaja-con-nosotros",
];

const LanguageSwitcher = ({ className = "" }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage?.startsWith("en") ? "en" : "es";
  const nextLang = currentLang === "es" ? "en" : "es";
  const buttonRef = useRef(null);
  const [isDarkText, setIsDarkText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      const checkPoint = rect.top + rect.height / 2;

      let isOverLightSection = false;
      for (const sectionId of ALL_SECTIONS) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top < checkPoint && sectionRect.bottom > checkPoint) {
            isOverLightSection = LIGHT_SECTIONS.includes(sectionId);
            break;
          }
        }
      }

      setIsDarkText(isOverLightSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={(e) => {
        e.stopPropagation();
        i18n.changeLanguage(nextLang);
      }}
      aria-label={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
      className={`overflow-hidden group flex items-center justify-center gap-[6px] cursor-pointer bg-[#E3E4E5]/20
        backdrop-blur-sm rounded-full px-[14px] py-[8px] buttonBorder font-inter text-[12px] lg:text-[14px] font-medium uppercase tracking-[-0.5px] transition-all duration-300 ${className}`}
      style={{ color: isDarkText ? "#262535" : "#FFF" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className={`relative z-10 ${currentLang === "es" ? "opacity-100" : "opacity-40"}`}>ES</span>
      <span className="relative z-10 opacity-40">|</span>
      <span className={`relative z-10 ${currentLang === "en" ? "opacity-100" : "opacity-40"}`}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
