import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header";

function Experience1() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience1;
  const params = useParams();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;

    const userData = { name, email };
    const userDataJSON = JSON.stringify(userData);

    localStorage.setItem("userData", userDataJSON);

    // Show success toast
    toast.success('Les données de contact ont été enregistrées avec succès !');

    // Wait for 3 seconds before redirecting
    setTimeout(() => {
      navigate(`/${params.id}`);
      // Refresh the page
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <Header id={params.id} />
      <div className="container">
        <section id="contact-form" className="py-3">
          <div className="container">
            <h1 className="l-heading">
              <span className="text-primary">{t.titleSpan}</span> {t.title}
            </h1>
            <p>{t.subtittle}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.label1}</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.label2}</label>
                <input type="email" name="email" id="email" required />
              </div>
              <button type="submit" className="btn btn-skip">
                {t.btnSubmit}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience1;
