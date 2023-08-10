import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext"
import translations from "../../translations.json"
import "./CulturePage.css"


const CulturePage = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const culturePageTranslations = translations.culturePage[currentLanguage];
    const general = translations.general[currentLanguage];

    const culturalKeys = [
        "historicalheritage",
        "architecture",
        "literaryHeritage",
        "musicAndFestivals",
        "cuisineAndGastronomy",
        "languagesAndDialects",
        "folkTraditions",
        "marine",
        "contemporaryArts",
        "localLifestyles",
        "culturalProjects",
        "multinationalInfluence",
        "touristAttraction",
        "theatersAndArt",
        "museumsAndExhibitions"
    ];

    return (
        <div>
            <div className="list">
                <div className="list-container">
                    {culturalKeys.map(key => (
                        <div className="list-item" key={key}>
                            {general[key]}
                        </div>
                    ))}
                </div>
            </div>
            <div className="content" style={{
                maxWidth: "1600px",
                fontSize: "20px",
                color: "#515151",
                marginBottom: "30px",
                marginTop: "120px"
              
            }}>
                <h1>{general["historicalheritageFull"]}</h1><br></br>
                <p>{culturePageTranslations["Odessa"]}</p><br></br>
                <p>{culturePageTranslations["FoundationAndEarlyYears"]}</p><br></br>
                <p>{culturePageTranslations["MaritimePortStatus"]}</p><br></br>
                <p>{culturePageTranslations["SignificantBuildingsAndSquares"]}</p><br></br>
                <p>{culturePageTranslations["LiteraryConnections"]}</p><br></br>
                <p>{culturePageTranslations["ContemporarySignificance"]}</p><br></br>
                <h1>{general["architectureFull"]}</h1><br></br>

                <p>{culturePageTranslations["OdessaRichHistory"]}</p><br></br>
                <p>{culturePageTranslations["OperaHouse"]}</p><br></br>
                <p>{culturePageTranslations["ArtNouveau"]}</p><br></br>
                <p>{culturePageTranslations["SeasidePedestrianZones"]}</p><br></br>
                <p>{culturePageTranslations["LivingMuseum"]}</p><br></br>
                <h1>{general["literaryHeritageFull"]}</h1><br></br>

                <p>{culturePageTranslations["OdessaLiteraryHeritage"]}</p><br></br>
                <p>{culturePageTranslations["Ilfpetrov"]}</p>
                <p>{culturePageTranslations["TwelveChairs"]}</p>
                <p>{culturePageTranslations["GoldenCalf"]}</p><br></br>
                <p>{culturePageTranslations["JosephBrods"]}</p>
                <p>{culturePageTranslations["BrodskyVerses"]}</p><br></br>
                <p>{culturePageTranslations["OtherWriters"]}</p><br></br>
                <p>{culturePageTranslations["InspirationAndCreativity"]}</p><br></br>
                <p>{culturePageTranslations["LiteraryLegacy"]}</p><br></br>
                <p>{culturePageTranslations["OdessaMuse"]}</p><br></br>

                <h1>{general["musicAndFestivalsFull"]}</h1><br></br>
                <p>{culturePageTranslations["MusicalTraditions"]}</p>
                <p>{culturePageTranslations["MusicalTraditionsContent"]}</p><br></br>
                <p>{culturePageTranslations["FamousMusicians"]}</p><br></br>
                <p>{culturePageTranslations["CharlesAznavour"]}</p><br></br>
                <p>{culturePageTranslations["LeonidUtesov"]}</p><br></br>
                <p>{culturePageTranslations["IgorKrut"]}</p><br></br>
                <p>{culturePageTranslations["OdessaQuartet"]}</p><br></br>
                <p>{culturePageTranslations["MusicFestivals"]}</p>
                <p>{culturePageTranslations["KoktebelJazz"]}</p>
                <p>{culturePageTranslations["GoldenKeyOperetta"]}</p>
                <p>{culturePageTranslations["OdessaJazzHolidays"]}</p><br></br>
                <p>{culturePageTranslations["DiverseConcerts"]}</p>
                <p>{culturePageTranslations["Conclusion"]}</p><br></br>

                <h1>{general["cuisineAndGastronomyFull"]}</h1><br></br>
                <p>{culturePageTranslations["culinaryTraditions"]}</p>
                <p>{culturePageTranslations["uniqueFeatures"]}</p><br></br>
                <p>{culturePageTranslations["odessaCuisine"]}</p><br></br>
                <p>{culturePageTranslations["odessaSalad"]}</p><br></br>
                <p>{culturePageTranslations["forshmak"]}</p><br></br>
                <p>{culturePageTranslations["influenceOfCultures"]}</p>
                <p>{culturePageTranslations["multinationalCharacter"]}</p><br></br>
                <p>{culturePageTranslations["famousRestaurants"]}</p>
                <p>{culturePageTranslations["odessaRestaurants"]}</p>
                <p>{culturePageTranslations["restaurantKumpel"]}</p>
                <p>{culturePageTranslations["restaurantPalata6"]}</p>
                <p>{culturePageTranslations["cafeKotofey"]}</p>
                <p>{culturePageTranslations["cafeVarenichnaya1"]}</p><br></br>
                <p>{culturePageTranslations["odessaCuisineExperience"]}</p><br></br>

                
                <h1>{general["languagesAndDialectsFull"]}</h1><br></br>
                <p>{culturePageTranslations["linguisticDiversity"]}</p><br></br>
                <p>{culturePageTranslations["odessaDialect"]}</p>
                <p>{culturePageTranslations["odessaDialectDescription"]}</p><br></br>
                <p>{culturePageTranslations["russianLanguage"]}</p>
                <p>{culturePageTranslations["multilingualSociety"]}</p><br></br>
                <p>{culturePageTranslations["culturalHeritage"]}</p>
                <p>{culturePageTranslations["conclusion"]}</p><br></br>
           

                <h1>{general["folkTraditionsFull"]}</h1><br></br>
                <h1>{general["marineFull"]}</h1><br></br>
                <h1>{general["contemporaryArtsFull"]}</h1><br></br>
                <h1>{general["localLifestylesFull"]}</h1><br></br>
                <h1>{general["culturalProjectsFull"]}</h1><br></br>
                <h1>{general["multinationalInfluenceFull"]}</h1><br></br>
                <h1>{general["touristAttractionFull"]}</h1><br></br>
                <h1>{general["theatersAndArtFull"]}</h1><br></br>
                <h1>{general["museumsAndExhibitionsFull"]}</h1><br></br>
            </div>
        </div>
    );
}

export default CulturePage;

