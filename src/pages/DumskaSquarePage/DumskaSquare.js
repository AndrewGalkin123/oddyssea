import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import archaeologicalMuseum from "../../assets/historyImages/0ac18c1a-0211-45be-a5a7-0ba878302f3e.jpeg";
import cityPark from "../../assets/historyImages/4085e7ab-0b49-4bf2-bc2e-88ada4b4d628.jpeg"
import lanzheron from "../../assets/historyImages/8d51b4a0-110c-446f-9130-1879e9ce792c.jpeg";
import dumskaSquareImage1 from "../../assets/historyImages/0da9bc1a-9088-4d8e-8192-b027a45c00a3.jpeg";
import dumskaSquareImage2 from "../../assets/historyImages/9b5da0b9-89ee-4958-b07f-bf86aae72d42.jpeg"

const DumskaSquare = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const dumskaSquareTranslations = translations.dumskaSquare[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690992245883!6m8!1m7!1sCAoSLEFGMVFpcFBEMEFQaXJxLUM0bGYzd2g1ZEhqSE5HRy10b0pVMVpWN3JXWG5x!2m2!1d46.48600612903508!2d30.74363798868936!3f154.39672961121363!4f17.83201134141666!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
                    <h1>{dumskaSquareTranslations["title"]}</h1><br></br>
                    <p>{dumskaSquareTranslations["description"]}</p><br></br>
                    <p>{dumskaSquareTranslations["dumskaSquareHistory"]}</p><br></br>
                    <p>{dumskaSquareTranslations["prominentSymbol"]}</p><br></br>
                    <img className="article_images" src={dumskaSquareImage1}></img><br></br><br></br>
                    <p>{dumskaSquareTranslations["meetingPlace"]}</p>
                    <p>{dumskaSquareTranslations["festiveEvents"]}</p><br></br>
                    <img className="article_images" src={dumskaSquareImage2}></img><br></br><br></br>
                    <p>{dumskaSquareTranslations["hubForArtists"]}</p><br></br>
                    <p>{dumskaSquareTranslations["romanticAtmosphere"]}</p><br></br>


                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/archaeological-museum">
                            <img className="picture" src={archaeologicalMuseum} alt="archaeologicalMuseum" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["archaeologicalMuseum"]}</span>
                        </a>
                        <a className="photo_item" href="/city-park">
                            <img className="picture" src={cityPark} alt="cityPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["cityPark"]}</span>
                        </a>
                        <a className="photo_item" href="/lanzheron">
                            <img className="picture" src={lanzheron} alt="lanzheron" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["lanzheron"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DumskaSquare;