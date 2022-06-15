const createCoinInfo = (response) => {
  const coinId = response?.id;
  const name = response?.name;
  const ticker = response?.symbol.toUpperCase();
  const price = response?.market_data?.current_price?.usd;
  const image = response?.image?.thumb;
  const description = response?.description?.en;
  const categories = response?.categories;
  const roi = response?.market_data?.roi?.percentage;
  const ath = response?.market_data?.ath?.usd;
  const atl = response?.market_data?.atl?.usd;
  const athPercentage = response?.market_data?.ath_change_percentage?.usd;
  const atlPercentage = response?.market_data?.atl_change_percentage?.usd;
  const marketCap = response?.market_data?.market_cap?.usd;
  const volume = response?.market_data?.total_volume?.usd;
  const highDay = response.market_data?.high_24h?.usd;
  const lowDay = response.market_data?.low_24h?.usd;
  const priceChange = [
    response?.market_data?.price_change_percentage_1h_in_currency?.usd,
    response?.market_data?.price_change_percentage_24h_in_currency?.usd,
    response?.market_data?.price_change_percentage_7d_in_currency?.usd,
  ];
  const coinQuantity = response.market_data?.circulating_supply;
  const moreInfo = {
    roi: `${roi?.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}%`,
    ath: `$${ath} USD`,
    atl: `$${atl} USD`,
    athPercentage: `${athPercentage?.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}%`,
    atlPercentage: `${atlPercentage?.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}%`,
    marketCap: `$${marketCap} USD`,
    volume: `$${volume} USD`,
    highDay: `$${highDay} USD`,
    lowDay: `$${lowDay} USD`,
    priceChange: priceChange.map((item) => {
      if (item) {
        return item?.toLocaleString('en-US', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        });
      }
      return '---';
    }),
    coinQuantity,
  };
  const coinInfo = {
    coinId,
    name,
    categories,
    ticker,
    price,
    image,
    description,
    moreInfo,
    title: `${name} (${ticker})`,
    priceTitle: `$${price} USD`,
  };
  return coinInfo;
};

export default createCoinInfo;
