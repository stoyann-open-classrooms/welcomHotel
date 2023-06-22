import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { Link } from 'react-router-dom'

function Experience5() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience5; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <section id="contact-form" class="py-3">
    <div class="container container-rating">
      <h1 class="l-heading"><span class="text-primary">{t.titleSpan}</span>{t.title}</h1>
      <p>{t.subtitle}</p>
      <form>
        <div class="form-group">
       
          <textarea type="text" name="name" id="name"/>
        </div>
      
        {/* <button type="submit" class="btn">Submit</button> */}
        <Link className='btn' to={"/thanks-for-sharring"}>{t.submit}</Link>
      </form>
    </div>
  </section>
  )
}

export default Experience5