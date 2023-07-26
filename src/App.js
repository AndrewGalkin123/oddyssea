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
import AmusementParkPage from './pages/AmusementParkPage/AmusementParkPage';
import VorontsovskyLighthouse from './pages/VorontsovskyLighthousePage/VorontsovskyLighthouse';
import TheaterGarden from './pages/TheaterGardenPage/TheaterGarden';
import PaulChurch from './pages/PaulChurchPage/PaulChurch';
import SailorWife from './pages/SailorWifePage/SailorWife';
import PotemkinStairs from './pages/PotemkinStairsPage/PotemkinStairs';
import Opera from './pages/OperaPage/Opera';
import DukeMonument from './pages/DukeMonumentPage/DukeMonument';
import VorontsovPalace from './pages/VorontsovPalacePage/VorontsovPalace';
import PushkinMonument from './pages/PushkinMonumentPage/PushkinMonument';
import Passage from './pages/PassagePage/Passage';
import VictoryWings from './pages/VictoryWingsPage/VictoryWings';
import VictoryPark from './pages/VictoryParkPage/VictoryPark';
import VorontsovMonument from './pages/VorontsovMonumentPage/VorontsovMonument';
import ShahskyPalace from './pages/ShahskyPalacePage/ShahskyPalace';
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
            <Route path='/amusement-park' element={<AmusementParkPage />} />
            <Route path='/vorontsov-lighthouse' element={<VorontsovskyLighthouse />} />
            <Route path='/theater-garden' element={<TheaterGarden />} />
            <Route path='/paul-church' element={<PaulChurch />} />
            <Route path='/sailor-wife' element={<SailorWife />} />
            <Route path='/opera' element={<Opera />} />
            <Route path='/potemkin-stairs' element={<PotemkinStairs />} />
            <Route path='/duke-monument' element={<DukeMonument />} />
            <Route path='/vorontsov-palace' element={<VorontsovPalace/>} />
            <Route path='/pushkin-monument' element={<PushkinMonument/>} />
            <Route path='/passage' element={<Passage/>} />
            <Route path='/victory-wings' element={<VictoryWings/>} />
            <Route path='/victory-park' element={<VictoryPark/>} />
            <Route path='/vorontsov-monument' element={<VorontsovMonument/>} />
            <Route path='/shahsky-palace' element={<ShahskyPalace/>} />
          </Routes>
          <Footer></Footer>
          <BackToTopButton />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
