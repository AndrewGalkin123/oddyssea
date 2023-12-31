import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import potemkinStairs from "../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonument from "../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import vorontsovMonumentImage1 from "../../assets/historyImages/3332fcc6-590f-446b-bab9-f93b911b5951.jpeg";
import vorontsovMonumentImage2 from "../../assets/historyImages/095d7ccb-f507-4615-8ae4-5db33a7bd0ae.jpeg";

const VorontsovMonument = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const vorontsovMonumentTranslations = translations.vorontsovMonumentOdessa[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690304115367!6m8!1m7!1sCAoSK0FGMVFpcE9hVmx2dUlNcU9ta0RmNTJZQTBnc21lczlyRXZ6dUJqNHFwREk.!2m2!1d46.48412615434913!2d30.73179361208474!3f269.99182527856095!4f15.384392587559816!5f1.187125700565809" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{vorontsovMonumentTranslations["title"]}</h1>  <br />
                    <p>{vorontsovMonumentTranslations["description"]}</p><br></br>
                    <p>{vorontsovMonumentTranslations["admirationRespect"]}</p><br></br>
                    <p>{vorontsovMonumentTranslations["remarkableAchievements"]}</p><br></br>
                    <img className="article_images" alt="vorontsovMonument" src={vorontsovMonumentImage1}></img>
                    <p>{vorontsovMonumentTranslations["monumentEstablishment"]}</p><br></br>
                    <p>{vorontsovMonumentTranslations["architecturalStyle"]}</p><br></br>
                    <p>{vorontsovMonumentTranslations["symbolOfGratitude"]}</p><br></br>
                    <p>{vorontsovMonumentTranslations["exploringHistory"]}</p><br></br>
                    <img className="article_images" alt="vorontsovMonument" src={vorontsovMonumentImage2}></img>
                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/potemkin-stairs">
                            <img className="picture" src={potemkinStairs} alt="potemkinStairs" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["potemkinStairs"]}</span>
                        </a>
                        <a className="photo_item" href="/duke-monument">
                            <img className="picture" src={dukeMonument} alt="dukeMonument" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["dukeMonument"]}</span>
                        </a>
                        <a className="photo_item" href="/vorontsov-lighthouse">
                            <img className="picture" src={vorontsovskyLighthouse} alt="vorontsovLighthouse" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["vorontsovLighthouse"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VorontsovMonument;