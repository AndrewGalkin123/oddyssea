import React, { useState } from "react";
import "./FAQ.css";
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import translations from "../../translations.json"

const FAQ = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const faqTranslations = translations.faqPage[currentLanguage];
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="content" style={{ maxWidth: "1300px" }}>
        <div className="faq_wrapper">
          <h1>{faqTranslations["frequentlyAskedQuestions"]}</h1>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 0 ? "active" : ""}`}
              onClick={() => toggleAccordion(0)}
            >
              {faqTranslations["question1"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 0 ? "active" : ""}`}
              style={{ display: activeAccordion === 0 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer1"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              {faqTranslations["question2"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 1 ? "active" : ""}`}
              style={{ display: activeAccordion === 1 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer2"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              {faqTranslations["question3"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 2 ? "active" : ""}`}
              style={{ display: activeAccordion === 2 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer3"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              {faqTranslations["question4"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 3 ? "active" : ""}`}
              style={{ display: activeAccordion === 3 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer4"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 4 ? "active" : ""}`}
              onClick={() => toggleAccordion(4)}
            >
              {faqTranslations["question5"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 4 ? "active" : ""}`}
              style={{ display: activeAccordion === 4 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer5"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 5 ? "active" : ""}`}
              onClick={() => toggleAccordion(5)}
            >
             {faqTranslations["question6"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 5 ? "active" : ""}`}
              style={{ display: activeAccordion === 5 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer6"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 6 ? "active" : ""}`}
              onClick={() => toggleAccordion(6)}
            >
              {faqTranslations["question7"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 6 ? "active" : ""}`}
              style={{ display: activeAccordion === 6 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer7"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 7 ? "active" : ""}`}
              onClick={() => toggleAccordion(7)}
            >
             {faqTranslations["question8"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 7 ? "active" : ""}`}
              style={{ display: activeAccordion === 7 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer8"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 8 ? "active" : ""}`}
              onClick={() => toggleAccordion(8)}
            >
              {faqTranslations["question9"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 8 ? "active" : ""}`}
              style={{ display: activeAccordion === 8 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer9"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 9 ? "active" : ""}`}
              onClick={() => toggleAccordion(9)}
            >
              {faqTranslations["question10"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 9 ? "active" : ""}`}
              style={{ display: activeAccordion === 9 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer10"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 10 ? "active" : ""}`}
              onClick={() => toggleAccordion(10)}
            >
              {faqTranslations["question11"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 10 ? "active" : ""}`}
              style={{ display: activeAccordion === 10 ? "block" : "none" }}
            >
              <p>
              {faqTranslations["answer11"]}
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 11 ? "active" : ""}`}
              onClick={() => toggleAccordion(11)}
            >
              {faqTranslations["question12"]}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 11 ? "active" : ""}`}
              style={{ display: activeAccordion === 11 ? "block" : "none" }}
            >
              <p>
                {faqTranslations["answer12"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
