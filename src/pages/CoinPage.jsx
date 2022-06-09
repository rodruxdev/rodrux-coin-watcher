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
import { useSelector } from 'react-redux';

function CoinPage() {
  const coinInfo = useSelector((state) => state.coin);
  const convertorInfo = useSelector((state) => state.convertor);
  const relatedCoins = useSelector((state) => state.relatedCoins.coins);
  const optionsConvertor = convertorInfo.conversionOptions.map(
    (option) => option.coin
  );
  const mainCoin = [convertorInfo.coin];
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
            <CoinPrice title={coinInfo.title} image={coinInfo.image}>
              {coinInfo.priceTitle}
            </CoinPrice>
            <CoinDescription>{coinInfo.description}</CoinDescription>
          </div>
          <div className="coin-info__container">
            <h4>More Information</h4>
            <CoinMoreInfo title="ROI">{coinInfo.moreInfo.roi}</CoinMoreInfo>
            <CoinMoreInfo title="ATH">{coinInfo.moreInfo.ath}</CoinMoreInfo>
            <CoinMoreInfo title="ATL">{coinInfo.moreInfo.atl}</CoinMoreInfo>
            <CoinMoreInfo title="ATH Percentage Change">
              {coinInfo.moreInfo.athPercentage}
            </CoinMoreInfo>
            <CoinMoreInfo title="ATL Percentage Change">
              {coinInfo.moreInfo.atlPercentage}
            </CoinMoreInfo>
            <CoinMoreInfo title="Market Capitalization">
              {coinInfo.moreInfo.marketCap}
            </CoinMoreInfo>
            <CoinMoreInfo title="Volume">
              {coinInfo.moreInfo.volume}
            </CoinMoreInfo>
            <CoinMoreInfo title="24h High">
              {coinInfo.moreInfo.highDay}
            </CoinMoreInfo>
            <CoinMoreInfo title="24h Low">
              {coinInfo.moreInfo.lowDay}
            </CoinMoreInfo>
            <CoinMoreInfo title="1h Percentage Change">
              {coinInfo.moreInfo.priceChange.hour}
            </CoinMoreInfo>
            <CoinMoreInfo title="24h Percentage Change">
              {coinInfo.moreInfo.priceChange.day}
            </CoinMoreInfo>
            <CoinMoreInfo title="7h Percentage Change">
              {coinInfo.moreInfo.priceChange.week}
            </CoinMoreInfo>
            <CoinMoreInfo title="Coin Quantity">
              {coinInfo.moreInfo.coinQuantity}
            </CoinMoreInfo>
          </div>
        </div>
        <div className="flexb">
          <div className="coin-convertor">
            <div className="coin-convertor__container">
              <CoinSelector options={mainCoin} />
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
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Volume">{relatedCoins[0].volume}</PairInfo>
          </div>
        </CoinCard>
      </RelatedCoins>
    </main>
  );
}

export default CoinPage;
