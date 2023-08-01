import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import seasideBoulevard from "../../assets/historyImages/ab747d0b-7ba6-4f14-a651-420c6250e07f.jpeg"
import archaeologicalMuseum from "../../assets/historyImages/0ac18c1a-0211-45be-a5a7-0ba878302f3e.jpeg";
import cityPark from "../../assets/historyImages/4085e7ab-0b49-4bf2-bc2e-88ada4b4d628.jpeg"

const Lanzheron = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const lanzheronTranslations = translations.lanzheron[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690907820735!6m8!1m7!1sCAoSLEFGMVFpcE9XR3VNVjdTa09fbVR0SWtzSmZ2eTJDeXlyakhabzhzemxPVDNy!2m2!1d46.477021!2d30.7655121!3f83.75161451026975!4f5.660288822141723!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{lanzheronTranslations["title"]}</h1><br></br>
                    <p>{lanzheronTranslations["description"]}</p><br></br>
                    <p>{lanzheronTranslations["modernRetroExperience"]}</p><br></br>
                    <p>{lanzheronTranslations["cleanSandyShores"]}</p><br></br>
                    <p>{lanzheronTranslations["amenitiesAndServices"]}</p>
                    <p>{lanzheronTranslations["vibrantAtmosphere"]}</p><br></br>
                    <p>{lanzheronTranslations["historicalLandmark"]}</p><br></br>
                    <p>{lanzheronTranslations["perfectPlace"]}</p><br></br>
                

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
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
                        <a className="photo_item" href="/city-park">
                            <img className="picture" src={cityPark} alt="cityPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["deribasovskayaСityPark"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lanzheron