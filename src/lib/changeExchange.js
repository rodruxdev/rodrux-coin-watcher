import getImageExchange from '../api/getImageExchange';

const changeExchange = async (exchangeOptions, exchange) => {
  const exchangeId = Object.keys(exchangeOptions).find(
    (key) => exchangeOptions[key].exchange === exchange
  );
  const { pair, data } = exchangeOptions[exchangeId].pairs[0];
  const { image } = await getImageExchange(exchangeId);
  const actualExchange = { exchangeId, exchange, image, pair, data };
  return actualExchange;
};

export default changeExchange;
