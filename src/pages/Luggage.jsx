import React, { useContext } from "react";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Luggage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].luggage;
  const params = useParams();
  const navigate = useNavigate();

  // Récupérer l'objet JSON depuis le stockage local
  const userDataJSON = localStorage.getItem('userData');

  // Convertir l'objet JSON en objet JavaScript
  const objet = JSON.parse(userDataJSON);



  
  const handleConfirmClick = () => {
    const requestUrl =
      `https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20${params.id}%22&notification=%22Retrieve%20my%20Luggage%22&name=${objet.name}%20Doe&contact=${objet.email}`;
    
    console.log(requestUrl);
    fetch(requestUrl)
      .then((response) => {
        console.log(response);
        toast.success("Votre demande a été envoyée avec succès !");
        navigate(`/success/${params.id}`);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
        toast.error("Une erreur est survenue lors de l'envoi de votre demande.");
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
          {t.btnTxt}
        </button>
      </div>
    </>
  );
}

export default Luggage;
