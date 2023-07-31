import React, { useContext } from "react";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Laundry() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].laundry; 
  const params = useParams();
  const navigate = useNavigate();

  // Récupérer l'objet JSON depuis le stockage local
  const userDataJSON = localStorage.getItem('userData');

  // Convertir l'objet JSON en objet JavaScript
  const objet = JSON.parse(userDataJSON);

  // Utiliser l'objet
  console.log(objet.name);  // Affiche 'valeur1'
  console.log(objet.email);  // Affiche 'valeur2'

  const handleConfirmClick = () => {
    // Vérifiez si l'utilisateur a un nom et un e-mail
    if (!objet.name || !objet.email) {
      // Affiche un message d'erreur et arrête l'exécution
      console.error("User name or email is missing");
      return;
    }

    const requestUrl =
      `https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20${params.id}%22&notification=%22Collect%20my%20Laundry%22&name=${objet.name}%20Doe&contact=${objet.email}`;
   
    console.log(requestUrl);

    fetch(requestUrl)
      .then((response) => {
        console.log(response);
        navigate(`/success/${params.id}`);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
      });
  };

  return (
    <>
      <Header id={params.id}/>
      <Showcase titleSpan={t.titleSpan} title={t.title} />

      <div className="container container-confirm">
        <p className="big-texte">
          {t.txt}
        </p>

        <button className="btn btn-skip" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
    </>
  );
}

export default Laundry;
