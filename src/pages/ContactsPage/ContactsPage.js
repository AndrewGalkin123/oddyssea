import React from 'react';
import './ContactsPage.css';
import axios from 'axios';
import { useContext } from "react";
import { LanguageContext } from '../../contexts/LanguageContext';
import translations from "../../translations.json"

const ContactsPage = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const contactsPageTranslations = translations.contactsPage[currentLanguage];

  const submitForm = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    try {
        await axios.post('http://localhost:3001/submit-form', { name, email, message });
        console.log('Data sent successfully');
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
        // Дополнительный код или обработка после успешной отправки данных
      } catch (error) {
        console.error('Error sending data:', error);
        // Обработка ошибки при отправке данных
      }
      
  };

  return (
    <div>
      <div className='contacts-page'>
        <div className='contact-page'>
          <h2>Oddyssea</h2>
          <div className='contact-info'>
            <div className='item'>
              <i className='icon fas fa-home'></i>
              {contactsPageTranslations["location"]}
            </div>
            <div className='item'>
              <i className='icon fas fa-phone'></i>
              +38091429421
            </div>
            <div className='item'>
              <i className='icon fas fa-envelope'></i>
              email@address.com
            </div>
            <div className='item'>
              <i className='icon fas fa-clock'></i>
              {contactsPageTranslations["workTime"]}
            </div>
          </div>
          <form className='contact-form' onSubmit={submitForm}>
            <input type='text' className='textb' placeholder={contactsPageTranslations["yourNamePlaceHolder"]} name='name' />
            <input type='email' className='textb' placeholder={contactsPageTranslations["yourEmailPlaceHolder"]} name='email' />
            <textarea placeholder={contactsPageTranslations["yourMessagePlaceHolder"]} name='message' />
            <input type='submit' className='btn' value={contactsPageTranslations["send"]} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
