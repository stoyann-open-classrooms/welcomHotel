import React, { useContext } from 'react'
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].footer; // Utilisez la clé "header" pour accéder aux traductions spécifiques à l'en-tête

  return (
    <footer id="main-footer">
    <p>{t.text}</p>
  </footer>
  )
}

export default Footer