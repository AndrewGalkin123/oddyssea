import React from 'react';
import './BurgerMenu.css'
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import translations from "../../translations.json"

const BurgerMenu = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const burgerMenuTranslations  = translations.burgerMenu[currentLanguage];
        return (
            <div className="burger-menu">
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>

                <ul className="menubox">
                    <li><a className="menu-item" href="/about">{burgerMenuTranslations["aboutUs"]}</a></li>
                    <li><a className="menu-item" href="/about">{burgerMenuTranslations["projectHistory"]}</a></li>
                    <li><a className="menu-item" href="/aboutodessa">{burgerMenuTranslations["informationAboutOdessa"]}</a></li>
                    <li><a className="menu-item" href="/about">{burgerMenuTranslations["ourTeam"]}</a></li>
                    <li><a className="menu-item" href="#">{burgerMenuTranslations["usefulLinks"]}</a></li>
                    <li><a className="menu-item" href="/contacts">{burgerMenuTranslations["feedback"]}</a></li>
                    <li><a className="menu-item" href="/faq">{burgerMenuTranslations["frequentlyAskedQuestions"]}</a></li>
                    <li><a className="menu-item" href="/termsofuse">{burgerMenuTranslations["termsOfUse"]}</a></li>
                    <li><a className="menu-item" href="/termsofuse">{burgerMenuTranslations["copyright"]}</a></li>
                    
                </ul>
            </div>
        )
}

export default BurgerMenu;