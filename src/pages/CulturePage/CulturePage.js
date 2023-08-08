import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext"
import translations from "../../translations.json"
import "./CulturePage.css"


const CulturePage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const general = translations.general[currentLanguage];

    const culturalKeys = [
        "historicalheritage",
        "architecture",
        "literaryHeritage",
        "musicAndFestivals",
        "cuisineAndGastronomy",
        "languagesAndDialects",
        "folkTraditions",
        "marine",
        "contemporaryArts",
        "localLifestyles",
        "culturalProjects",
        "multinationalInfluence",
        "touristAttraction",
        "theatersAndArt",
        "museumsAndExhibitions"
    ];

    return (
        <div>
            <div className="list">
                <div className="list-container">
                    {culturalKeys.map(key => (
                        <div className="list-item" key={key}>
                            {general[key]}
                        </div>
                    ))}
                </div>
            </div>
            <div className="content" style={{
                maxWidth: "1600px",
                fontSize: "20px",
                color: "#515151",
                marginBottom: "30px",
                marginTop: "120px"
              
            }}>
                <h1>{general["historicalheritageFull"]}</h1>
                <p>{general["historicalheritageFull"]}</p>
            </div>
        </div>
    );
}

export default CulturePage;

