import React from 'react';
import './History.css'
import opera from '../../../../assets/historyImages/opera.jpg'
import pavelCathedral from '../../../../assets/historyImages/pavelCathedral.jpg'
import sailorWife from '../../../../assets/historyImages/b6e734d7-ddd2-421d-9fb4-02d865950f9f.jpeg'
import vorontsovLighthouse from '../../../../assets/historyImages/lighthouse.jpg'
import RedirectButton from "../../../../components/RedirectButton/RedirectButton"
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import translations from "../../../../translations.json"

const History = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const historyBlockTranslations  = translations.historyBlock[currentLanguage];
    return (
        <div id="history" >
            <br></br>
            <div className="title" >
                <hr />
                <span>{historyBlockTranslations["title"]}</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="content" style={{ maxWidth: "1500px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "0 15px" , marginBottom: "20px"}}>
                <a href="/paul-church" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={pavelCathedral} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                    <h2>{historyBlockTranslations["lutheranChurch"]}</h2>
                    <p>{historyBlockTranslations["lutheranChurchInfo"]}</p>
                </a>
                <a href="/sailor-wife" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={sailorWife} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                    <h2>{historyBlockTranslations["sailor'sWife"]}</h2>
                    <p>{historyBlockTranslations["sailor'sWifeInfo"]}</p>
                </a>
                <a href="/vorontsov-lighthouse" className="box" style={{ margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={vorontsovLighthouse} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "top" }} />
                    <h2>{historyBlockTranslations["lighthouse"]}</h2>
                    <p>{historyBlockTranslations["lighthouseInfo"]}</p>
                </a>
                <a href="/theater-garden" className="box" style={{margin: "15px 15px 0 15px", flex: "1 1 320px", minWidth: "300px", maxWidth: "100%", textDecoration: "none", color: "black" }}>
                    <img src={opera} style={{ width: "100%", height: "470px", objectFit: "cover", objectPosition: "center" }} />
                    <h2>{historyBlockTranslations["theaterGarden"]}</h2>
                    <p>{historyBlockTranslations["theaterGardenInfo"]}</p>
                </a>
            </div>
            <p style={{ textAlign: "center" }}>
                <RedirectButton to="/history">{historyBlockTranslations["redirectButtonText"]}</RedirectButton>
            </p>
        </div>
    )
}

export default History;