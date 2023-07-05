import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import avatar from "./панда.jpg";
import "./AboutPage.css"

const AboutPage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const aboutBlockTranslations = translations.aboutBlock[currentLanguage];

    return (
        <div className="about-block">
            <div className="title">
                <hr />
                <span>{aboutBlockTranslations["projectOddyssea"]}</span>
            </div>

            <div
                className="content"
                style={{
                    maxWidth: "1350px",
                    fontSize: "20px",
                    color: "#515151",
                    marginBottom: "20px",
                    marginTop: "50px",
                  
                }}
            >
                <img src={avatar} className="avatar" alt="Avatar" />
                <div className="text">
                    <p>{aboutBlockTranslations["welcomeMessage"]}</p>
                    <br />
                    <br />
                    <p>{aboutBlockTranslations["whyChooseOddyssea"]}</p>
                    <p>{aboutBlockTranslations["virtualExperience"]}</p>
                    <br />
                    <p>{aboutBlockTranslations["understandYourNeeds"]}</p>
                    <p>{aboutBlockTranslations["personalizedRoutes"]}</p>
                    <br />

                    <p>{aboutBlockTranslations["startVirtualJourney"]}</p>
                    <p>{aboutBlockTranslations["contactUs"]}</p>
                </div>
            </div>

            <div className="title">
                <hr />
                <span>{aboutBlockTranslations["projectHistory"]}</span>
            </div>
            <div
                className="content"
                style={{
                    maxWidth: "1350px",
                    fontSize: "20px",
                    color: "#515151",
                    margin: "50px auto 150px auto",
                }}
            >
                <p>{aboutBlockTranslations["inspiredByOdessa"]}</p>
                <p>{aboutBlockTranslations["researchAndConsultation"]}</p>
                <p>{aboutBlockTranslations["joinUsOnOddyssea"]}</p>
            </div>
        </div>
    );
};

export default AboutPage;
