import React from 'react';
import {
  TextField,
  Box,
} from '@mui/material';

const PriceYearFields = () => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <TextField
      label="Price"
      fullWidth
      variant="outlined"
      name="price"
      type="number"
      inputProps={{ step: '0.01' }}
      required
    />
    <TextField
      label="Year"
      fullWidth
      variant="outlined"
      name="year"
      type="number"
      required
    />
  </Box>
);

export default PriceYearFields;
