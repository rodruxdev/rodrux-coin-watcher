import axios from '@services/axios';

const getImageExchange = (id = 'binance') => {
  const query = `exchanges/${id}`;
  const response = axios
    .get(query)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export default getImageExchange;
