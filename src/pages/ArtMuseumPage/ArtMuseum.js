import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import lanzheron from "../../assets/historyImages/8d51b4a0-110c-446f-9130-1879e9ce792c.jpeg";
import dumskaSquare from "../../assets/historyImages/02ccb430-bbcd-4747-9d45-f9447898ca5a.jpeg"
import defenseMonument from "../../assets/historyImages/efa5d37a-ddb7-4829-b89d-87cc8759d444.jpeg"
import artMuseumImage from "../../assets/historyImages/eb543f5d-204f-4e53-b5f9-dc400b063468.jpeg"
 
const ArtMuseum = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const artMuseumTranslations = translations.artMuseum[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1691085615280!6m8!1m7!1sCAoSLEFGMVFpcE85ZVBmVG1jRGxxMjN1dU9OdmhMQ0FpUmdEeE9mUThoSmFibXR6!2m2!1d46.493323!2d30.728697!3f63.051960894841535!4f13.3103432413087!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{artMuseumTranslations["title"]}</h1><br></br>
                    <p>{artMuseumTranslations["description"]}</p><br></br>
                    <p>{artMuseumTranslations["history"]}</p><br></br>
                    <p>{artMuseumTranslations["architecture"]}</p><br></br>
                    <img className="article_images" alt="artMuseumImage" src={artMuseumImage}></img><br></br><br></br>
                    <p>{artMuseumTranslations["collection"]}</p>
                    <p>{artMuseumTranslations["creativity"]}</p><br></br>

                    <p>{artMuseumTranslations["heritage"]}</p><br></br>



                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >

                        <a className="photo_item" href="/lanzheron">
                            <img className="picture" src={lanzheron} alt="lanzheron" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["lanzheron"]}</span>
                        </a>
                        <a className="photo_item" href="/dumska-square">
                            <img className="picture" src={dumskaSquare} alt="dumskaSquare" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["dumskaSquare"]}</span>
                        </a>
                        <a className="photo_item" href="/defense-monument">
                            <img className="picture" src={defenseMonument} alt="defenseMonument" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["defenseMonument"]}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtMuseum