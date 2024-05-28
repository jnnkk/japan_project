import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tokyo from './pages/Tokyo';
import Osaka from './pages/Osaka';
import Fukuoka from './pages/Fukuoka';
import Beppu from './pages/Beppu';
import Yufuin from './pages/Yufuin';
import Kumamoto from './pages/Kumamoto';
import Nagasaki from './pages/Nagasaki';
import Saporo from './pages/Saporo';
import Okinawa from './pages/Okinawa';

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
          <Route path="/beppu" element={<Beppu />} />
          <Route path="/yufuin" element={<Yufuin />} />
          <Route path="/kumamoto" element={<Kumamoto />} />
          <Route path="/nagasaki" element={<Nagasaki />} />
          <Route path="/saporo" element={<Saporo />} />
          <Route path="/okinawa" element={<Okinawa />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
