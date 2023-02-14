import routes from 'navigation/routes';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import { Box } from '@mui/material';
import BikeCard from './bike-card/bike-card';

const BikePage = () => {
  const { id } = useParams();

  const [bike, getBike] = React.useState<BikeModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedBike = await ApiService.fetchBike(id);
        getBike(fetchedBike);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box>
      {bike && <BikeCard {...bike} />}
    </Box>
  );
};

export default BikePage;
