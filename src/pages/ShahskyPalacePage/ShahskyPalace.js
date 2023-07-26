import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import potemkinStairs from "../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonument from "../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import shahskyPalaceImage1 from "../../assets/historyImages/c684a93d-4f1e-4992-9861-35227a52b326.jpeg"
import shahskyPalaceImage2 from "../../assets/historyImages/608863b2-392a-486d-bbc3-ef83b56e94d7.jpeg"
import shahskyPalaceImage3 from "../../assets/historyImages/072c1246-e1f2-4a09-8128-d19cd74eb565.jpeg"

const ShahskyPalace = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const shahskyPalaceTranslations = translations.shahskyPalace[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690397237644!6m8!1m7!1sCAoSLEFGMVFpcE44clEzOU54RHJrRGNEclBsTzJlVnVkbHBVVU5kd1FHTzdTcllf!2m2!1d46.49101342844211!2d30.73523510449729!3f235.59518114176174!4f31.642611995693613!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{shahskyPalaceTranslations["title"]}</h1>  <br />
                    <p>{shahskyPalaceTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="shahskyPalaceImage" src={shahskyPalaceImage1}></img><br></br><br></br>
                    <p>{shahskyPalaceTranslations["historyOrigin"]}</p>
                    <p>{shahskyPalaceTranslations["impressiveFacade"]}</p><br></br>
                    <img className="article_images" alt="shahskyPalaceImage" src={shahskyPalaceImage2}></img><br></br><br></br>
                    <p>{shahskyPalaceTranslations["luxuriousInteriors"]}</p>
                    <p>{shahskyPalaceTranslations["culturalEvents"]}</p><br></br>
                    <p>{shahskyPalaceTranslations["touristAttraction"]}</p><br></br>

                    <p>{shahskyPalaceTranslations["unforgettableExperience"]}</p><br></br>
                    <img className="article_images" alt="shahskyPalaceImage" src={shahskyPalaceImage3}></img>
                    
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

export default ShahskyPalace;