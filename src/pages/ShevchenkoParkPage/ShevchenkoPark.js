import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import victoryPark from "../../assets/historyImages/victory-park-2.jpeg"
import vorontsovMonument from "../../assets/historyImages/dc359f97-ea22-4ed3-84c7-242ca890f28b.jpeg";
import shahskyPalace from "../../assets/historyImages/608863b2-392a-486d-bbc3-ef83b56e94d7.jpeg"
import shevchenkoParkImage1 from "../../assets/historyImages/b9128437-c030-4535-bdf8-a47361ac474a.jpeg";
import shevchenkoParkImage2 from "../../assets/historyImages/5afb76a5-018d-4288-8388-5a09e009b436.jpeg";

const ShevchenkoPark = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const shevchenkoParkTranslations = translations.shevchenkoPark[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690399069770!6m8!1m7!1sCAoSLEFGMVFpcFBOM2RaTUUyaGJZZDRSeXRyVXRXY2F0N2dla19QWGtUQkFwOE1j!2m2!1d46.47936803598829!2d30.75080778150596!3f249.88357323367381!4f14.406873048637834!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{shevchenkoParkTranslations["title"]}</h1><br></br>
                    <p>{shevchenkoParkTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="shevchenkoParkImage" src={shevchenkoParkImage1}></img><br></br><br></br>
                    <p>{shevchenkoParkTranslations["diversityOfNature"]}</p>
                    <p>{shevchenkoParkTranslations["familyActivities"]}</p><br></br>
                    <img className="article_images" alt="shevchenkoParkImage" src={shevchenkoParkImage2}></img><br></br><br></br>
                    <p>{shevchenkoParkTranslations["culturalValues"]}</p><br></br>
                    <p>{shevchenkoParkTranslations["integralPartOfLife"]}</p><br></br>


                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/shahsky-palace">
                            <img className="picture" src={shahskyPalace} alt="shahskyPalace" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["shahskyPalace"]}</span>
                        </a>
                        <a className="photo_item" href="/victory-park">
                            <img className="picture" src={victoryPark} alt="victoryPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["victoryPark"]}</span>
                        </a>
                        <a className="photo_item" href="/vorontsov-monument">
                            <img className="picture" src={vorontsovMonument} alt="vorontsovMonument" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["vorontsovMonument"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShevchenkoPark;