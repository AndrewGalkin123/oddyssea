import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import dumskaSquare from  "../../assets/historyImages/02ccb430-bbcd-4747-9d45-f9447898ca5a.jpeg"
import defenseMonument from  "../../assets/historyImages/efa5d37a-ddb7-4829-b89d-87cc8759d444.jpeg"
import artMuseum from "../../assets/historyImages/eb543f5d-204f-4e53-b5f9-dc400b063468.jpeg"
import preobrazhenskyCathedralImage1 from "../../assets/historyImages/f412e15a-193c-4a63-a0c9-dce34af530d9.jpeg"
import preobrazhenskyCathedralImage2 from "../../assets/historyImages/73c1c20d-9b10-4f4e-acb2-4c1365c52ac7.jpeg"

const SpasoPreobrazhenskyCathedral = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const preobrazhenskyCathedral = translations.spasoPreobrazhenskyCathedral[currentLanguage];
    const general = translations.general[currentLanguage];

    const textContentRef = useRef(null);

    const handleScrollButtonClick = () => {
        textContentRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
           <iframe 
           className="location"
           src="https://www.google.com/maps/embed?pb=!4v1691087645992!6m8!1m7!1sCAoSK0FGMVFpcE5peGx4ZFFlalo5X3hlVEFZUElBeXpMQTRnNUF2dEowNTJoWWM.!2m2!1d46.4836077!2d30.7315329!3f202.75858225047196!4f18.272845532315827!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <h1>{preobrazhenskyCathedral["title"]}</h1><br></br>
                    <p>{preobrazhenskyCathedral["description"]}</p><br></br>
                    <p>{preobrazhenskyCathedral["history"]}</p><br></br>
                    <img className="article_images" alt="preobrazhenskyCathedral" src={preobrazhenskyCathedralImage1}></img><br></br><br></br>
                    <p>{preobrazhenskyCathedral["architecture"]}</p><br></br>
                    <p>{preobrazhenskyCathedral["interiors"]}</p><br></br>
                    <img className="article_images" alt="preobrazhenskyCathedral" src={preobrazhenskyCathedralImage2}></img><br></br><br></br>
                    <p>{preobrazhenskyCathedral["significance"]}</p>
                    <p>{preobrazhenskyCathedral["spiritualLife"]}</p><br></br>
                    <p>{preobrazhenskyCathedral["touristAttraction"]}</p><br></br>
                    <p>{preobrazhenskyCathedral["spiritualExperience"]}</p><br></br>
                    

                </div>
                <div className="otherContent">
                    <p className="title">{general["otherContentTitle"]}</p>
                    <div
                        className="photo_item_container"
                        style={{ position: "relative", marginBottom: "100px" }}
                    >
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
                        <a className="photo_item" href="/art-museum">
                            <img className="picture" src={artMuseum} alt="artMuseum" />
                            <span className="photo_block-item"></span>
                            <span className="photo_item_title">{general["artMuseum"]}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpasoPreobrazhenskyCathedral