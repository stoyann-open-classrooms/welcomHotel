import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import Error404 from './pages/Error404';
import Success from './pages/Success';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
    
      <div className='container-page'>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="success/:id" element={<Success />} />
          <Route path="/customer-services/:id" element={<CustomerServices />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/need-assistance/:id" element={<Assistance />} />
          <Route path="/hotel-experience/:id" element={<HotelExperience />} />
          <Route path="/experience-1/:id" element={<Experience1 />} />
          <Route path="/experience-2/:id" element={<Experience2 />} />
          <Route path="/experience-3/:id" element={<Experience3 />} />
          <Route path="/experience-4/:id" element={<Experience4 />} />
          <Route path="/experience-5/:id" element={<Experience5 />} />
          <Route path="/thanks-for-sharring/:id" element={<ThanksForYourSharing />} />
          <Route path="/house-keeping-prefference/:id" element={<HouseKeepingPrefference />} />
          <Route path="/prepare-my-checkout/:id" element={<Checkout />} />
          <Route path="/retrieve-my-luggage/:id" element={<Luggage />} />
          <Route path="/collecte-laundry/:id" element={<Laundry />} />
          <Route path="/about/:id" element={<About />} />
          <Route
            path="/error/:id"
            element={<Error404 />} // Page d'erreur
            />
          <Route path="/*" element={<Error404 />} /> {/* Redirection vers la page d'erreur pour tous les autres chemins non définis */}
          <Route path="/undefined" element={<Error404 />} /> {/* Redirection vers la page d'erreur pour tous les autres chemins non définis */}
        </Routes>
      </div>
      <Footer />
    </Router>
         <ToastContainer />
            </>
  );
}

export default App;