import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useCookies } from "react-cookie";
import Header from "../components/Header";

function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].home; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil
  const params = useParams();
  // const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  // // Pour définir le cookie avec le nom et l'e-mail
  // const userData = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  // };

  // setCookie('userData', JSON.stringify(userData));

  // console.log(cookies);

  return (
    <>
      <Header id={params.id} />
      <Showcase
        titleSpan={t.titleSpan}
        title={t.title}
        room={t.room}
        roomNumber={params.id}
        text={t.subtitle}
      />
      <Link to={`https://welcom.nc/experience-1/${params.id}`} type="submit" className="btn btn-info btn-skip">
        Add Your Contact Information
      </Link>
      <section id="home-info" className="bg-dark">
        <div className="info-img"></div>
        <div className="info-content">
          <h2>
            <span className="text-primary">{t.historySpan}</span>
            {t.historyTitle}
          </h2>
          <p>{t.historyP1}</p>
          <p>{t.historyP2}</p>
          <p>{t.historyP3}</p>

          <Link className="btn btn-light" to={`/about/${params.id}`}>
            {t.homeBtn}
          </Link>
        </div>
      </section>

      <section id="features">
        <Link
          to={`/house-keeping-prefference/${params.id}`}
          class="box bg-light"
        >
          <i className="fas fa-hotel fa-3x"></i>
          <h3>{t.boxTitle1}</h3>
          <p>{t.boxSubtitle1}</p>
        </Link>
        <Link to={`/customer-services/${params.id}`} class="box bg-primary">
          <i className="fas fa-utensils fa-3x"></i>
          <h3>{t.boxTitle2}</h3>
          <p>{t.boxSubtitle2}</p>
        </Link>
        <Link to={`/hotel-experience/${params.id}`} class="box bg-light">
          <i className="fas fa-dumbbell fa-3x"></i>
          <h3>{t.boxTitle3}</h3>
          <p>{t.boxSubtitle3}</p>
        </Link>
      </section>
      <div className="clr"></div>
    </>
  );
}

export default Home;
