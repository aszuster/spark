import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Lenis from "lenis";
import './App.css'

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="text-grey-10">{t("welcome")}</h1>
      <p>{t("about")}</p>

      <h3>{t("change_language")}:</h3>
      <button onClick={() => switchLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => switchLanguage("es")}>🇪🇸 Español</button>

      {/* Ejemplo de uso de fuentes */}
      <div style={{ marginTop: "2rem", textAlign: "left" }}>
        <h2>Ejemplo de fuentes</h2>
        
        <div style={{ marginBottom: "2rem" }}>
          <h3>Fuente por defecto (Inter):</h3>
          <p>Este es un párrafo usando la fuente por defecto Inter para el texto del cuerpo.</p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3>Fuente de encabezados (Inter):</h3>
          <h4>Este es un H4 usando Inter</h4>
          <h5>Este es un H5 usando Inter</h5>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "'Muli', sans-serif", fontWeight: 600 }}>Fuente personalizada (Muli):</h3>
          <p style={{ fontFamily: "'Muli', sans-serif" }}>
            Este texto usa la fuente Muli que tienes descargada.
          </p>
          <p style={{ fontFamily: "'Muli', sans-serif", fontWeight: 300 }}>
            Texto con peso ligero (300)
          </p>
          <p style={{ fontFamily: "'Muli', sans-serif", fontWeight: 500 }}>
            Texto con peso medio (500)
          </p>
          <p style={{ fontFamily: "'Muli', sans-serif", fontWeight: 700 }}>
            Texto con peso bold (700)
          </p>
          <p className="font-muli" style={{ color: 'red' }}>
            Texto con clase font-muli (debería ser Muli)
          </p>
          <p className="test-muli" style={{ color: 'blue' }}>
            Texto con clase test-muli (debería ser Muli)
          </p>
        </div>
      </div>

      {/* Contenido de ejemplo para probar el smooth scroll */}
      <div style={{ height: "200vh", marginTop: "2rem" }}>
        <h2>Contenido de ejemplo para probar smooth scroll</h2>
        <p>Haz scroll para ver el efecto suave de Lenis</p>
        <div style={{ height: "100vh", background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem" }}>
          Sección 1
        </div>
        <div style={{ height: "100vh", background: "linear-gradient(45deg, #45b7d1, #96ceb4)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem" }}>
          Sección 2
        </div>
      </div>
    </div>
  );
}

export default App
