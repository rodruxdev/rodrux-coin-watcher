/* eslint-disable react/no-array-index-key */
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
import CoinSelected from '@components/CoinSelected';
import LoadingMoreInfo from '@containers/LoadingMoreInfo';
import LoadingDescription from '@containers/LoadingDescription';
import LoadingPairInfo from '@components/LoadingPairInfo';
import ErrorMessage from '@containers/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin } from '@slices/coinSlice';
import { useParams } from 'react-router-dom';
import { cleanError } from '@slices/uiSlice';
import '@styles/pages/CoinPage.css';

function CoinPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loadingCoinInfo, loadingExchanges, loadingRelatedCoins, error } =
    useSelector((state) => state.ui);
  const coinInfo = useSelector((state) => state.coin.coinInfo);
  const relatedCoins = useSelector((state) => state.relatedCoins.coins);
  const convertorInfo = useSelector((state) => state.convertor.coinConversion);
  const optionsConvertor = convertorInfo?.conversionOptions?.map(
    (option) => option.coin
  );
  const mainCoin = [convertorInfo.coin];
  // Exchanges info and options
  const exchangesInfo = useSelector((state) => state.exchanges);
  const optionsKeys = Object.keys(exchangesInfo.exchangeOptions);
  const exchanges = optionsKeys
    .map((key) => exchangesInfo.exchangeOptions[key]?.exchange)
    .sort();
  const pairsData = exchangesInfo.actualInfo.map((exchangeSelected) => {
    const key = exchangeSelected.exchangeId;
    return exchangesInfo.exchangeOptions[key]?.pairs;
  });
  // PairsData is an array of three positions, pairs should get an array of three positions with an array inside with the options
  const pairs = pairsData?.map((pairData) => {
    const pairList = pairData?.map((item) => item.pair);
    return pairList ?? [];
  });
  useEffect(() => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (error.section) {
      dispatch(cleanError());
    }
    dispatch(fetchCoin(id));
    if (currentScroll > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [id]);
  return (
    <main className="coin-page">
      <section className="search">
        <SearchBar />
      </section>
      {error.section === 'coin-info' ? (
        <section className="coin-error">
          <ErrorMessage />
        </section>
      ) : (
        <>
          <section>
            <div className="coin-info">
              <div>
                {loadingCoinInfo ? (
                  <LoadingDescription />
                ) : (
                  <>
                    <CoinPrice title={coinInfo.title} image={coinInfo.image}>
                      {coinInfo.priceTitle}
                    </CoinPrice>
                    <CoinDescription>{coinInfo.description}</CoinDescription>
                  </>
                )}
              </div>
              <div className="coin-info__container">
                <h4>More Information</h4>
                {loadingCoinInfo ? (
                  <LoadingMoreInfo />
                ) : (
                  <>
                    <CoinMoreInfo title="ATH">
                      {coinInfo.moreInfo?.ath}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="ATL">
                      {coinInfo.moreInfo?.atl}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="ATH Percentage Change">
                      {coinInfo.moreInfo?.athPercentage}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="ATL Percentage Change">
                      {coinInfo.moreInfo?.atlPercentage}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="Market Capitalization">
                      {coinInfo.moreInfo?.marketCap}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="Volume">
                      {coinInfo.moreInfo?.volume}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="24h High">
                      {coinInfo.moreInfo?.highDay}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="24h Low">
                      {coinInfo.moreInfo?.lowDay}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="1h Percentage Change">
                      {coinInfo.moreInfo?.priceChange[0]}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="24h Percentage Change">
                      {coinInfo.moreInfo?.priceChange[1]}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="7h Percentage Change">
                      {coinInfo.moreInfo?.priceChange[2]}
                    </CoinMoreInfo>
                    <CoinMoreInfo title="Coin Quantity">
                      {coinInfo.moreInfo?.coinQuantity}
                    </CoinMoreInfo>
                  </>
                )}
              </div>
              <div className="coin-convertor">
                <div className="coin-convertor__container">
                  <CoinSelected coin={mainCoin} />
                  <CoinConversion
                    type="main"
                    selectedValue={convertorInfo.coin}
                  />
                </div>
                <SwitchButton />
                <div className="coin-convertor__container">
                  <CoinSelector
                    options={optionsConvertor || []}
                    selectedValue={convertorInfo.convertedCoin}
                  />
                  <CoinConversion />
                </div>
              </div>
            </div>
            <div>
              <h4>Exchanges</h4>
              {error.section === 'exchange' ? (
                <div>
                  <ErrorMessage />
                </div>
              ) : (
                <div className="exchanges-container">
                  {exchangesInfo?.actualInfo.map((actualExchange, index) => (
                    <ExchangePair
                      image={actualExchange.image}
                      exchange={actualExchange.exchange}
                      loading={loadingExchanges[index]}
                      key={`exchange-${index}`}
                    >
                      <div className="exchange-info__container">
                        <ExchangeSelector
                          options={exchanges}
                          selectedExchange={actualExchange.exchange}
                          loading={loadingExchanges[index]}
                          index={index}
                        />
                        <PairSelector
                          options={pairs[index]}
                          selectedPair={actualExchange.pair}
                          loading={loadingExchanges[index]}
                          index={index}
                        />
                      </div>
                      <div className="exchange-info__container exchange-info__info">
                        {loadingExchanges[index] ? (
                          <>
                            <LoadingPairInfo />
                            <LoadingPairInfo />
                          </>
                        ) : (
                          <>
                            <PairInfo title="Price">
                              {actualExchange.data?.price}
                            </PairInfo>
                            <PairInfo title="Volume">
                              {actualExchange.data?.volume}
                            </PairInfo>
                          </>
                        )}
                      </div>
                    </ExchangePair>
                  ))}
                </div>
              )}
            </div>
          </section>
          {error.section === 'related-coins' ? (
            <section className="related-coins">
              <h4>Related Coins</h4>
              <ErrorMessage />
            </section>
          ) : (
            <RelatedCoins>
              {relatedCoins.map((relatedCoin) => (
                <CoinCard
                  coinId={relatedCoin?.coinId}
                  key={`card-${relatedCoin?.coinId}`}
                >
                  <CoinTitle
                    title={relatedCoin?.title}
                    image={relatedCoin?.image}
                  />
                  <div>
                    {loadingRelatedCoins ? (
                      <>
                        <LoadingPairInfo />
                        <LoadingPairInfo />
                      </>
                    ) : (
                      <>
                        <PairInfo title="Price">{relatedCoin?.price}</PairInfo>
                        <PairInfo title="Market Cap">
                          {relatedCoin?.marketCap}
                        </PairInfo>
                      </>
                    )}
                  </div>
                </CoinCard>
              ))}
            </RelatedCoins>
          )}
        </>
      )}
    </main>
  );
}

export default CoinPage;
