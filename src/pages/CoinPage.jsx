import React from 'react';
import SearchBar from '../components/SearchBar';
import CoinPrice from '../components/CoinPrice';
import CoinDescription from '../components/CoinDescription';
import CoinMoreInfo from '../components/CoinMoreInfo';
import CoinSelector from '../components/CoinSelector';
import CoinConversion from '../components/CoinConversion';
import SwitchButton from '../components/SwitchButton';
import ExchangePair from '../containers/ExchangePair';
import ExchangeSelector from '../components/ExchangeSelector';
import PairSelector from '../components/PairSelector';
import PairInfo from '../components/PairInfo';
import RelatedCoins from '../containers/RelatedCoins';
import CoinTitle from '../components/CoinTitle';
import CoinCard from '../containers/CoinCard';

function CoinPage() {
  return (
    <main>
      <section>
        <SearchBar />
      </section>
      <section>
        <CoinPrice />
        <CoinDescription />
        <div>
          <h4>More Information</h4>
          <CoinMoreInfo />
          <CoinMoreInfo />
          <CoinMoreInfo />
        </div>
        <div>
          <div>
            <CoinSelector />
            <CoinConversion />
          </div>
          <SwitchButton />
          <div>
            <CoinSelector />
            <CoinConversion />
          </div>
        </div>
        <div>
          <h4>Exchange Pair</h4>
          <ExchangePair>
            <div>
              <ExchangeSelector />
              <PairSelector />
            </div>
            <div>
              <PairInfo />
              <PairInfo />
            </div>
          </ExchangePair>
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
      </RelatedCoins>
    </main>
  );
}

export default CoinPage;
