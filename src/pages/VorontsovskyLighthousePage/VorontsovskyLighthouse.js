import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"

const VorontsovskyLighthouse = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const vorontsovskyLighthouseTranslations = translations.vorontsovskyLighthouse[currentLanguage];
    const general = translations.general[currentLanguage];
    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1689274756491!6m8!1m7!1sCAoSLEFGMVFpcE01RGxpVFJ1ZXp1dG5iWlcxZVBCUkM2dXdTVU9KaTY0R3BLNmZI!2m2!1d46.4964298!2d30.7592233!3f50.22633631644329!4f-9.85227658665886!5f1.2858998550331306" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{vorontsovskyLighthouseTranslations["title"]}</h1>
                    <br />
                    <p>{vorontsovskyLighthouseTranslations["aboutLighthouseStart"]}</p><br></br>
                    <p>{vorontsovskyLighthouseTranslations["origin"]}</p>
                    <p>{vorontsovskyLighthouseTranslations["lighthouseMystery"]}</p><br></br> 
                    <img className="article_images" src={vorontsovskyLighthouse}></img><br></br><br></br>
                    <p>{vorontsovskyLighthouseTranslations["lighthouseAtmosphere"]}</p>
                    <p>{vorontsovskyLighthouseTranslations["lighthouseLocalCustoms"]}</p><br></br>
                    <p>{vorontsovskyLighthouseTranslations["attraction"]}</p>
                    <p>{vorontsovskyLighthouseTranslations["aboutLighthouseEnding"]}</p>
                  
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
    )
}

export default VorontsovskyLighthouse;