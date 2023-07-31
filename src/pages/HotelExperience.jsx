import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

import Showcase from '../components/Showcase'
import { Link, useParams } from 'react-router-dom'
import Header from "../components/Header";
function HotelExperience() {
  const params = useParams()
  const { language } = useContext(LanguageContext);
  const t = translations[language].hotelExperience; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil

  return (
    <>   

<Header id={params.id}/>
    <Showcase titleSpan={t.titleSpan} title={t.title}/>
    <section id="experience-info" className="bg-dark">
     <p>{t.p}</p>
     <Link to={`/experience-2/${params.id}`} className=' btn btn-light'>{t.txtBtn}</Link>
    </section>

    </>
  )
}

export default HotelExperience