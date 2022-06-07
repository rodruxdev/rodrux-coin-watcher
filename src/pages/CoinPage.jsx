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
  const optionsConvertor = ['BTC', 'ETH', 'BNB'];
  const exchanges = ['Binance', 'Bitso', 'Otro'];
  const pairs = ['BTC/USD', 'ETH/USD', 'BNB/USD'];
  return (
    <main className="coin-page">
      <section className="search">
        <SearchBar />
      </section>
      <section>
        <div className="coin-info">
          <div>
            <CoinPrice title="Bitcoin(BTC)" image="/">
              $12345.67 USD
            </CoinPrice>
            <CoinDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              odio eos. Eveniet hic fugiat deleniti deserunt optio cum mollitia
              accusantium quidem, nam libero et, voluptatum praesentium nisi
              velit obcaecati totam?
            </CoinDescription>
          </div>
          <div className="coin-info__container">
            <h4>More Information</h4>
            <CoinMoreInfo title="Market Cap">$772504060</CoinMoreInfo>
            <CoinMoreInfo title="Market Cap">$772504060</CoinMoreInfo>
            <CoinMoreInfo title="Market Cap">$772504060</CoinMoreInfo>
          </div>
        </div>
        <div className="flexb">
          <div className="coin-convertor">
            <div className="coin-convertor__container">
              <CoinSelector options={optionsConvertor} />
              <CoinConversion />
            </div>
            <SwitchButton />
            <div className="coin-convertor__container">
              <CoinSelector options={optionsConvertor} />
              <CoinConversion />
            </div>
          </div>
          <div>
            <h4>Exchange Pair</h4>
            <div className="exchanges-container">
              <ExchangePair image="/" exchange="Binance">
                <div className="exchange-info__container">
                  <ExchangeSelector options={exchanges} />
                  <PairSelector options={pairs} />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo title="Price">$12345.67</PairInfo>
                  <PairInfo title="Price">$12345.67</PairInfo>
                </div>
              </ExchangePair>
              <ExchangePair image="/" exchange="Binance">
                <div className="exchange-info__container">
                  <ExchangeSelector options={exchanges} />
                  <PairSelector options={pairs} />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo title="Price">$12345.67</PairInfo>
                  <PairInfo title="Price">$12345.67</PairInfo>
                </div>
              </ExchangePair>
              <ExchangePair image="/" exchange="Binance">
                <div className="exchange-info__container">
                  <ExchangeSelector options={exchanges} />
                  <PairSelector options={pairs} />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo title="Price">$12345.67</PairInfo>
                  <PairInfo title="Price">$12345.67</PairInfo>
                </div>
              </ExchangePair>
            </div>
          </div>
        </div>
      </section>
      <RelatedCoins>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle title="Bitcoin(BTC)" image="/" />
          <div>
            <PairInfo title="Price">$12345.67</PairInfo>
            <PairInfo title="Price">$12345.67</PairInfo>
          </div>
        </CoinCard>
      </RelatedCoins>
    </main>
  );
}

export default CoinPage;
