import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"
import operaImage1 from "../../assets/historyImages/photo_5426844693968308676_x.jpg"
import operaImage2 from "../../assets/historyImages/operaImage.jpg"
import operaImage3 from "../../assets/historyImages/photo_5413583922312366079_y.jpg"

const Opera = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const operaTranslations = translations.odesaOpera[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1689706389624!6m8!1m7!1sCAoSLEFGMVFpcE03SkthcVZaMTJocDVRZ2kweU1oN0p1OVA3a2RNdC1rSkJ6aTJ6!2m2!1d46.48472166635943!2d30.74070062488317!3f31.44534860168092!4f5.419009564507775!5f1.369745924436096" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{operaTranslations["title"]}</h1>
                    <br />
                    <p>{operaTranslations["description"]}</p><br></br>
                    <p>{operaTranslations["history"]}</p><br></br>
                    <img className="article_images" src={operaImage1}></img>
                    <p>{operaTranslations["architecturalStyle"]}</p><br></br>
                    <p>{operaTranslations["performances"]}</p>
                    <p>{operaTranslations["famousPerformances"]}</p><br></br>
                    <img className="article_images" src={operaImage2}></img><br></br><br></br>
                    <p>{operaTranslations["culturalVenue"]}</p><br></br>
                    <p>{operaTranslations["experience"]}</p><br></br>
                    <img className="article_images" src={operaImage3}></img><br></br><br></br>
                    <p>{operaTranslations["tickets"]}</p>
                    <p>{operaTranslations["aboutOperaEnding"]}</p>

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
                        <a className="photo_item" href="/paul-church">
                            <img className="picture" src={pavelCathedral} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["stPaulChurch"]}</span>
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

export default Opera;