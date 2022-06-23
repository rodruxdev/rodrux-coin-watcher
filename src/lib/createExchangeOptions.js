import currencyText from './currencyText';

const createExchangeOptions = (response) => {
  const exchangeAllOptions = response.map((tickerInfo) => {
    const pair = `${tickerInfo.base}/${tickerInfo.target}`;
    const exchange = tickerInfo.market?.name;
    const exchangeId = tickerInfo.market?.identifier;
    const data = {
      price: `${currencyText(tickerInfo.last, 6)} ${tickerInfo.target}`,
      volume: `${currencyText(tickerInfo.volume, 2)} ${tickerInfo.target}`,
    };
    return { pair, exchange, exchangeId, data };
  });
  const exchangeOptions = exchangeAllOptions.reduce((prev, tickerInfo) => {
    const key = tickerInfo.exchangeId;
    const pair = {
      pair: tickerInfo.pair,
      data: tickerInfo.data,
    };
    if (!prev[key]) {
      prev[key] = { exchange: tickerInfo.exchange };
      prev[key].pairs = [];
    }
    prev[key].pairs.push(pair);
    return prev;
  }, {});
  return exchangeOptions;
};

export default createExchangeOptions;
