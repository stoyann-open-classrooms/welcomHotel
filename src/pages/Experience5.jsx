import React, { useContext, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header";

function Experience5() {
  const params = useParams();
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience5;
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const requestUrl = `https://demo.clinotag.com/api/clinotag/Satisfaction`;
    
    console.log('User input:', userInput);

    fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: `Room ${params.id}`,
        name: 'grey',
        contact: 'grey@gmail.com',
        feedback: userInput
      }),
    })
      .then((response) => {
        console.log(response);
        // Show success toast
        toast.success('Merci pour vos commentaires !');
        // Wait 3 seconds before redirecting
        setTimeout(() => {
          navigate(`/${params.id}`);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
        // Show error toast
        toast.error('Une erreur s\'est produite. Veuillez réessayer.');
      });
  };

  return (
    <>
      <Header id={params.id}/>
      <section id="contact-form" class="py-3">
        <div class="container container-rating">
          <h1 class="l-heading"><span class="text-primary">{t.titleSpan}</span>{t.title}</h1>
          <p>{t.subtitle}</p>
          <form onSubmit={handleFormSubmit}>
            <div class="form-group">
              <textarea type="text" name="name" id="name" value={userInput} onChange={handleInputChange}/>
            </div>
            <button type="submit" class="btn">{t.submit}</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default Experience5;
