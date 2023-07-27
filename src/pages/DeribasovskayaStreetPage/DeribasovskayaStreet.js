import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovMonument from "../../assets/historyImages/dc359f97-ea22-4ed3-84c7-242ca890f28b.jpeg";
import shahskyPalace from "../../assets/historyImages/608863b2-392a-486d-bbc3-ef83b56e94d7.jpeg"
import shevchenkoPark from "../../assets/historyImages/db6d1217-4e20-4064-a282-3b78f1e2efac.jpeg"
import deribasovskayaStreetImage1 from "../../assets/historyImages/033ab5cf-1a83-4f7e-be92-54f41daecef5.jpeg"
import deribasovskayaStreetImage2 from "../../assets/historyImages/783746e0-1478-4d32-b153-38a89ffc34ea.jpeg"
import deribasovskayaStreetImage3 from "../../assets/historyImages/ba3fcf97-87ea-43e0-b41b-a654fb875c98.jpeg"

const DeribasovskayaStreet = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const deribasovskayaStreetTranslations = translations.deribasovskayaStreet[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    

    return(
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1690481063254!6m8!1m7!1sCAoSLEFGMVFpcFAtdi00Q1pibS1NZGwwaGhJeDZVcnM2VGpYTkh1bVJRaTJDZzcx!2m2!1d46.48441687128544!2d30.73459571532675!3f96.13217934342539!4f1.5386541651865429!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{deribasovskayaStreetTranslations["title"]}</h1>  <br />
                    <p>{deribasovskayaStreetTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="deribasovskayaStreetImage" src={deribasovskayaStreetImage1}></img><br></br><br></br>
                    <p>{deribasovskayaStreetTranslations["heritageAndCharm"]}</p>
                    <p>{deribasovskayaStreetTranslations["culturalHeritage"]}</p><br></br>
                    <p>{deribasovskayaStreetTranslations["vibrantLife"]}</p><br></br>
                    <img className="article_images" alt="deribasovskayaStreetImage" src={deribasovskayaStreetImage2}></img><br></br><br></br>
                    <p>{deribasovskayaStreetTranslations["businessAndCulture"]}</p><br></br>
                    <p>{deribasovskayaStreetTranslations["vibrantEvenings"]}</p><br></br>
                    <p>{deribasovskayaStreetTranslations["uniqueAtmosphere"]}</p><br></br>
                    <img className="article_images" alt="deribasovskayaStreetImage" src={deribasovskayaStreetImage3}></img><br></br><br></br>
                  
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
                        <a className="photo_item" href="/shevchenko-park">
                            <img className="picture" src={shevchenkoPark} alt="shevchenkoPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["shevchenkoPark"]}</span>
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

export default DeribasovskayaStreet;