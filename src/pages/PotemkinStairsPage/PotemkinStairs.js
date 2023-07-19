import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import odessaFerrisWheel from "../../assets/historyImages/picturepicture15282_22973.jpg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"

const PotemkinStairs = () => {
    return( 
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689792567937!6m8!1m7!1sCAoSLEFGMVFpcE94WEZZdzdib2wtY3otNmNkcnJ2bVhleTBHOXA2SkUwcldjbHlq!2m2!1d46.48871607577404!2d30.7423053619041!3f234.84650723792979!4f-0.22293147732713692!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default PotemkinStairs;