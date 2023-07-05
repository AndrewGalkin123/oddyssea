import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import odessaFlag from "./odessaFlag.png";
import "./AboutOdessa.css";

const AboutOdessa = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const aboutOdessaTranslations = translations.aboutOdessa[currentLanguage];

  return (
    <div>
      <div className="title" style={{ top: "90px" }}>
        <hr />
        <span>{aboutOdessaTranslations["informationAboutOdessa"]}</span>
      </div>
      <div
        className="content"
        style={{
          maxWidth: "1400px",
          fontSize: "20px",
          color: "#515151",
          marginBottom: "120px",
          marginTop: "50px",
        }}
      >
        <div className="about_odessa_block">
          <img className="odessa_flag" src={odessaFlag} alt="odessaFlag" />
          <br />
          <div className="text">
            <p>{aboutOdessaTranslations["welcomeToOdessa"]}</p>
            <br />
            <p>{aboutOdessaTranslations["odessaHistory"]}</p>
            <br />
            <p>{aboutOdessaTranslations["websiteDescription"]}</p>
            <br />
            <p>{aboutOdessaTranslations["artAndCulture"]}</p>
            <br />
            <p>{aboutOdessaTranslations["gastronomicDelights"]}</p>
            <p>{aboutOdessaTranslations["promenadeAlongTheSeaside"]}</p>
            <br />
            <p>{aboutOdessaTranslations["oddysseaGuide"]}</p>
            <br />
            <p>{aboutOdessaTranslations["welcomeToOdessaInspiration"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOdessa;
