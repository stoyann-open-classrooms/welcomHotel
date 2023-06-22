import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { Link } from 'react-router-dom'
import rating1 from "../assets/note_1.svg"
import rating2 from "../assets/note_2.svg"
import rating3 from "../assets/note_3.svg"
import rating4 from "../assets/note_4.svg"
import rating5 from "../assets/note_5.svg"

function Experience3() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience3; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <>
      <div className="container container-rating">
        

  <section id="contact-form" class="py-3">
    <div class="container">
      <h1 class="l-heading"><span class="text-primary">{t.title.Span} </span>{t.title}</h1>
      <form>
        <div class="rating-group">
     
        <button type="submit" name="rating" value="1" class="rating rating-button1">
            <img src={rating1} alt="" />
        </button>
       
     
        <button type="submit" name="rating" value="1" class="rating rating-button1">
            <img src={rating2} alt="" />
        </button>
       
     
        <button type="submit" name="rating" value="1" class="rating rating-button1">
            <img src={rating3} alt="" />
        </button>
       
     
        <button type="submit" name="rating" value="1" class="rating rating-button1">
            <img src={rating4} alt="" />
        </button>
       
     
        <button type="submit" name="rating" value="1" class="rating rating-button1">
            <img src={rating5} alt="" />
        </button>
       
       
       
      
        </div>
       
      </form>
    </div>
  </section>
    <Link to={"/experience-4"} className="btn btn-skip">
      {t.btnSkip}
    </Link>
      </div>
    </>
  )
}

export default Experience3