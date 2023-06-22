import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import Showcase from "../components/Showcase";

function Assistance() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].assistance; 
  const handleConfirmClick = () => {
    const requestUrl =
      'https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20501%22&notification=%22Need%20Assistance%22&name=John%20Doe&contact=john%40mail.com'
    
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

export default Assistance;
