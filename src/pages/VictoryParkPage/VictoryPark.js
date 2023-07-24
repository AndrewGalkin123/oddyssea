import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import pushkinMonument from "../../assets/historyImages/fb69fd5d-6c77-4c18-9deb-7d64479ddd3f.jpeg";
import passage from "../../assets/historyImages/f8493e1f-aefc-4e00-8e2c-35e1b8a8f219.jpeg"
import victoryPark1 from "../../assets/historyImages/victory-park-1.jpeg"
import victoryPark2 from "../../assets/historyImages/victory-park-2.jpeg"
const VictoryPark = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const victoryParkTranslations = translations.victoryPark[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1690213356281!6m8!1m7!1sCAoSLEFGMVFpcFA1WGMtQkNuQ0FrUF9OMkhmYTJEWHVaTG1YM2toaGNzZ3p3YWF5!2m2!1d46.4422200990323!2d30.7562597413672!3f291.2919769564392!4f2.968635960025992!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{victoryParkTranslations["title"]}</h1>  <br />
                    <p>{victoryParkTranslations["description"]}</p><br></br>
                    <p>{victoryParkTranslations["parkSize"]}</p><br></br>
                    <p>{victoryParkTranslations["waterElements"]}</p>
                    <img className="article_images" alt="victory-park" src={victoryPark1}></img>
                    <p>{victoryParkTranslations["diverseFlora"]}</p><br></br>
                    <p>{victoryParkTranslations["memorialPark"]}</p><br></br>
                    <p>{victoryParkTranslations["events"]}</p><br></br>
                    <p>{victoryParkTranslations["recreationAreas"]}</p>
                    <img className="article_images" alt="victory-park" src={victoryPark2}></img>
                    <p>{victoryParkTranslations["experienceNature"]}</p>
                    <p>{victoryParkTranslations["beautySymbol"]}</p>

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/pushkin-monument">
                            <img className="picture" src={pushkinMonument} alt="pushkinMonument" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["pushkinMonument"]}</span>
                        </a>
                        <a className="photo_item" href="/amusement-park">
                            <img className="picture" src={odessaFerrisWheel} alt="lunapark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["lunapark"]}</span>
                        </a>
                        <a className="photo_item" href="/passage">
                            <img className="picture" src={passage} alt="passage" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["odessaPassage"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VictoryPark;