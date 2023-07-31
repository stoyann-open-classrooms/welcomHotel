import React, { useContext } from 'react'
import photo2 from  '../assets/photo-2.jpeg'
import samantha from  '../assets/person-1.jpg'
import jen from  '../assets/person-2.jpg'
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil
   const params = useParams()
  return (
    <>
    <Header id={params.id}/>
    <section id="about-info" class="bg-light py-3">
    <div class="container">
      <div class="info-left">
        <h1 class="l-heading"><span class="text-primary">{t.titleSpan}</span> {t.title}</h1>
        <p>{t.p}</p>
      </div>
      <div class="info-right">
      <img src={photo2} alt="hotel"/>
      </div>
    </div>
  </section>

  <div class="clr"></div>

  <section id="testimonials" class="py-3">
    <div class="container">
      <h2 class="l-heading">{t.guestTitle}</h2>
      <div class="testimonial bg-primary">
        <img src={samantha} alt="Samantha"/>
        <p>{t.guest1}</p>
      </div>

      <div class="testimonial bg-primary">
          <img src={jen} alt="Jen"/>
        <p>{t.guest2}</p>
          
        </div>
    </div>
  </section>
    </>
  )
}

export default About