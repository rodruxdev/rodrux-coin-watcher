import React, { useEffect } from 'react';
import CoinsTable from '@containers/CoinsTable';
import HeroText from '@components/HeroText';
import SearchBar from '@components/SearchBar';
import TableRow from '@components/TableRow';
import ErrorMessage from '@containers/ErrorMessage';
import LoadingTable from '@containers/LoadingTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '@slices/tableSlice';
import { cleanError } from '@slices/uiSlice';
import '@styles/pages/Home.css';

function Home() {
  const coins = useSelector((state) => state.table.coins);
  const { loadingTable: loading, error } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.section) {
      dispatch(cleanError());
    }
    dispatch(fetchCoins());
  }, []);
  return (
    <main className="home">
      <section>
        <HeroText />
        <SearchBar />
      </section>
      {error.section === 'table' ? (
        <section>
          <ErrorMessage />
        </section>
      ) : (
        <section className="coins-info">
          {loading ? (
            <LoadingTable />
          ) : (
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
          )}
        </section>
      )}
    </main>
  );
}

export default Home;
