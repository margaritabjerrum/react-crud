import React from 'react';
import ApiService from 'services/api-service';
import { } from '@mui/material';
import BikeListLayout from './bikes-list-page/bike-list-layout';
import BikeCard from './bikes-list-page/bike-card';
import Header from './bikes-list-page/header';

const HomePage = () => {
  const [bikes, setBikes] = React.useState<BikeModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBikes = await ApiService.fetchBikes();
      setBikes(fetchedBikes);
    })();
  }, []);

  return (
    <>
      <Header />
      <BikeListLayout>
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            {...bike}
          />
        ))}
      </BikeListLayout>
    </>
  );
};

export default HomePage;
