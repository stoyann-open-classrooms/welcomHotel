import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import Showcase from "../components/Showcase";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Assistance() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].assistance; 
  const params = useParams()
  const navigate = useNavigate()

  // Récupérer l'objet JSON depuis le stockage local
  const userDataJSON = localStorage.getItem('userData');

  // Convertir l'objet JSON en objet JavaScript
  const objet = JSON.parse(userDataJSON);
  
  // Utiliser l'objet
  console.log(objet.name);  // Affiche 'valeur1'
  console.log(objet.email);  // Affiche 'valeur2'


  const handleConfirmClick = () => {
    const requestUrl =
      `https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20${params.id}%22&notification=%22Need%20Assistance%22&name=${objet.name}%20Doe&contact=${objet.email}`
    
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
