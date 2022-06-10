import axios from '@services/axios';

const getCoins = (limit = 100, searcIds = '') => {
  const params = {
    vs_currency: 'usd',
    per_page: limit,
    price_change_percentage: '1h,24h,7d',
  };
  if (searcIds) {
    params.ids = searcIds;
  }
  const response = axios
    .get('coins/markets', { params })
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export default getCoins;
