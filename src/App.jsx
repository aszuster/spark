import { useTranslation } from "react-i18next";
import './App.css'

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{t("welcome")}</h1>
      <p>{t("about")}</p>

      <h3>{t("change_language")}:</h3>
      <button onClick={() => switchLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => switchLanguage("es")}>🇪🇸 Español</button>
    </div>
  );
}

export default App
