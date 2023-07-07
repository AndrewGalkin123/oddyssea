import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import littlePlanet from "../../assets/historyImages/little-planet.jpg";
import littlePlanet1 from "../../assets/historyImages/little-planet1.png";
import "./TheaterGardenPage.css";

const TheaterGardenPage = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const theaterGardenTranslations = translations.theaterGarden[currentLanguage];


  return (
    <div>
      <Scene>
        <Entity
        
          primitive="a-sky"
          src={littlePlanet}
          rotation="0 -90 0"
        />
        
        {/* Добавьте другие компоненты A-Frame */}
      </Scene>
      <div className="content" style={{ maxWidth: "1300px", top: "100px" }}>
        {/* Добавьте другой контент */}
      </div>
    </div>
  );
};

export default TheaterGardenPage;
