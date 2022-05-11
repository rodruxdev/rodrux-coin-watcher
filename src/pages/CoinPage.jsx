import React from 'react';
import SearchBar from '@components/SearchBar';
import CoinPrice from '@components/CoinPrice';
import CoinDescription from '@components/CoinDescription';
import CoinMoreInfo from '@components/CoinMoreInfo';
import CoinSelector from '@components/CoinSelector';
import CoinConversion from '@components/CoinConversion';
import SwitchButton from '@components/SwitchButton';
import ExchangePair from '@containers/ExchangePair';
import ExchangeSelector from '@components/ExchangeSelector';
import PairSelector from '@components/PairSelector';
import PairInfo from '@components/PairInfo';
import RelatedCoins from '@containers/RelatedCoins';
import CoinTitle from '@components/CoinTitle';
import CoinCard from '@containers/CoinCard';
import '@styles/pages/CoinPage.css';

function CoinPage() {
  return (
    <main className="coin-page">
      <section className="search">
        <SearchBar />
      </section>
      <section>
        <CoinPrice />
        <div className="coin-info">
          <CoinDescription />
          <div className="coin-info__container">
            <h4>More Information</h4>
            <CoinMoreInfo />
            <CoinMoreInfo />
            <CoinMoreInfo />
          </div>
        </div>
        <div className="flexb">
          <div className="coin-convertor">
            <div className="coin-convertor__container">
              <CoinSelector />
              <CoinConversion />
            </div>
            <SwitchButton />
            <div className="coin-convertor__container">
              <CoinSelector />
              <CoinConversion />
            </div>
          </div>
          <div>
            <h4>Exchange Pair</h4>
            <div className="exchanges-container">
              <ExchangePair>
                <div className="exchange-info__container">
                  <ExchangeSelector />
                  <PairSelector />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo />
                  <PairInfo />
                </div>
              </ExchangePair>
              <ExchangePair>
                <div className="exchange-info__container">
                  <ExchangeSelector />
                  <PairSelector />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo />
                  <PairInfo />
                </div>
              </ExchangePair>
              <ExchangePair>
                <div className="exchange-info__container">
                  <ExchangeSelector />
                  <PairSelector />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo />
                  <PairInfo />
                </div>
              </ExchangePair>
            </div>
          </div>
        </div>
      </section>
      <RelatedCoins>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle />
          <div>
            <PairInfo />
            <PairInfo />
          </div>
        </CoinCard>
      </RelatedCoins>
    </main>
  );
}

export default CoinPage;
