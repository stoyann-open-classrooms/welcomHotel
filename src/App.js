import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import CustomerServices from './pages/CustomerServices';
import HotelExperience from './pages/HotelExperience';
import HouseKeepingPrefference from './pages/HouseKeepingPrefference';
import ScrollToTop from './components/ScrollToTop.';
import Restaurant from './pages/Restaurant';
import About from './pages/About';
import Experience1 from './pages/Experience1';
import Experience2 from './pages/Experience2';
import Experience3 from './pages/Experience3';
import Experience4 from './pages/Experience4';
import Experience5 from './pages/Experience5';
import ThanksForYourSharing from './pages/ThanksForYourSharing';
import Luggage from './pages/Luggage';
import Laundry from './pages/Laundry';
import Assistance from './pages/Assistance';
import Checkout from './pages/Checkout';




function App() {
  return (
    <Router>
       <ScrollToTop />
        <Header />
      <div className='container-page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer-services" element={<CustomerServices />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/need-assistance" element={<Assistance/>} />
          <Route path="/hotel-experience" element={<HotelExperience />} />
          <Route path="/experience-1" element={<Experience1 />} />
          <Route path="/experience-2" element={<Experience2 />} />
          <Route path="/experience-3" element={<Experience3 />} />
          <Route path="/experience-4" element={<Experience4 />} />
          <Route path="/experience-5" element={<Experience5 />} />
          <Route path="/thanks-for-sharring" element={<ThanksForYourSharing/>} />
          <Route path="/house-keeping-prefference" element={< HouseKeepingPrefference/>} />
          <Route path="/prepare-my-checkout" element={< Checkout/>} />
          <Route path="/retrieve-my-luggage" element={< Luggage/>} />
          <Route path="/collecte-laundry" element={<Laundry/>} />
          <Route path="/about" element={< About/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
