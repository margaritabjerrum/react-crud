import React from 'react';
import { Grid } from '@mui/material';

type BikeListLayoutProps = {
  children: React.ReactNode,
};

const BikeListLayout: React.FC<BikeListLayoutProps> = ({ children }) => (
  <Grid container width="auto" spacing={2}>
    {children}
  </Grid>

);

export default BikeListLayout;
