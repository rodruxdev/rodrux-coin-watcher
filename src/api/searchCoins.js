import axios from '@services/axios';

const searchCoins = (search) => {
  const params = {
    query: search,
  };
  const response = axios.get('search', { params }).then((res) => res.data);
  return response;
};

export default searchCoins;
