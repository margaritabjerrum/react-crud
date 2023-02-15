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

const fetchBike = async (id: string | number) => {
  const { data } = await api.get<BikeModel>(`bikes/${id}`);

  return data;
};

// const createBike = async (bikeData: BikeModel) => {
//   await api.post('/bikes', {
//     bikeData,
//   });
// };

const ApiService = {
  fetchBikes,
  fetchBike,
  // createBike,
};

export default ApiService;
