import axios from 'axios';

const api = axios.create({
  baseURL: 'BASE_URL_HERE',
});

export default api;
