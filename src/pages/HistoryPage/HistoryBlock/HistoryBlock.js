import React, { useState, useEffect } from "react";
import viewFromOdessaFerrisWheel from "../../../assets/cultureImages/odessa-ferris-wheel.jpg";
import odessaFerrisWheel from "../../../assets/historyImages/picturepicture15282_22973.jpg"
import theaterGarden from "../../../assets/historyImages/opera.jpg"
import vorontsovskyLighthouse from "../../../assets/historyImages/lighthouse.jpg"
import pavelCathedral from "../../../assets/historyImages/pavelCathedral.jpg"
import sailorWife from "../../../assets/historyImages/sailorWife.jpg"
import opera from "../../../assets/historyImages/d2646277-0a23-4b43-bda9-ddd5dfaa5bc9.jpeg"
import "./HistoryBlock.css";
import squareType from "../../../assets/icons/squares.png";
import listType from "../../../assets/icons/free-icon-checklist-876749.png";
import HistoryBlockListType from "../HistoryBlockListType/HistoryListType";
import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext"
import translations from "../../../translations.json"


const HistoryBlock = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const historyBlockTranslations  = translations.historyPage[currentLanguage];
  const general = translations.general[currentLanguage];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHistoryListType, setShowHistoryListType] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTitleText = () => {
    if (windowWidth <= 500) {
      return historyBlockTranslations["shortTitle"];
    } else {
      return historyBlockTranslations["title"];
    }
  };

  const handleListTypeClick = () => {
    setShowHistoryListType(true);
  };

  const handleSquareListTypeClick = () => {
    setShowHistoryListType(false);
  };

  return (
    <div>
      <div
        style={{
          padding: "0 20px",
          position: "relative",
          maxWidth: "1900px",
          margin: "0 auto",
          top: "110px"
        }}
      >
        <h1 className="headline">{getTitleText()}</h1>
        <div className="filters">
          <a id="square_list_type" onClick={handleSquareListTypeClick}>
            <img src={squareType} alt="Square List Type" />
          </a>
          <a id="list_type" onClick={handleListTypeClick}>
            <img src={listType} alt="List Type" />
          </a>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          marginTop: "120px",
          color: "#dfdfdf",
          border: "0",
          borderBottom: "1px solid"
        }}
      ></hr>
      <div className="content" style={{ maxWidth: "1900px", top: "30px" }}>
        {!showHistoryListType && (
          <div
            className="photo_item_container"
            style={{ position: "relative"}}
          >
             <a className="photo_item" href="/amusement-park">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["lunapark"]}</span>
            </a>
            <a className="photo_item" href="/vorontsov-lighthouse">
              <img className="picture" src={vorontsovskyLighthouse} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["vorontsovLighthouse"]}</span>
            </a>
            <a className="photo_item" href="/theater-garden">
              <img className="picture" src={theaterGarden} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["theaterGarden"]}</span>
            </a>
            <a className="photo_item" href="/paul-church">
              <img className="picture" src={pavelCathedral} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["stPaulChurch"]}</span>
            </a>
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
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>

            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>

            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
              <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>  <a className="photo_item">
              <img className="picture" src={viewFromOdessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
          </div>
        )}
        {showHistoryListType && <HistoryBlockListType />}
      </div>
    </div>
  );
};

export default HistoryBlock;

