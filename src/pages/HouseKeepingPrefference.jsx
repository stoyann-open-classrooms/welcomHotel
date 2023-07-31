import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function HouseKeepingPrefference() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].houseKeepingPrefference; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil
   const params = useParams()
   const navigate = useNavigate()
   
// Récupérer l'objet JSON depuis le stockage local
const userDataJSON = localStorage.getItem('userData');

// Convertir l'objet JSON en objet JavaScript
const objet = JSON.parse(userDataJSON);

// Utiliser l'objet
console.log(objet.name);  // Affiche 'valeur1'
console.log(objet.email);  // Affiche 'valeur2'
  
  const handleConfirmDisturbClick = () => {
    const requestUrl =
      `https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20${params.id}%22&notification=%22Do%20Not%20Disturb%22&name=${objet.name}%20Doe&contact=${objet.email}%40mail.com`
    
      console.log(requestUrl);
    fetch(requestUrl)
      .then((response) => {
        // Handle the response here
        console.log(response);
        navigate(`/success/${params.id}`)
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error sending request:", error);
      });
  };




  const handleConfirmMakeUpClick = () => {
    const requestUrl =
      `https://demo.clinotag.com/api/clinotag/Notification?location=%22Room${params.id}%22&notification=%22Make%20Up%20Room%22&name=John%20Doe&contact=john%40mail.com`
    
      console.log(requestUrl);
    fetch(requestUrl)
      .then((response) => {
        // Handle the response here
        console.log(response);
        navigate(`/success/${params.id}`)
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error sending request:", error);
      });
  };
  return (
    <>
    <Header id={params.id}/>
      <div id="showcase-house">
        <div class="container">
          <div class="showcase-content">
            <h1>
              <span class="text-primary">{t.titleSpan}</span>{t.title}
            </h1>
            <p class="lead">
             {t.p}
            </p>
          </div>
        </div>
      </div>
      <section id="house-info" className="bg-dark">
        <div class="info-content2">
          <h2>
          <span class="text-primary">{t.titleSpan2}</span>{t.title2}
          </h2>
          <p>
          {t.subtitle2}
          </p>
          <a onClick={handleConfirmDisturbClick} class="btn btn-light">
          {t.txtBtn}
          </a>
        </div>
        <div class="info-content">
          <h2>
            <span class="text-primary">{t.titleSpan1}</span>{t.title1}
          </h2>
          <p>
            {t.subtitle1}
          </p>
          <a onClick={handleConfirmMakeUpClick}  class="btn btn-light">
           {t.txtBtn}
          </a>
        </div>
      </section>
    </>
  );
}

export default HouseKeepingPrefference;
