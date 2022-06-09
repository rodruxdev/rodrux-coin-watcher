import axios from '@services/axios';

const getCoins = (limit = 100) => {
  const params = {
    vs_currency: 'usd',
    per_page: limit,
    price_change_percentage: '1h,24h,7d',
  };
  const response = axios
    .get('coins/markets', { params })
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export default getCoins;
