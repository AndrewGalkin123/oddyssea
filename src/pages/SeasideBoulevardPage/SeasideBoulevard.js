import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import shahskyPalace from "../../assets/historyImages/608863b2-392a-486d-bbc3-ef83b56e94d7.jpeg"
import shevchenkoPark from "../../assets/historyImages/db6d1217-4e20-4064-a282-3b78f1e2efac.jpeg"
import deribasovskayaStreet from "../../assets/historyImages/2477327b-91bf-48bc-968d-7eec7318ef3c.jpeg";
import seasideBoulevardImage1 from "../../assets/historyImages/301b1985-2931-4bf1-9955-6c9369cccec7.jpeg"
import seasideBoulevardImage2 from "../../assets/historyImages/a9d42ce2-1674-4ccf-9a7a-ce9b40828165.jpeg"
import seasideBoulevardImage3 from "../../assets/historyImages/ab747d0b-7ba6-4f14-a651-420c6250e07f.jpeg"
import seasideBoulevardImage4 from "../../assets/historyImages/d2c683c1-76ce-44c7-9a2d-1d0e5a946b5a.jpeg"


const SeasideBoulevard = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const seasideBoulevardTranslations = translations.seasideBoulevard[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690569721432!6m8!1m7!1sCAoSLEFGMVFpcFBJbWNKZTFKbUhsQUR0TnhJbzU0Sjd6YXVvX0lzbUlHWkR1QmNh!2m2!1d46.48709407490879!2d30.74254030438469!3f326.5165933843673!4f3.9225413601663206!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{seasideBoulevardTranslations["title"]}</h1>  <br />
                    <p>{seasideBoulevardTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="seasideBoulevardImage1" src={seasideBoulevardImage1}></img><br></br><br></br>
                    <p>{seasideBoulevardTranslations["history"]}</p>
                    <p>{seasideBoulevardTranslations["culturalHub"]}</p><br></br>
                    <img className="article_images" alt="seasideBoulevardImage2" src={seasideBoulevardImage2}></img><br></br><br></br>
                    <p>{seasideBoulevardTranslations["seasideView"]}</p><br></br>
                    <p>{seasideBoulevardTranslations["culturalFusion"]}</p><br></br>
                    <img className="article_images" alt="seasideBoulevardImage3" src={seasideBoulevardImage3}></img><br></br><br></br>
                    <p>{seasideBoulevardTranslations["unforgettableAdventure"]}</p><br></br>
                    <p>{seasideBoulevardTranslations["historyAndCulture"]}</p><br></br>
                    <img className="article_images" alt="seasideBoulevardImage4" src={seasideBoulevardImage4}></img><br></br><br></br>

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/shahsky-palace">
                            <img className="picture" src={shahskyPalace} alt="shahskyPalace" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["shahskyPalace"]}</span>
                        </a>
                        <a className="photo_item" href="/shevchenko-park">
                            <img className="picture" src={shevchenkoPark} alt="shevchenkoPark" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["shevchenkoPark"]}</span>
                        </a>
                        <a className="photo_item" href="/deribasovskaya-street">
                            <img className="picture" src={deribasovskayaStreet} alt="deribasovskayaStreet" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["deribasovskayaStreet"]}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeasideBoulevard;