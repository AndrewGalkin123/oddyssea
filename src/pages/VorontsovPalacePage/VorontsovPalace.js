import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import opera from "../../assets/historyImages/d2646277-0a23-4b43-bda9-ddd5dfaa5bc9.jpeg"
import dukeMonument from "../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import vorontsovPalaceImage1 from "../../assets/historyImages/3baeeaf0-2a50-42aa-81a1-31ce5b642f4b.jpeg"
import vorontsovPalaceImage2 from "../../assets/historyImages/dff5d961-f4da-4cbf-9d31-a660a2227fd6.jpeg"


const VorontsovPalace = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const vorontsovPalaceTraslations = translations.vorontsovPalace[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689949987882!6m8!1m7!1sCAoSLEFGMVFpcFAtZmI5TlRqYnJRZjhQbUpUV1dUTDJpZVZ5U2JfWkc3dlUwNldH!2m2!1d46.49064781970446!2d30.73821522295475!3f125.94257393019895!4f8.738075894394754!5f1.410587453312072" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{vorontsovPalaceTraslations["title"]}</h1>
                    <br />
                    <p>{vorontsovPalaceTraslations["history"]}</p><br></br>
                    <p>{vorontsovPalaceTraslations["historicalSignificance"]}</p><br></br>
                    <img className="article_images" src={vorontsovPalaceImage1}></img><br></br><br></br>
                    <p>{vorontsovPalaceTraslations["architectureStyle"]}</p><br></br>
                    <p>{vorontsovPalaceTraslations["glamorousVenue"]}</p>
                    <p>{vorontsovPalaceTraslations["modernTimes"]}</p><br></br>
                    <img className="article_images" src={vorontsovPalaceImage2}></img><br></br><br></br>
                    <p>{vorontsovPalaceTraslations["journeyThroughTime"]}</p><br></br>
                   
                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/paul-church">
                            <img className="picture" src={pavelCathedral} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["stPaulChurch"]}</span>
                        </a>
                        <a className="photo_item" href="/opera">
                            <img className="picture" src={opera} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["opera"]}</span>
                        </a>
                        <a className="photo_item" href="/duke-monument">
                            <img className="picture" src={dukeMonument} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["dukeMonument"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VorontsovPalace;