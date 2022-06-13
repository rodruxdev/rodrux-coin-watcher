import axios from '@services/axios';

const getCoins = (limit = 100, options = {}) => {
  const params = {
    vs_currency: 'usd',
    per_page: limit,
    price_change_percentage: '1h,24h,7d',
  };
  if (options.searchIds) {
    params.ids = options.searchIds;
  }
  if (options.category) {
    params.category = options.category;
  }
  const response = axios
    .get('coins/markets', { params })
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export default getCoins;
