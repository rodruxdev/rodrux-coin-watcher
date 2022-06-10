import React from 'react';
import Footer from '@containers/Footer';
import Header from '@containers/Header';
// import Home from '@pages/Home';
import CoinPage from '@pages/CoinPage';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <CoinPage />
      <Footer />
    </>
  );
}

export default App;
