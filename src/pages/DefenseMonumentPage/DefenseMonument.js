import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import cityPark from "../../assets/historyImages/4085e7ab-0b49-4bf2-bc2e-88ada4b4d628.jpeg"
import lanzheron from "../../assets/historyImages/8d51b4a0-110c-446f-9130-1879e9ce792c.jpeg";
import dumskaSquare from  "../../assets/historyImages/02ccb430-bbcd-4747-9d45-f9447898ca5a.jpeg"

const DefenseMonument = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const defenseMonumentTranslations = translations.defenseMonument[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690995834683!6m8!1m7!1sCAoSLEFGMVFpcE1LYnkwYXZRN2ZnYXdMcHBRbklXbVFCZGFjXzNYT01UNExvSVdP!2m2!1d46.4861162!2d30.7439142!3f359.10426111741776!4f14.514008101496373!5f0.6334418230594777" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="buttons">
                <button className="scroll-button" onClick={handleScrollButtonClick}>{general["readTextButton"]}</button>
                <a href="/contacts">
                    <button className="redirect-button">{general["shareEmotionsButton"]}</button>
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
                    <h1>{defenseMonumentTranslations["title"]}</h1><br></br>
                    <p>{defenseMonumentTranslations["description"]}</p><br></br>
                    <p>{defenseMonumentTranslations["history"]}</p><br></br>
                    <p>{defenseMonumentTranslations["monument"]}</p><br></br>
                   
                    <p>{defenseMonumentTranslations["defense"]}</p>
                    <p>{defenseMonumentTranslations["importance"]}</p><br></br>
                   
                    <p>{defenseMonumentTranslations["popularity"]}</p><br></br>
                    <p>{defenseMonumentTranslations["symbolism"]}</p><br></br>


                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                     
                        <a className="photo_item" href="/city-park">
                            <img className="picture" src={cityPark} alt="cityPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["cityPark"]}</span>
                        </a>
                        <a className="photo_item" href="/lanzheron">
                            <img className="picture" src={lanzheron} alt="lanzheron" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["lanzheron"]}</span>
                        </a>
                        <a className="photo_item" href="/dumska-square">
                            <img className="picture" src={dumskaSquare} alt="dumskaSquare" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["dumskaSquare"]}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefenseMonument