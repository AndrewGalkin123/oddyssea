import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import "./AmusementParkPage.css";
import odessaFerrisWheel from "../../assets/cultureImages/odessa-ferris-wheel.jpg"

const AmusementParkPage = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const amusementParkTranslations = translations.amusementPark[currentLanguage];

  const textContentRef = useRef(null);

  const handleScrollButtonClick = () => {
    textContentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <iframe
        className="location"
        src="https://www.google.com/maps/embed?pb=!4v1689099325863!6m8!1m7!1sCAoSLEFGMVFpcE5ZenZqdzN2NFRtZjc0eGhMTGNQblhNMVpoNy1mOTMwOVMyYVBO!2m2!1d46.47592306618698!2d30.75545276087636!3f189.93300223778863!4f4.346399857883782!5f0.7820865974627469"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="buttons">
        <button className="scroll-button" onClick={handleScrollButtonClick}>
          Читать статью
        </button>
        <a href="/contacts">
          <button className="redirect-button">Поделиться эмоциями</button>
        </a>
      </div>
      <div
        className="content"
        style={{
          maxWidth: "1300px",
          fontSize: "20px",
          color: "#515151",
          marginBottom: "20px",
          marginTop: "50px",
          display: "flex",
        }}
      >
        <div className="textContent" style={{ maxWidth: "900px" }} ref={textContentRef}>
          <br></br>
          <br></br>
          <h1>{amusementParkTranslations["title"]}</h1>
          <br />
          <p>{amusementParkTranslations["aboutParkStart"]}</p><br></br>
          <p>{amusementParkTranslations["parkLocationInfo"]}</p>
          <p>{amusementParkTranslations["parkOffers"]}</p><br></br>
          <p>{amusementParkTranslations["parkAtmosphere"]}</p>
          <p>{amusementParkTranslations["aboutOddyssea"]}</p><br></br>
          <p>{amusementParkTranslations["aboutParkEnding"]}</p>
        </div>
        <div className="otherContent">
            <p className="title">{amusementParkTranslations["otherContentTitle"]}</p>
            <div
            className="photo_item_container"
            style={{ position: "relative", marginBottom: "100px" }}
          >
             <a className="photo_item" href="/amusement-park">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item" href="/amusement-park">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkPage;
