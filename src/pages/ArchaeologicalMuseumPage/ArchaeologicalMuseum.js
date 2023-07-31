import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import shevchenkoPark from "../../assets/historyImages/db6d1217-4e20-4064-a282-3b78f1e2efac.jpeg"
import deribasovskayaStreet from "../../assets/historyImages/2477327b-91bf-48bc-968d-7eec7318ef3c.jpeg";
import seasideBoulevard from "../../assets/historyImages/ab747d0b-7ba6-4f14-a651-420c6250e07f.jpeg"
import archaeologicalMuseumImage1 from "../../assets/historyImages/5b91599e-623f-43cd-a4fe-cfda31c484ab.jpeg"
import archaeologicalMuseumImage2 from "../../assets/historyImages/7005cb76-914f-4541-9374-eefeb4052d7e.jpeg"
import archaeologicalMuseumImage3 from "../../assets/historyImages/ec243f04-d2ba-467f-a8b9-b0c1e31cd402.jpeg"


const ArchaeologicalMuseum = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const archaeologicalMuseumTranslations = translations.odessaArchaeologicalMuseum[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!4v1690799078512!6m8!1m7!1sCAoSLEFGMVFpcE1oUmJ6WHRHdUJUSVVMZU5rbklZZUh5YzVkMDNCZUVyT29hSk9u!2m2!1d46.485071!2d30.7439437!3f4.180024503728842!4f2.3371492776826983!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{archaeologicalMuseumTranslations["title"]}</h1><br></br>
                    <p>{archaeologicalMuseumTranslations["description"]}</p><br></br>
                    <img className="article_images" alt="archaeologicalMuseum" src={archaeologicalMuseumImage1}></img><br></br><br></br>
                    <p>{archaeologicalMuseumTranslations["majesticFacade"]}</p><br></br>
                    <img className="article_images" alt="archaeologicalMuseum" src={archaeologicalMuseumImage2}></img><br></br><br></br>
                    <p>{archaeologicalMuseumTranslations["goldenFamily"]}</p><br></br>
                    <p>{archaeologicalMuseumTranslations["reconstructedFindings"]}</p>
                    <p>{archaeologicalMuseumTranslations["thematicExhibitions"]}</p><br></br>
                    <p>{archaeologicalMuseumTranslations["adventureTime"]}</p><br></br>
                    <img className="article_images" alt="archaeologicalMuseum" src={archaeologicalMuseumImage3}></img><br></br><br></br>

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
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
                        <a className="photo_item" href="/seaside-boulevard">
                            <img className="picture" src={seasideBoulevard} alt="seasideBoulevard" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["seasideBoulevard"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchaeologicalMuseum;