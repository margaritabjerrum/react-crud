import React from 'react';
import {
  TextField,
  Box,
} from '@mui/material';

type PriceYearFieldsProps = {
  defaultPrice?: number,
  defaultYear?: number,
};

const PriceYearFields: React.FC<PriceYearFieldsProps> = ({
  defaultPrice,
  defaultYear,
}) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <TextField
      label="Price"
      fullWidth
      variant="outlined"
      name="price"
      type="number"
      inputProps={{ step: '0.01' }}
      required
      defaultValue={defaultPrice}
    />
    <TextField
      label="Year"
      fullWidth
      variant="outlined"
      name="year"
      type="number"
      required
      defaultValue={defaultYear}
    />
  </Box>
);

export default PriceYearFields;
