import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Restaurant() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].restaurant; 
  const params = useParams()
  return (
    <>
    <Header id={params.id}/>
      <div id="showcase-restaurant">
    <div class="container">
      <div class="showcase-content">
        <h1><span class="text-primary">{t.titleSpan}</span>{t.title}</h1>
        <p class="lead"></p>
        <a class="btn" href="about.html">{t.btnTxt}</a>
      </div>
    </div>
  </div>
  <section class="menu-container">
    <div class="menu">
        <h3>{t.menuTitle1}</h3>
        <ul>
            <li>{t.menu1A}</li>
            <li>{t.menu1B}</li>
            <li>{t.menu1C}</li>
        </ul>
    </div>
    <div class="menu">
    <h3>{t.menuTitle2}</h3>
        <ul>
            <li>{t.menu2A}</li>
            <li>{t.menu2B}</li>
            <li>{t.menu2C}</li>
        </ul>
    </div>
    <div class="menu">
    <h3>{t.menuTitle3}</h3>
        <ul>
            <li>{t.menu3A}</li>
            <li>{t.menu3B}</li>
            <li>{t.menu3C}</li>
        </ul>
    </div>
</section>
    </>
  )
}

export default Restaurant