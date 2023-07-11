import React from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import { useContext } from "react";
import "./AmusementParkPage.css"

const AmusementParkPage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const amusementParkTranslations = translations.amusementPark[currentLanguage];

    return (
        <div>
            <iframe style={{ width: "100%", height: "800px", marginTop: "60px" }}
                src="https://www.google.com/maps/embed?pb=!4v1689099325863!6m8!1m7!1sCAoSLEFGMVFpcE5ZenZqdzN2NFRtZjc0eGhMTGNQblhNMVpoNy1mOTMwOVMyYVBO!2m2!1d46.47592306618698!2d30.75545276087636!3f189.93300223778863!4f4.346399857883782!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
            <div
                className="content"
                style={{
                    maxWidth: "1300px",
                    fontSize: "20px",
                    color: "#515151",
                    marginBottom: "20px",
                    marginTop: "10px",

                }}
            >
                
                 <button className="toInfoButton" style={{marginRight: "430px"}}>Читать статью</button>
                 <button className="photos_link">Поделиться эмоциями</button>
                <div className="textContent" style={{maxWidth: "900px"}}>
                    <br></br><br></br>
                    <h1>{amusementParkTranslations["title"]}</h1><br />
                    <p>{amusementParkTranslations["aboutParkStart"]}</p>
                </div>
                <div className="otherContent" style={{maxWidth: "400px", border: "2px solid grey", width: "400px", height: "1000px"}}>

                </div>
            </div>
        </div>
    )
}

export default AmusementParkPage;