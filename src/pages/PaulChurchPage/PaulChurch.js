import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import pavelCathedral from "../../assets/historyImages/pavelChurch.jpeg"
import theaterGarden from "../../assets/historyImages/opera.jpg"


const PaulChurch = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const paulChurchTranslations  = translations.stPaulChurch[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return(
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689617973723!6m8!1m7!1sdWyyfGoVwD8HN-G5N9WDTw!2m2!1d46.4831030462134!2d30.72453006454172!3f246.71198730888966!4f28.13390307233128!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{paulChurchTranslations["title"]}</h1>
                    <br />
                    <p>{paulChurchTranslations["description"]}</p><br></br>
                    <p>{paulChurchTranslations["architecture"]}</p>
                    <p>{paulChurchTranslations["visitExperience"]}</p><br></br>
                    <img className="article_images" src={pavelCathedral}></img><br></br><br></br>
                    <p>{paulChurchTranslations["history"]}</p>
                    <p>{paulChurchTranslations["symbolism"]}</p><br></br>
                    <p>{paulChurchTranslations["spirituality"]}</p><br></br>
                    <p>{paulChurchTranslations["events"]}</p>
                   

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/amusement-park">
                            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["lunapark"]}</span>
                        </a>
                        <a className="photo_item" href="/vorontsov-lighthouse">
                            <img className="picture" src={vorontsovskyLighthouse} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["vorontsovLighthouse"]}</span>
                        </a>
                        <a className="photo_item" href="/theater-garden">
                            <img className="picture" src={theaterGarden} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["theaterGarden"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaulChurch;