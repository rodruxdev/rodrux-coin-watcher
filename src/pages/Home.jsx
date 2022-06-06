import React from 'react';
import CoinsTable from '@containers/CoinsTable';
import HeroText from '@components/HeroText';
import SearchBar from '@components/SearchBar';
import TableRow from '@components/TableRow';
import { useSelector } from 'react-redux';
import '@styles/pages/Home.css';

function Home() {
  const coins = useSelector((state) => state.table.coins);
  return (
    <main className="home">
      <section>
        <HeroText />
        <SearchBar />
      </section>
      <section className="coins-info">
        <CoinsTable>
          {coins.map((coin) => {
            const {
              coinId,
              name,
              ticker,
              // images,
              price,
              marketCap,
              percentageChanges,
              ath,
              athPercentage,
            } = coin;
            return (
              <TableRow
                coinId={coinId}
                name={name}
                ticker={ticker}
                price={price}
                marketCap={marketCap}
                percentageChanges={percentageChanges}
                ath={ath}
                athPercentage={athPercentage}
              />
            );
          })}
        </CoinsTable>
      </section>
    </main>
  );
}

export default Home;
