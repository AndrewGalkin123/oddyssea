import React, { useState, useEffect } from "react";
import "./Culture.css";
import RedirectButton from "../../../../components/RedirectButton/RedirectButton";
import odessaFerrisWheel from "../../../../assets/cultureImages/odessa-ferris-wheel.jpg";
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import translations from "../../../../translations.json"

const Culture = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const cultureBlockTranslations  = translations.cultureBlock[currentLanguage];
  return (
    <div id="culture">
      <br />
      <div className="title">
        <hr />
        <span>{cultureBlockTranslations["title"]}</span>
      </div>
      <br />
      <br />
      <br />

      <div className="content" style={{ maxWidth: "1290px" }}>
        <div
          id="culture_photos_index"
          style={{
            position: "relative",
            textAlign: "center",
            letterSpacing: "16px",
            marginBottom: "20px",
            overflow: "hidden",
            height: "640px"
          }}
        >
          <div style={{ position: "absolute", left: "-20px", top: "0", right: "-20px" }}>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
            <a className="photo_item">
              <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
              <span className="photo_block-item"></span>
              <span className="photo_item_title">Одесса, Черноморск</span>
            </a>
          </div>
        </div>

        <p style={{ textAlign: "center" }}>
          <RedirectButton to="/culture">{cultureBlockTranslations["redirectButtonText"]}</RedirectButton>
        </p>
      </div>
    </div>
  );
};

export default Culture;
