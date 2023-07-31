import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

function Success() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].success; 
    const params = useParams()
  


  return (
    <section className=' container-success'>
        <h1 className='success'>{t.title}</h1>
        <Link className='btn ' to={`/${params.id}`}>{t.btn}</Link>
    </section>
  )
}

export default Success