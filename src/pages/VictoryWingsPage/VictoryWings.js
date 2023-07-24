import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import opera from "../../assets/historyImages/d2646277-0a23-4b43-bda9-ddd5dfaa5bc9.jpeg"
import theaterGarden from "../../assets/historyImages/opera.jpg"
import vorontsovPalace from "../../assets/historyImages/36673ce0-abb7-4a65-a7ac-8200a41af649.jpeg"

const VictoryWings = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const victoryWingsTranslations = translations.victoryWings[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690210149086!6m8!1m7!1sCAoSLEFGMVFpcFBQUGgxUUlLNk5ObHJnUGZtM1RTTE5tdVNnbnNUTlJxMlptSFJi!2m2!1d46.4400633!2d30.75685499999999!3f3.44725372428455!4f-7.144645647007081!5f1.3968318794355798" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{victoryWingsTranslations["title"]}</h1>
                    <br />
                    <p>{victoryWingsTranslations["description"]}</p><br></br>
                    <p>{victoryWingsTranslations["idea"]}</p><br></br>
                    <p>{victoryWingsTranslations["monumentDescription"]}</p>
                    <p>{victoryWingsTranslations["location"]}</p><br></br>
                    <p>{victoryWingsTranslations["significance"]}</p><br></br>
                    <p>{victoryWingsTranslations["patriotism"]}</p><br></br>

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/opera">
                            <img className="picture" src={opera} alt="opera" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["opera"]}</span>
                        </a>
                        <a className="photo_item" href="/theater-garden">
                            <img className="picture" src={theaterGarden} alt="theaterGarden" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["theaterGarden"]}</span>
                        </a>
                        <a className="photo_item" href="/vorontsov-palace">
                            <img className="picture" src={vorontsovPalace} alt="vorontsovPalace" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["vorontsovPalace"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VictoryWings;