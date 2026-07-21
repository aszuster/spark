import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import "./App.css";
import Hero from "./components/Hero/Hero";
import QuienesSomos from "./components/quienes-somos/QuienesSomos";
import QueHacemos from "./components/que-hacemos/QueHacemos";
import ComoTrabajamos from "./components/como-trabajamos/ComoTrabajamos";
import Numbers from "./components/numbers/Numbers";
import Clientes from "./components/clientes/Clientes";
import ProyectosDestacados from "./components/proyectos-destacados/ProyectosDestacados";
import Cultura from "./components/cultura/Cultura";
import Banner from "./components/banner/Banner";
import Unite from "./components/unite/Unite";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { t, i18n } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowNavbar(true);
  }, []);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Configurar Lenis para smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      // Configuración mejorada para compatibilidad con sticky
      // syncTouch: true,
      // touchInertiaMultiplier: 35,
      // Deshabilitar Lenis en elementos sticky
      // prevent: (node) => node.classList.contains('sticky'),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Manejar clicks en enlaces de anclaje para smooth scroll
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Hero onAnimationComplete={handleAnimationComplete} />
      <QuienesSomos />
      <QueHacemos />
      <ComoTrabajamos />
      <ProyectosDestacados />
      <Numbers />
      <Clientes />

      <Cultura />
      <Unite />
      <Footer />
      {/* <h3>{t("change_language")}:</h3>
      <button onClick={() => switchLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => switchLanguage("es")}>🇪🇸 Español</button> */}
    </div>
  );
}

export default App;
