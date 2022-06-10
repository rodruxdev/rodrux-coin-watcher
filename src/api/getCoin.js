import axios from '@services/axios';

const getCoin = (id = 'bitcoin') => {
  const query = `coins/${id}`;
  const response = axios
    .get(query)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export default getCoin;
