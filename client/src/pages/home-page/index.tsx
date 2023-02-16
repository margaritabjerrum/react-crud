import React from 'react';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import BikeCard from './bikes-list/bike-cards';
import Header from './bikes-list/header';
import * as Styled from './styled';
import AdminHeader from './bikes-list/admin-header';

const HomePage = () => {
  const [bikes, setBikes] = React.useState<BikeModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBikes = await ApiService.fetchBikes();
      setBikes(fetchedBikes);
    })();
  }, []);

  const onDelete = (bikeId: string) => {
    try {
      setBikes(bikes.filter((bike: BikeModel) => bike.id !== bikeId));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <Container>
      <AdminHeader />
      <Header />
      <Styled.BikeCardGrid>
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            onDelete={onDelete}
          />
        ))}
      </Styled.BikeCardGrid>
    </Container>
  );
};

export default HomePage;
