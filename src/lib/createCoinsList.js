import CoinTable from './CoinTable';

const createCoinsList = (response) =>
  response.map((coinInfo) => {
    const coinId = coinInfo?.market_cap_rank;
    const name = coinInfo?.name;
    const ticker = coinInfo?.symbol.toUpperCase();
    const price = coinInfo?.current_price;
    const images = coinInfo?.image;
    const percentageChanges = [
      coinInfo?.price_change_percentage_1h_in_currency,
      coinInfo?.price_change_percentage_24h_in_currency,
      coinInfo?.price_change_percentage_7d_in_currency,
    ];
    const marketCap = coinInfo?.market_cap;
    const ath = coinInfo?.ath;
    const athPercentage = coinInfo?.ath_change_percentage;
    const coinTableInfo = new CoinTable(
      coinId,
      name,
      ticker,
      price,
      images,
      percentageChanges,
      marketCap,
      ath,
      athPercentage
    );
    return { ...coinTableInfo };
  });

export default createCoinsList;
