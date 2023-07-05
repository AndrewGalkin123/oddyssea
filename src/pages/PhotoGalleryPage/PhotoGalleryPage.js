import React, { useState, useEffect } from "react";
import "./PhotoGalleryPage.css"
import odessaFerrisWheel from "../../assets/cultureImages/odessa-ferris-wheel.jpg"
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext"
import translations from "../../translations.json"


const PhotoGalleryPage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const photoGalleryPageTranslations = translations.photoGalleryPage[currentLanguage];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



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
            return photoGalleryPageTranslations["shortTitle"];
        } else {
            return photoGalleryPageTranslations["title"];
        }
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
            <div className="content" style={{ maxWidth: "1650px", top: "30px" }}>

                <div
                    className="photogallery_item_container"
                    style={{ position: "relative", marginBottom: "100px" }}
                >
                   
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="photogallery_item">
                        <figure class="photogallery_effect">
                            <img src={odessaFerrisWheel} alt="odessaferriswheel" />
                            <figcaption>
                                <p>Одесса, Колесо Обозрения</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PhotoGalleryPage;