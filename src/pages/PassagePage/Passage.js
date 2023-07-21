import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import potemkinStairs from "../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonument from "../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import vorontsovPalace from "../../assets/historyImages/36673ce0-abb7-4a65-a7ac-8200a41af649.jpeg"
import passageImage1 from "../../assets/historyImages/0c2de272-c17e-4308-ad92-08b565d2e26c.jpeg"
import passageImage2 from "../../assets/historyImages/14a7a43f-18d4-4842-b6c1-74d9d5aedd27.jpeg"
import passageImage3 from "../../assets/historyImages/f8493e1f-aefc-4e00-8e2c-35e1b8a8f219.jpeg"

const Passage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const passageTranslations = translations.odessaPassage[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689954610225!6m8!1m7!1sCAoSLEFGMVFpcE5udTRDd3N6aDJaY3h1OFVZT0ViY3Q0NmZWbW5hUUg2QTlKdFhu!2m2!1d46.48414445732981!2d30.73271004169271!3f233.75853296992602!4f18.557992974614322!5f0.4000000000000002" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{passageTranslations["title"]}</h1>
                    <br />
                    <p>{passageTranslations["description"]}</p><br></br>
                    <p>{passageTranslations["insideInfo"]}</p><br></br>
                    <img className="article_images" src={passageImage1}></img><br></br><br></br>
                    <p>{passageTranslations["architectureStyle"]}</p>
                    <p>{passageTranslations["culturalCenter"]}</p><br></br>
                    <p>{passageTranslations["culturalHub"]}</p><br></br>
                    <img className="article_images" src={passageImage2}></img><br></br><br></br>
                    <p>{passageTranslations["culturalSymbol"]}</p><br></br>
                    <img className="article_images" src={passageImage3}></img>
                    <p>{passageTranslations["uniqueExperience"]}</p>
                    <p>{passageTranslations["passageEnding"]}</p>

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

export default Passage;