import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tokyo from './pages/Tokyo';
import Osaka from './pages/Osaka';
import Fukuoka from './pages/Fukuoka';
import Kyoto from './pages/Kyoto';
import Yufuin from './pages/Yufuin';
import Kumamoto from './pages/Kumamoto';
import Nagasaki from './pages/Nagasaki';
import Saporo from './pages/Saporo';
import Okinawa from './pages/Okinawa';
import Checklist from './pages/Checklist';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokyo" element={<Tokyo />} />
          <Route path="/osaka" element={<Osaka />} />
          <Route path="/fukuoka" element={<Fukuoka />} />
          <Route path="/kyoto" element={<Kyoto />} />
          <Route path="/yufuin" element={<Yufuin />} />
          <Route path="/kumamoto" element={<Kumamoto />} />
          <Route path="/nagasaki" element={<Nagasaki />} />
          <Route path="/saporo" element={<Saporo />} />
          <Route path="/okinawa" element={<Okinawa />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
