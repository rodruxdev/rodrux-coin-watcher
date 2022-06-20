import currencyText from './currencyText';
import percentageText from './percentageText';

const createCoinsList = (response) =>
  response.map((coinInfo) => {
    const coinId = coinInfo?.id;
    const coinRank = coinInfo?.market_cap_rank ?? 'X';
    const name = coinInfo?.name;
    const ticker = coinInfo?.symbol.toUpperCase() ?? '---';
    const price = coinInfo?.current_price ?? NaN;
    const image = coinInfo?.image ?? '';
    const percentageChanges = [
      coinInfo?.price_change_percentage_1h_in_currency,
      coinInfo?.price_change_percentage_24h_in_currency,
      coinInfo?.price_change_percentage_7d_in_currency,
    ].map((item) => percentageText(item));
    const marketCap = coinInfo?.market_cap ?? NaN;
    const ath = coinInfo?.ath ?? NaN;
    const athPercentage = coinInfo?.ath_change_percentage ?? NaN;
    const coinTableInfo = {
      coinId,
      coinRank,
      name,
      ticker,
      price: currencyText(price),
      image,
      percentageChanges,
      marketCap: currencyText(marketCap).slice(0, -3),
      ath: currencyText(ath),
      athPercentage: percentageText(athPercentage),
    };
    return coinTableInfo;
  });

export default createCoinsList;
