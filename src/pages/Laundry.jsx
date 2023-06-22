import React, { useContext } from "react";
import Showcase from "../components/Showcase";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
function Laundry() {
  const { language } = useContext(LanguageContext);
const t = translations[language].laundry; 
  const handleConfirmClick = () => {
    const requestUrl =
      'https://demo.clinotag.com/api/clinotag/Notification?location=%22Room%20501%22&notification=%22Collect%20my%20Laundry%22&name=John%20Doe&contact=john%40mail.com'
    
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
          Confirm
        </button>
      </div>
    </>
  );
}

export default Laundry;
