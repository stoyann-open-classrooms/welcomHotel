import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].home; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <>
      <Showcase
        titleSpan={t.titleSpan}
        title={t.title}
        text={
          t.subtitle
        }
      />
      <section id="home-info" className="bg-dark">
        <div class="info-img"></div>
        <div class="info-content">
          <h2>
            <span class="text-primary">{t.historySpan}</span>{t.historyTitle}
          </h2>
          <p>
         {t.historyP1}
          </p>
          <p>
          {t.historyP2}
          </p>
          <p>
          {t.historyP3}
          </p>

          <Link className="btn btn-light" to={"/about"}>
            {t.homeBtn}
          </Link>
        </div>
      </section>

      <section id="features">
        <Link to={"/house-keeping-prefference"} class="box bg-light">
          <i class="fas fa-hotel fa-3x"></i>
          <h3>{t.boxTitle1}</h3>
          <p>{t.boxSubtitle1}</p>
        </Link>
        <Link to={"/customer-services"} class="box bg-primary">
          <i class="fas fa-utensils fa-3x"></i>
          <h3>{t.boxTitle2}</h3>
          <p>{t.boxSubtitle2}</p>
        </Link>
        <Link to={"/hotel-experience"} class="box bg-light">
          <i class="fas fa-dumbbell fa-3x"></i>
          <h3>{t.boxTitle3}</h3>
          <p>{t.boxSubtitle3}</p>
        </Link>
      </section>
      <div class="clr"></div>
    </>
  );
}

export default Home;
