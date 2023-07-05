import React, { createContext, useState } from "react";
import translations from "../translations.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("currentLanguage"); // Попытка получить сохраненный язык из хранилища
  const [currentLanguage, setCurrentLanguage] = useState(
    storedLanguage || "ru" // Установка сохраненного языка или значения по умолчанию
  );

  const handleTranslate = () => {
    const languages = ["ru", "uk", "en"];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLanguage = languages[nextIndex];
    setCurrentLanguage(newLanguage);
    localStorage.setItem("currentLanguage", newLanguage); // Сохранение языка в хранилище
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        translations: translations[currentLanguage],
        handleTranslate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
