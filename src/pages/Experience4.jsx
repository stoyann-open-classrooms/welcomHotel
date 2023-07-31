import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import translations from "../context/lang";
import { Link, useNavigate, useParams } from 'react-router-dom';
import rating1 from "../assets/note_1.svg";
import rating2 from "../assets/note_2.svg";
import rating3 from "../assets/note_3.svg";
import rating4 from "../assets/note_4.svg";
import rating5 from "../assets/note_5.svg";
import Header from "../components/Header";

function Experience4() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience4; 
  const params = useParams();
  const navigate = useNavigate();

  const handleRatingClick = (rating) => (event) => {
    event.preventDefault();

    const requestUrl = `https://demo.clinotag.com/api/clinotag/Satisfaction`;
    
    fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: `Room ${params.id}`,
        satisfaction: rating,
        name: 'grey',
        contact: 'grey@gmail.com'
      }),
    })
      .then((response) => {
        console.log(response);
        navigate(`/experience-5/${params.id}`);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
      });
  };

  return (
    <>
      <Header id={params.id}/>

      <div className="container container-rating">
        <section id="contact-form" class="py-3">
          <div class="container">
            <h1 class="l-heading"><span class="text-primary">{t.titleSpan}</span> {t.title}</h1>
            <form>
              <div class="rating-group">
                <button onClick={handleRatingClick(1)} type="submit" name="rating" value="1" class="rating rating-button1">
                    <img src={rating1} alt="" />
                </button>
                <button onClick={handleRatingClick(2)} type="submit" name="rating" value="2" class="rating rating-button1">
                    <img src={rating2} alt="" />
                </button>
                <button onClick={handleRatingClick(3)} type="submit" name="rating" value="3" class="rating rating-button1">
                    <img src={rating3} alt="" />
                </button>
                <button onClick={handleRatingClick(4)} type="submit" name="rating" value="4" class="rating rating-button1">
                    <img src={rating4} alt="" />
                </button>
                <button onClick={handleRatingClick(5)} type="submit" name="rating" value="5" class="rating rating-button1">
                    <img src={rating5} alt="" />
                </button>
              </div>
            </form>
          </div>
        </section>
        <Link to={`/experience-5/${params.id}`} className="btn btn-skip">{t.btnSkip}</Link>
      </div>
    </>
  )
}

export default Experience4;
