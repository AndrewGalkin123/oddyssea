import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"

const TheaterGarden = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const theaterGardenTranslations = translations.theaterGarden[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1689361520043!6m8!1m7!1sCAoSLEFGMVFpcE5MbllpUm1mZVJNVEpPOEh6UW1NN1hhYk8xWGMxdTAyMnhXZllU!2m2!1d46.4853454!2d30.7419042!3f102.51818097618853!4f10.794680147358719!5f0.4000000000000002" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{theaterGardenTranslations["title"]}</h1>
                    <br />
                    <p>{theaterGardenTranslations["aboutGardenStart"]}</p><br></br>
                    <p>{theaterGardenTranslations["history"]}</p>
                    <p>{theaterGardenTranslations["lighthouseMystery"]}</p><br></br>
                    <img className="article_images" src={theaterGarden}></img><br></br><br></br>
                    <p>{theaterGardenTranslations["gardenArchitecture"]}</p>
                    <p>{theaterGardenTranslations["gardenExperience"]}</p><br></br>
                    <p>{theaterGardenTranslations["gardenEntertainment"]}</p>
                    <p>{theaterGardenTranslations["aboutGardenEnding"]}</p><br></br>
                    <p>{theaterGardenTranslations["theaterGardenEnding"]}</p>

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
                        <a className="photo_item" href="/amusement-park">
                            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">Одесса, Черноморск</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheaterGarden;