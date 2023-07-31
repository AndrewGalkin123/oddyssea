import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import sailorWife from "../../assets/historyImages/b6e734d7-ddd2-421d-9fb4-02d865950f9f.jpeg"
import opera from "../../assets/historyImages/d2646277-0a23-4b43-bda9-ddd5dfaa5bc9.jpeg"
import potemkinStairs from "../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonumentImage1 from "../../assets/historyImages/031a1044-e3d0-44d3-93c4-7be262e6e58b.jpeg"
import dukeMonumentImage2 from "../../assets/historyImages/d4569294-52e6-424f-a792-10a56b80c0ba.jpeg"

const DukeMonument = () => { 
    const { currentLanguage } = useContext(LanguageContext);
    const dukeMonumentTraslations = translations.dukeDeRichelieu[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return(
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689877869835!6m8!1m7!1sCAoSLEFGMVFpcE9KeVA1WW1falNKT3VHQjlHd1NmUWMzMjRXRFhlRkRLNkJHQ0ZD!2m2!1d46.4881578!2d30.7412964!3f95.73419257045096!4f18.019386304797564!5f0.4000000000000002" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{dukeMonumentTraslations["title"]}</h1>
                    <br />
                    <p>{dukeMonumentTraslations["history"]}</p><br></br>
                    <p>{dukeMonumentTraslations["architectureStyle"]}</p><br></br>
                    <img className="article_images" src={dukeMonumentImage1}></img><br></br><br></br>
                    <p>{dukeMonumentTraslations["historicalSignificance"]}</p><br></br>
                    <p>{dukeMonumentTraslations["legendaryMonument"]}</p>
                    <p>{dukeMonumentTraslations["inspirationAndJoy"]}</p><br></br>
                    <img className="article_images" src={dukeMonumentImage2}></img><br></br><br></br>
                    <p>{dukeMonumentTraslations["symbolOfGreatness"]}</p><br></br>
                    <p>{dukeMonumentTraslations["legacyOfGreatness"]}</p><br></br>
                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
                        <a className="photo_item" href="/sailor-wife">
                            <img className="picture" src={sailorWife} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["sailor'sWife"]}</span>
                        </a>
                        <a className="photo_item" href="/opera">
                            <img className="picture" src={opera} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["opera"]}</span>
                        </a>
                        <a className="photo_item" href="/potemkin-stairs">
                            <img className="picture" src={potemkinStairs} alt="descent coast" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["potemkinStairs"]}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DukeMonument;