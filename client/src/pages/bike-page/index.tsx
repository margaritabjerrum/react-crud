import React from 'react';
import { Box } from '@mui/material';
import useBike from 'hooks/useBike';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import BikeCard from './bike-card/bike-card';

const BikePage = () => {
  const { id } = useParams();

  const bike = useBike(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box>
      {bike && <BikeCard {...bike} />}
    </Box>
  );
};

export default BikePage;
