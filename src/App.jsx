import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Lenis from "lenis";
import './App.css'
import Hero from "./components/Hero/Hero";
import QuienesSomos from "./components/quienes-somos/QuienesSomos";
import QueHacemos from "./components/que-hacemos/QueHacemos";

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Configurar Lenis para smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
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

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <QuienesSomos />
      <QueHacemos />
      <div className="h-[100vh]"></div>
            {/* <h3>{t("change_language")}:</h3>
      <button onClick={() => switchLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => switchLanguage("es")}>🇪🇸 Español</button> */}
  
    </div>
  );
}

export default App
