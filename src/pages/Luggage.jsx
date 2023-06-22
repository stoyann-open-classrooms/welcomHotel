import React, { useContext } from "react";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
function Luggage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].luggage; // Utilisez la clé "home" pour accéder aux traductions spécifiques à la page d'accueil
  const handleConfirmClick = () => {
    const requestUrl =
      'https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20501%22&notification=%22Retrieve%20my%20Luggage%22&name=John%20Doe&contact=john%40mail.com'
    
      console.log(requestUrl);
    fetch(requestUrl)
      .then((response) => {
        // Handle the response here
        console.log(response);
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error sending request:", error);
      });
  };
  return (
    <>
      <Showcase titleSpan={t.titleSpan} title={t.title} />

      <div class="container container-confirm">
        <p className="big-texte">
          {t.txt}
        </p>

        <button className="btn btn-skip" onClick={handleConfirmClick}>
        {t.btnTxt}
        </button>
      </div>
    </>
  );
}

export default Luggage;
