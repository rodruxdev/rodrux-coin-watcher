const createRelatedCoins = (response) => {
  const relatedCoins = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * response.length);
    const coin = response[randomIndex];
    const coinId = coin.id;
    const ticker = coin.symbol?.toUpperCase();
    const title = `${coin.name}(${ticker})`;
    const price = `$${coin.current_price} USD`;
    const marketCap = `$${coin.market_cap} USD`;
    const relatedCoin = {
      coinId,
      title,
      price,
      marketCap,
      image: coin.image,
    };
    relatedCoins.push(relatedCoin);
  }
  return relatedCoins;
};

export default createRelatedCoins;
