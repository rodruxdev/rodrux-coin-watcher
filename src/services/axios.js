import axios from 'axios';

const URL = 'https://api.coingecko.com/api/v3';

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
