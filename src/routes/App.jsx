import React from 'react';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import Home from '@pages/Home';
import CoinPage from '@pages/CoinPage';
import NotFound from '@pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
