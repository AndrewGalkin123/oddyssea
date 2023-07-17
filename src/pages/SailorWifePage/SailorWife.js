import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"
import sailorWife from "../../assets/historyImages/sailor-wife.jpeg"

const SailorWife = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const sailorWifeTranslations = translations.sailorWife[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1689619124310!6m8!1m7!1sCAoSLEFGMVFpcE1tenpWRW1EVUM4R21SSkNhSzZUM3lLSUdrVFMxWWkyV2EteDdy!2m2!1d46.4918329!2d30.747956!3f47.35464365894471!4f2.5414540386990865!5f0.4000000000000002" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{sailorWifeTranslations["title"]}</h1>
                    <br />
                    <p>{sailorWifeTranslations["description"]}</p><br></br>
                    <p>{sailorWifeTranslations["year"]}</p><br></br>
                   
                    <img className="article_images" src={sailorWife}></img><br></br><br></br>
                    <p>{sailorWifeTranslations["hospitality"]}</p>
                    <p>{sailorWifeTranslations["culturalSignificance"]}</p><br></br>
                    <p>{sailorWifeTranslations["sailorWifeEnding"]}</p><br></br>
                


                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/vorontsov-lighthouse">
                            <img className="picture" src={vorontsovskyLighthouse} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["vorontsovLighthouse"]}</span>
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

export default SailorWife;