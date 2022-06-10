import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin } from '../slices/coinSlice';

function CoinPage() {
  const dispatch = useDispatch();
  const coinInfo = useSelector((state) => state.coin.coinInfo);
  const relatedCoins = useSelector((state) => state.relatedCoins.coins);
  const convertorInfo = useSelector((state) => state.convertor);
  const optionsConvertor = convertorInfo.conversionOptions.map(
    (option) => option.coin
  );
  const mainCoin = [convertorInfo.coin];
  // Exchanges info and options
  const exchangesInfo = useSelector((state) => state.exchanges);
  const exchanges = exchangesInfo.exchangeOptions.map(
    (exchangeInfo) => exchangeInfo.exchange
  );
  const pairsData = exchangesInfo.actualInfo.map((exchangeSelected) => {
    const exchangeIndex = exchanges.findIndex(
      (exchange) => exchange === exchangeSelected.exchange
    );
    return exchangesInfo.exchangeOptions[exchangeIndex].pairs;
  });
  // PairsData is an array of three positions, pairs should get an array of three positions with an array inside with the options
  const pairs = pairsData[0].map((pairData) => pairData.pair);

  useEffect(() => {
    dispatch(fetchCoin('ethereum'));
  }, []);
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
              {coinInfo.moreInfo.priceChange[0]}
            </CoinMoreInfo>
            <CoinMoreInfo title="24h Percentage Change">
              {coinInfo.moreInfo.priceChange[1]}
            </CoinMoreInfo>
            <CoinMoreInfo title="7h Percentage Change">
              {coinInfo.moreInfo.priceChange[2]}
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
                  <PairInfo title="Price">
                    {exchangesInfo?.actualInfo[0]?.data?.price}
                  </PairInfo>
                  <PairInfo title="Volume">
                    {exchangesInfo?.actualInfo[0]?.data?.volume}
                  </PairInfo>
                </div>
              </ExchangePair>
              <ExchangePair image="/" exchange="Binance">
                <div className="exchange-info__container">
                  <ExchangeSelector options={exchanges} />
                  <PairSelector options={pairs} />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo title="Price">
                    {exchangesInfo?.actualInfo[0]?.data?.price}
                  </PairInfo>
                  <PairInfo title="Volume">
                    {exchangesInfo?.actualInfo[0]?.data?.volume}
                  </PairInfo>
                </div>
              </ExchangePair>
              <ExchangePair image="/" exchange="Binance">
                <div className="exchange-info__container">
                  <ExchangeSelector options={exchanges} />
                  <PairSelector options={pairs} />
                </div>
                <div className="exchange-info__container exchange-info__info">
                  <PairInfo title="Price">
                    {exchangesInfo?.actualInfo[0]?.data?.price}
                  </PairInfo>
                  <PairInfo title="Volume">
                    {exchangesInfo?.actualInfo[0]?.data?.volume}
                  </PairInfo>
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
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
        <CoinCard>
          <CoinTitle
            title={relatedCoins[0].title}
            image={relatedCoins[0].image}
          />
          <div>
            <PairInfo title="Price">{relatedCoins[0].price}</PairInfo>
            <PairInfo title="Market Cap">{relatedCoins[0].marketCap}</PairInfo>
          </div>
        </CoinCard>
      </RelatedCoins>
    </main>
  );
}

export default CoinPage;
