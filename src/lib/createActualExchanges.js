import currencyText from './currencyText';
import getAllExchangeImages from './getAllExchangeImages';

const createActualExchanges = async (exchangeOptions) => {
  const optionsKeys = Object.keys(exchangeOptions);
  const actualInfo = [];
  const exchangesIds = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * optionsKeys.length);
    const exchangeId = optionsKeys[randomIndex];
    const exchangeInfo = exchangeOptions[exchangeId];
    const { exchange, pairs } = exchangeInfo;
    const randomIndexPairs = Math.floor(Math.random() * pairs.length);
    const { pair, data } = pairs[randomIndexPairs];
    const ending = pair.split('/')[1];
    const actualExchange = {
      exchangeId,
      exchange,
      pair,
      data: {
        price: `${currencyText(data.price)} ${ending}`,
        volume: `${currencyText(data.volume)} ${ending}`,
      },
    };
    actualInfo.push(actualExchange);
    exchangesIds.push(exchangeId);
  }
  const responses = await getAllExchangeImages(exchangesIds);
  const images = responses.map((item) => item.image);
  const actualInfoWithImages = actualInfo.map((item, index) => ({
    ...item,
    image: images[index],
  }));
  return actualInfoWithImages;
};

export default createActualExchanges;
