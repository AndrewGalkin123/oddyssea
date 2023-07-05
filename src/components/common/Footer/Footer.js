import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import translations from "../../../translations.json";
import "./Footer.css"

const Footer = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const footerTranslations = translations.footer[currentLanguage];
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>{footerTranslations["companyHistory"]}</h4>
            <ul>
              <li><Link to="/about">{footerTranslations["aboutUs"]}</Link></li>
              <li><Link to="#">{footerTranslations["ourTeam"]}</Link></li>
              <li><Link to="/about">{footerTranslations["projectHistory"]}</Link></li>
              <li><Link to="/contacts">{footerTranslations["contacts"]}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{footerTranslations["cityInfo"]}</h4>
            <ul>
              <li><Link to="/aboutodessa">{footerTranslations["cityInfoDesc"]}</Link></li>
              <li><Link to="/history">{footerTranslations["cityAttractions"]}</Link></li>
              <li><Link to="/photogallery">{footerTranslations["placesToVisit"]}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{footerTranslations["linksAndInfo"]}</h4>
            <ul>
              <li><Link to="#">{footerTranslations["usefulLinks"]}</Link></li>
              <li><Link to="/termsofuse">{footerTranslations["termsOfUse"]}</Link></li>
              <li><Link to="/privacypolicy">{footerTranslations["privacyPolicy"]}</Link></li>
              <li><Link to="/termsofuse">{footerTranslations["copyright"]}</Link></li>
              <li><Link to="/faq">{footerTranslations["faq"]}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{footerTranslations["socialLinks"]}</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
