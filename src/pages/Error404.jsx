import React, { useContext } from 'react'
import { Link, useParams} from 'react-router-dom'
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";

function Error404() {
  const params = useParams()
  const { language } = useContext(LanguageContext);
  const t = translations[language].error;
  
  return (
    <section className=' container-success'>
        <h1 className='success'>{t.title}</h1>
        <h2 className='success'>{t.subtitle}</h2>
        <Link className='btn ' to={`/${params.id}`}>{t.btn}</Link>
    </section>
  )
}

export default Error404