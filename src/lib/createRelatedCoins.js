import currencyText from './currencyText';

const createRelatedCoins = (response) => {
  const relatedCoins = [];
  const maxResponse = response.length < 10 ? response.length : 10;
  for (let i = 0; i < maxResponse; i++) {
    const randomIndex = Math.floor(Math.random() * response.length);
    const coin = response[randomIndex];
    const coinId = coin.id;
    if (!relatedCoins.some((item) => item.coinId === coinId)) {
      const ticker = coin.symbol?.toUpperCase();
      const title = `${coin.name} (${ticker})`;
      const price = currencyText(coin.current_price);
      const marketCap = currencyText(coin.market_cap);
      const relatedCoin = {
        coinId,
        title,
        price,
        marketCap,
        image: coin.image,
      };
      relatedCoins.push(relatedCoin);
    } else {
      i -= 1;
    }
  }
  return relatedCoins;
};

export default createRelatedCoins;
