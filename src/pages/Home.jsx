import React from 'react';
import CoinsTable from '../containers/CoinsTable';
import HeroText from '../components/HeroText';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import '../styles/pages/Home.css';

function Home() {
  return (
    <main className="home">
      <section>
        <HeroText />
        <SearchBar />
      </section>
      <section className="coins-info">
        <div className="filters">
          <Filter box="blue" optionList="Global" />
          <Filter box="orange" optionList="USD" />
          <Filter box="blue" optionList="Exchange" />
          <Filter box="orange" optionList="Category" />
          <Filter box="blue" optionList="Blockchain" />
        </div>
        <CoinsTable />
      </section>
    </main>
  );
}

export default Home;
