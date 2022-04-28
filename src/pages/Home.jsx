import React from 'react';
import CoinsTable from '../containers/CoinsTable';
import HeroText from '../components/HeroText';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

function Home() {
  return (
    <main>
      <section>
        <HeroText />
        <SearchBar />
      </section>
      <section>
        <div>
          <Filter />
        </div>
        <CoinsTable />
      </section>
    </main>
  );
}

export default Home;
