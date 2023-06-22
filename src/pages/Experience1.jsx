import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { Link } from "react-router-dom";

function Experience1() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience1; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <>
      <div className="container">
        <section className="questionnaire-container">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>
        </section>

        <section id="contact-form" class="py-3">
          <div class="container">
            <h1 class="l-heading">
              <span class="text-primary">{t.titleSpan}</span> {t.title}
            </h1>
            <p>{t.subtittle}</p>
            <form>
              <div class="form-group">
                <label for="name">{t.label1}</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="form-group">
                <label for="email">{t.label2}</label>
                <input type="email" name="email" id="email" />
              </div>
              <button type="submit" class="btn">
                 {t.btnSubmit}
              </button>
            </form>
          </div>
        </section>
        <Link to={"/experience-2"} className="btn btn-skip">
         {t.btnSkip}
        </Link>
      </div>
    </>
  );
}

export default Experience1;
