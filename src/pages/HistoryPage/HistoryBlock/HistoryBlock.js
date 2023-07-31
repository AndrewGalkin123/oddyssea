import React, { useState, useEffect } from "react";
import viewFromOdessaFerrisWheel from "../../../assets/cultureImages/odessa-ferris-wheel.jpg";
import odessaFerrisWheel from "../../../assets/historyImages/picturepicture15282_22973.jpg"
import theaterGarden from "../../../assets/historyImages/opera.jpg"
import vorontsovskyLighthouse from "../../../assets/historyImages/lighthouse.jpg"
import pavelCathedral from "../../../assets/historyImages/16fdb71e-99c7-4956-ab24-4b22140744ff.jpeg"
import sailorWife from "../../../assets/historyImages/b6e734d7-ddd2-421d-9fb4-02d865950f9f.jpeg"
import opera from "../../../assets/historyImages/d2646277-0a23-4b43-bda9-ddd5dfaa5bc9.jpeg"
import potemkinStairs from "../../../assets/historyImages/1672697476_pro-dachnikov-com-p-potemkinskaya-lestnitsa-v-odesse-skolko-st-2.jpg";
import dukeMonument from "../../../assets/historyImages/55721a66-22b2-43bf-8eb6-315e5be369c6.jpeg"
import vorontsovPalace from "../../../assets/historyImages/36673ce0-abb7-4a65-a7ac-8200a41af649.jpeg"
import pushkinMonument from "../../../assets/historyImages/fb69fd5d-6c77-4c18-9deb-7d64479ddd3f.jpeg";
import passage from "../../../assets/historyImages/f8493e1f-aefc-4e00-8e2c-35e1b8a8f219.jpeg"
import victoryWings from "../../../assets/historyImages/victoryWings.png";
import victoryPark from "../../../assets/historyImages/victory-park-2.jpeg"
import vorontsovMonument from "../../../assets/historyImages/dc359f97-ea22-4ed3-84c7-242ca890f28b.jpeg";
import shahskyPalace from "../../../assets/historyImages/608863b2-392a-486d-bbc3-ef83b56e94d7.jpeg"
import shevchenkoPark from "../../../assets/historyImages/db6d1217-4e20-4064-a282-3b78f1e2efac.jpeg"
import deribasovskayaStreet from "../../../assets/historyImages/2477327b-91bf-48bc-968d-7eec7318ef3c.jpeg";
import seasideBoulevard from "../../../assets/historyImages/ab747d0b-7ba6-4f14-a651-420c6250e07f.jpeg"
import archaeologicalMuseum from "../../../assets/historyImages/0ac18c1a-0211-45be-a5a7-0ba878302f3e.jpeg";
import cityPark from "../../../assets/historyImages/4085e7ab-0b49-4bf2-bc2e-88ada4b4d628.jpeg"
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
              <img className="picture" src={odessaFerrisWheel} alt="lunapark" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["lunapark"]}</span>
            </a>
            <a className="photo_item" href="/vorontsov-lighthouse">
              <img className="picture" src={vorontsovskyLighthouse} alt="vorontsovLighthouse" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["vorontsovLighthouse"]}</span>
            </a>
            <a className="photo_item" href="/theater-garden">
              <img className="picture" src={theaterGarden} alt="theaterGarden" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["theaterGarden"]}</span>
            </a>
            <a className="photo_item" href="/paul-church">
              <img className="picture" src={pavelCathedral} alt="stPaulChurch" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["stPaulChurch"]}</span>
            </a>
            <a className="photo_item" href="/sailor-wife">
              <img className="picture" src={sailorWife} alt="sailor'sWife" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["sailor'sWife"]}</span>
            </a>
            <a className="photo_item" href="/opera">
              <img className="picture" src={opera} alt="opera" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["opera"]}</span>
            </a>
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

            <a className="photo_item" href="pushkin-monument">
              <img className="picture" src={pushkinMonument} alt="pushkinMonument" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["pushkinMonument"]}</span>
            </a>
            <a className="photo_item" href="/passage">
              <img className="picture" src={passage} alt="odessaPassage" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["odessaPassage"]}</span>
            </a>
            <a className="photo_item" href="/victory-wings">
              <img className="picture" src={victoryWings} alt="victoryWings" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["victoryWings"]}</span>
            </a>
            <a className="photo_item" href="/victory-park">
              <img className="picture" src={victoryPark} alt="victoryPark" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["victoryPark"]}</span>
            </a>
            <a className="photo_item" href="/vorontsov-monument">
              <img className="picture" src={vorontsovMonument} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["vorontsovMonument"]}</span>
            </a>
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
            <a className="photo_item" href="/seaside-boulevard">
              <img className="picture" src={seasideBoulevard} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["seasideBoulevard"]}</span>
            </a>
            <a className="photo_item" href="/archaeological-museum">
              <img className="picture" src={archaeologicalMuseum} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["odessaArchaeologicalMuseum"]}</span>
            </a>
            <a className="photo_item" href="/city-park">
              <img className="picture" src={cityPark} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">{general["deribasovskayaСityPark"]}</span>
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

