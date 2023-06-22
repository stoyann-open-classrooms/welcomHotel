import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import Showcase from "../components/Showcase";
import { Link } from "react-router-dom";

function CustomerServices() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].customerServices; 

  return (
    <>
      <Showcase titleSpan={t.titleSpan} title={t.title} />

      <section id="features">
        <Link to={"/retrieve-my-luggage"} class="box bg-primary">
          <i class="fas fa-hotel fa-3x"></i>
          <h3>{t.titleBox1}</h3>
          <p>{t.subtitleBox1}</p>
        </Link>
        <Link to={"/collecte-laundry"} class="box bg-light">
          <i class="fas fa-utensils fa-3x"></i>
          <h3>{t.titleBox2}</h3>
          <p>{t.subtitleBox2}</p>
        </Link>
        <Link to={"/need-assistance"} class="box bg-primary">
          <i class="fas fa-dumbbell fa-3x"></i>
          <h3>{t.titleBox3}</h3>
          <p>{t.subtitleBox3}</p>
        </Link>
       
        <Link to={"/prepare-my-checkout"} class="box bg-light bg-long">
          <i class="fas fa-dumbbell fa-3x"></i>
          <h3>{t.titleBox4}</h3>
          <p>{t.subtitleBox4}</p>
        </Link>
      </section>
    </>
  );
}

export default CustomerServices;
