import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

function ThanksForYourSharing() {

  const params = useParams()

  return (
    <>
    <Header id={params.id}/>
    <div class="container container-rating">
      <h1 class="l-heading">
        <span class="text-primary">Thank You </span> for Completing the
        Questionnaire !
      </h1>
      <div className="text-thank">

      <p>
        We would like to express our heartfelt gratitude for taking the time to
        complete our questionnaire and share your feedback on your recent stay
        at our hotel. Your input is extremely valuable to us as it helps us
        continuously improve our services.
      </p>
      <p>
        Each rating and review you provided helps us better understand your
        expectations and allows us to focus on areas that require attention.
        Your detailed comments enable us to implement corrective measures, make
        enhancements, and create an even more enjoyable experience for our
        future guests.
      </p>
      <p>
        We also appreciate your suggestions and ideas, as we strongly believe in
        actively listening to our customers to maintain a high level of
        satisfaction.
      </p>
      <p>
        Once again, we would like to extend our thanks for your participation
        and for contributing to the ongoing improvement of our hotel. We hope to
        have the opportunity to welcome you back soon and provide you with an
        even more remarkable experience.
      </p>
      <h5>The WELCOM Hotel Team</h5>
      </div>
      <Link className="btn btn-skip" to={'/'}>Back</Link>
    </div>
    </>
  );
}

export default ThanksForYourSharing;
