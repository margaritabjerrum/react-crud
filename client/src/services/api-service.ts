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

const createBike = async (bikeData: Omit<BikeModel, 'id'>) => {
  await api.post('/bikes', {
    brand: bikeData.brand,
    model: bikeData.model,
    year: bikeData.year,
    price: bikeData.price,
    stats: {
      engine: bikeData.stats.engine,
      power: bikeData.stats.power,
      seatHeight: bikeData.stats.seatHeight,
      weight: bikeData.stats.weight,

    },
    images: bikeData.images,
  });
};

const ApiService = {
  fetchBikes,
  fetchBike,
  createBike,
};

export default ApiService;
