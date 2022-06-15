import getImageExchange from '../api/getImageExchange';

const getAllExchangeImages = async (ids) => {
  const results = ids.map((id) => getImageExchange(id));
  const responses = await Promise.all(results);
  return responses;
};

export default getAllExchangeImages;
