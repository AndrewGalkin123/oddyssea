import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import deribasovskayaStreet from "../../assets/historyImages/2477327b-91bf-48bc-968d-7eec7318ef3c.jpeg";
import seasideBoulevard from "../../assets/historyImages/ab747d0b-7ba6-4f14-a651-420c6250e07f.jpeg"
import archaeologicalMuseum from "../../assets/historyImages/0ac18c1a-0211-45be-a5a7-0ba878302f3e.jpeg";
import cityParkImage1 from "../../assets/historyImages/f5bd77a3-a93e-4af0-b2f1-1cccae816670.jpeg"
import cityParkImage2 from "../../assets/historyImages/4085e7ab-0b49-4bf2-bc2e-88ada4b4d628.jpeg"
import cityParkImage3 from "../../assets/historyImages/b3cc9e3e-bedb-4f60-98f6-75d1c61b9457.jpeg"

const CityPark = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const cityParkTranslations = translations.deribasovskayaСityPark[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690802009795!6m8!1m7!1sCAoSLEFGMVFpcFAzSHhMRXJZTGdySjNON0dMVDZVdVQySXhDOEVJSHdBeThWZjhw!2m2!1d46.4848854!2d30.7345493!3f338.741431906811!4f0.6860232185604076!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{cityParkTranslations["title"]}</h1><br></br>
                    <p>{cityParkTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="cityParkImage" src={cityParkImage1}></img><br></br><br></br>
                    <p>{cityParkTranslations["magnetism"]}</p><br></br>
                    <img className="article_images" alt="cityParkImage" src={cityParkImage2}></img><br></br><br></br>
                    <p>{cityParkTranslations["alongDeribasovskaya"]}</p><br></br>
                    <p>{cityParkTranslations["majesticArch"]}</p>
                    <p>{cityParkTranslations["belovedSpot"]}</p><br></br>
                    <p>{cityParkTranslations["historicalHeritage"]}</p><br></br>
                    <img className="article_images" alt="cityParkImage" src={cityParkImage3}></img><br></br><br></br>
                    <p>{cityParkTranslations["culturalEvents"]}</p><br></br>
                    <p>{cityParkTranslations["partOfOdessaSoul"]}</p><br></br>

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/deribasovskaya-street">
                            <img className="picture" src={deribasovskayaStreet} alt="deribasovskayaStreet" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["deribasovskayaStreet"]}</span>
                        </a>
                        <a className="photo_item" href="/seaside-boulevard">
                            <img className="picture" src={seasideBoulevard} alt="seasideBoulevard" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["seasideBoulevard"]}</span>
                        </a>
                        <a className="photo_item" href="/archaeological-museum">
                            <img className="picture" src={archaeologicalMuseum} alt="archaeologicalMuseum" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["odessaArchaeologicalMuseum"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityPark