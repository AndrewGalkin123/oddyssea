import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import vorontsovskyLighthouse from "../../assets/historyImages/lighthouse.jpg"
import pavelCathedral from "../../assets/historyImages/pavelCathedral.jpg"
import theaterGarden from "../../assets/historyImages/opera.jpg"


const SailorWife = () => { 
    return( 
        <div>
            <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!4v1689619124310!6m8!1m7!1sCAoSLEFGMVFpcE1tenpWRW1EVUM4R21SSkNhSzZUM3lLSUdrVFMxWWkyV2EteDdy!2m2!1d46.4918329!2d30.747956!3f47.35464365894471!4f2.5414540386990865!5f0.4000000000000002" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default SailorWife;