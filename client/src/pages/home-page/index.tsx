import React from 'react';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import BikeCard from './bikes-list/bike-cards';
import Header from './bikes-list/header';
import * as Styled from './styled';
import AdminHeader from './bikes-list/admin-header';

const HomePage = () => {
  const [bikes, setBikes] = React.useState<BikeModel[]>([]);

  const onDelete = async (id: string) => {
    await ApiService.deleteBike(id);
    const fetchedBikes = await ApiService.fetchBikes();
    setBikes(fetchedBikes);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedBikes = await ApiService.fetchBikes();
      setBikes(fetchedBikes);
    })();
  }, []);

  return (
    <Container>
      <AdminHeader />
      <Header />
      <Styled.BikeCardGrid>
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            {...bike}
            onDelete={() => onDelete(bike.id)}
          />
        ))}
      </Styled.BikeCardGrid>
    </Container>
  );
};

export default HomePage;
