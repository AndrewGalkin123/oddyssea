import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import potemkinStairs from "../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonument from "../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import vorontsovPalace from "../../assets/historyImages/36673ce0-abb7-4a65-a7ac-8200a41af649.jpeg"
import pushkinMonumentImage1 from "../../assets/historyImages/4f57c8f6-9b11-4c96-978c-4188dda99662.jpeg"
import pushkinMonumentImage2 from "../../assets/historyImages/82b12c25-e226-4a67-bae6-208414765ec7.jpeg"


const PushkinMonument = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const pushkinMonumentTraslations = translations.pushkinMonument[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1689951256938!6m8!1m7!1sCAoSLEFGMVFpcE42bEY5YWdhd090cFlDZ0FTNVFVZ1RsbG04bmpKQkdMb3VLZUhq!2m2!1d46.48618043103587!2d30.74354950573845!3f150.74277158480106!4f5.272216711655929!5f0.6526350657713837" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{pushkinMonumentTraslations["title"]}</h1>
                    <br />
                    <p>{pushkinMonumentTraslations["description"]}</p><br></br>
                    <p>{pushkinMonumentTraslations["history"]}</p><br></br>
                    <img className="article_images" src={pushkinMonumentImage1}></img><br></br><br></br>
                    <p>{pushkinMonumentTraslations["poeticGenius"]}</p><br></br>
                    <p>{pushkinMonumentTraslations["sculpturalComposition"]}</p>
                    <p>{pushkinMonumentTraslations["symbolOfMonument"]}</p><br></br>
                    <img className="article_images" src={pushkinMonumentImage2}></img><br></br><br></br>
                    <p>{pushkinMonumentTraslations["partOfCity"]}</p><br></br>
                    <p>{pushkinMonumentTraslations["culturalHeritage"]}</p>
                    <p>{pushkinMonumentTraslations["outstandingWork"]}</p>

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

export default PushkinMonument;