import axios from '@services/axios';

const getCategoriesList = () => {
  const response = axios.get('coins/categories/list').then((res) => res.data);
  return response;
};

export default getCategoriesList;
