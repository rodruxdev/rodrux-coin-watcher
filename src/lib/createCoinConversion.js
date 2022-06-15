const createCoinConversion = (response) => {
  const coin = response?.symbol?.toUpperCase();
  const coinPrice = 1;
  const conversion = response?.market_data?.current_price?.usd;
  const convertedCoin = 'USD';
  const prices = response?.market_data?.current_price;
  const conversionOptions = Object.keys(prices).map((item) => ({
    coin: item.toUpperCase(),
    conversionRatio: prices[item],
  }));
  const coinConversion = {
    coin,
    convertedCoin,
    coinPrice,
    conversion,
    conversionOptions,
  };
  return coinConversion;
};

export default createCoinConversion;
