import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import logo from "./anchor.png"
import "./Header.css"
import phoneIcon from "../../../assets/icons/icon-phone-call-5585856.png";
import BurgerMenu from "../../BurgerMenu/BurgerMenu"

const Header = () => {
  const { currentLanguage, handleTranslate } = useContext(LanguageContext);
  const headerTranslations = translations.header[currentLanguage];

  return (
    <header>
      <a href="/"><img id="main-logo" src={logo} alt="logo"></img></a>
      <nav>
        <ul>
          <li>
            <Link className="navigation-link" to="/history">{headerTranslations["history"]}</Link>
          </li>
          <li>
            <Link className="navigation-link" to="/culture">{headerTranslations["culture"]}</Link>
          </li>
          <li>
            <Link className="navigation-link" to="/photogallery">{headerTranslations["photogallery"]}</Link>
          </li>
        </ul>
      </nav>
      <button className="translator-button" onClick={handleTranslate}>{currentLanguage === "ru"
        ? "UK"
        : currentLanguage === "uk"
          ? "EN"
          : "RU"}</button>
      <a className="contacts-info" href="/contacts">
        <img src={phoneIcon} alt="contacts" />
      </a>
      <BurgerMenu></BurgerMenu>
    </header>
  );
};

export default Header;
