import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

import Showcase from '../components/Showcase'
import { Link } from 'react-router-dom'

function HotelExperience() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].hotelExperience; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <>   


    <Showcase titleSpan={t.titleSpan} title={t.title}/>
    <section id="experience-info" className="bg-dark">
     <p>{t.p}</p>
     <Link to={'/experience-1'} className=' btn btn-light'>{t.txtBtn}</Link>
    </section>

    </>
  )
}

export default HotelExperience