import React from "react";
import History from "./components/History/History";
import Culture from "./components/Culture/Culture";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import OdessaMap from "./components/OdessaMap/OdessaMap";
import Slider from "./components/Slider/Slider";


const HomePage = () => {
    return (
        <div>
            <main>
                <Slider></Slider>
                <History></History>
                <Culture></Culture>
                <OdessaMap></OdessaMap>
                <PhotoGallery></PhotoGallery>
            </main>
        </div>

        //сделать коллекции в самом низу
    )
}

export default HomePage;