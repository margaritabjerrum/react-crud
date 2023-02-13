import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchBikes = async () => {
  const { data } = await api.get<BikeModel[]>('/bikes');

  return data;
};

const ApiService = {
  fetchBikes,
};

export default ApiService;
