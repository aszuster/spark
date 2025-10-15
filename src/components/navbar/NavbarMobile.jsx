import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Menu from "../../svg/menu";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [currentSection, setCurrentSection] = useState("Spark");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Map section IDs to display names
  const sectionNames = {
    "quienes-somos": "Quiénes somos",
    "que-hacemos": "Qué hacemos",
    "como-trabajamos": "Cómo trabajamos",
    clientes: "Clientes",
    "proyectos-destacados": "Proyectos destacados",
    cultura: "Cultura",
    "trabaja-con-nosotros": "Trabajá con nosotros",
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
        currentSectionId ? sectionNames[currentSectionId] : "Spark"
      );
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="flex lg:hidden fixed top-[28px] right-[24px] z-50 flex-col items-end">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={handleNavClick}
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#E3E4E5]/20 
        backdrop-blur-sm rounded-[25px] items-center gap-[25px] py-[20px] pl-[30px] pr-[30px] 
        w-auto group buttonBorder ${!isOpen ? "cursor-pointer" : ""} relative`}
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
            {isOpen ? "Cerrar" : "Menú"}
          </span>
        </button>
      </motion.nav>
      
      {/* Menú desplegable */}
      <div 
        className={`mt-[12px] bg-[linear-gradient(268deg,rgba(227,228,229,0.60)_4.08%,rgba(227,228,229,0.12)_58.6%)] transition-all duration-300 rounded-[16px] p-[4px] ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-[24px] items-center justify-center text-[14px] font-inter text-[#262535] font-medium bg-[#E5E5E5] p-[20px] rounded-[16px]">
          <a href="#quienes-somos" onClick={(e) => handleLinkClick(e, "quienes-somos")} className="hover:text-[#FF6B00] transition-colors">Quiénes somos</a>
          <a href="#que-hacemos" onClick={(e) => handleLinkClick(e, "que-hacemos")} className="hover:text-[#FF6B00] transition-colors">Qué hacemos</a>
          <a href="#como-trabajamos" onClick={(e) => handleLinkClick(e, "como-trabajamos")} className="hover:text-[#FF6B00] transition-colors">Cómo trabajamos</a>
          <a href="#clientes" onClick={(e) => handleLinkClick(e, "clientes")} className="hover:text-[#FF6B00] transition-colors">Clientes</a>
          <a href="#proyectos-destacados" onClick={(e) => handleLinkClick(e, "proyectos-destacados")} className="hover:text-[#FF6B00] transition-colors">Proyectos destacados</a>
          <a href="#cultura" onClick={(e) => handleLinkClick(e, "cultura")} className="hover:text-[#FF6B00] transition-colors">Cultura</a>
          <a href="#trabaja-con-nosotros" onClick={(e) => handleLinkClick(e, "trabaja-con-nosotros")} className="hover:text-[#FF6B00] transition-colors">Trabajá con nosotros</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
