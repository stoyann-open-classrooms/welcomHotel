import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

function Header({id}) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language].header; // Utilisez la clé "header" pour accéder aux traductions spécifiques à l'en-tête

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage); // Appel de la fonction changeLanguage pour mettre à jour la langue
  };

  return (
    <header>
      <nav id="navbar">
        <div className="container">
          <h1 className="logo">{t.title}</h1>
          <ul>
            <li>
              <Link to={`/${id}`}>{t.link1}</Link>
            </li>
            <li>
              <Link to={`/restaurant/${id}`}>{t.link2}</Link>
            </li>
            <li>
              <Link to={`/about/${id}`}>{t.link3}</Link>
            </li>
            <li>
              <select
                className="custom-select"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">Anglais</option>
                <option value="fr">Français</option>
                <option value="de">Allemand</option>
                <option value="ITY">Italien</option>
                <option value="th">ไทย</option>
                <option value="jp">日本語</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
