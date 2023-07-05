import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import CulturePage from './pages/CulturePage/CulturePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage/PhotoGalleryPage';
import FAQ from './pages/FAQ/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicyPage/PrivacyPolicy';
import UseTerms from './pages/UseTermsPage/Useterms';
import AboutOdessa from './pages/AboutOdessaPage/AboutOdessa';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import { LanguageProvider } from "./contexts/LanguageContext";


function App() {
  return (
    <Router>
      <LanguageProvider>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/photogallery" element={<PhotoGalleryPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofuse" element={<UseTerms />} />
            <Route path='/aboutodessa' element={<AboutOdessa />} />
          </Routes>
          <Footer></Footer>
          <BackToTopButton />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
