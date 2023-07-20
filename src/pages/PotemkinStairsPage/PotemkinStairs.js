import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import potemkinStairsImage1 from "../../assets/historyImages/3bc4ebc7-0221-4fa4-9849-0450c194e1b3.jpeg"
import potemkinStairsImage2 from "../../assets/historyImages/1672697405_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-4.jpg"
import potemkinStairsImage3 from "../../assets/historyImages/1672697441_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-23.jpg"
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"

const PotemkinStairs = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const potemkinStairsTraslations = translations.potemkinStairs[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return( 
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689792567937!6m8!1m7!1sCAoSLEFGMVFpcE94WEZZdzdib2wtY3otNmNkcnJ2bVhleTBHOXA2SkUwcldjbHlq!2m2!1d46.48871607577404!2d30.7423053619041!3f234.84650723792979!4f-0.22293147732713692!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{potemkinStairsTraslations["title"]}</h1>
                    <br />
                    <p>{potemkinStairsTraslations["potemkinStairsStart"]}</p><br></br>
                    <p>{potemkinStairsTraslations["history"]}</p><br></br>
                    <img className="article_images" src={potemkinStairsImage1}></img><br></br><br></br>
                    <p>{potemkinStairsTraslations["architectureStyle"]}</p><br></br>
                    <p>{potemkinStairsTraslations["historicalSignificance"]}</p>
                    <p>{potemkinStairsTraslations["legendaryStairs"]}</p><br></br>
                    <img className="article_images" src={potemkinStairsImage2}></img><br></br><br></br>
                    <p>{potemkinStairsTraslations["visitOpportunity"]}</p><br></br>
                    <p>{potemkinStairsTraslations["symbolOfTheCity"]}</p><br></br>
                    <img className="article_images" src={potemkinStairsImage3}></img><br></br>
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

export default PotemkinStairs;