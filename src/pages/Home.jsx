import React, { useEffect } from 'react';
import CoinsTable from '@containers/CoinsTable';
import HeroText from '@components/HeroText';
import SearchBar from '@components/SearchBar';
import TableRow from '@components/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '@slices/tableSlice';
import '@styles/pages/Home.css';
// import LoadingTable from '../containers/LoadingTable';

function Home() {
  const coins = useSelector((state) => state.table.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <main className="home">
      <section>
        <HeroText />
        <SearchBar />
      </section>
      <section className="coins-info">
        {/* <LoadingTable /> */}
        <CoinsTable>
          {coins.map((coin) => {
            const {
              coinId,
              coinRank,
              name,
              ticker,
              image,
              price,
              marketCap,
              percentageChanges,
              ath,
              athPercentage,
            } = coin;
            return (
              <TableRow
                coinId={coinId}
                coinRank={coinRank}
                name={name}
                ticker={ticker}
                image={image}
                price={price}
                marketCap={marketCap}
                percentageChanges={percentageChanges}
                ath={ath}
                athPercentage={athPercentage}
                key={`coin-${coinId}`}
              />
            );
          })}
        </CoinsTable>
      </section>
    </main>
  );
}

export default Home;
