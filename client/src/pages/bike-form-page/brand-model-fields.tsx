import React from 'react';
import { TextField } from '@mui/material';

type BrandModelFieldProps = {
  defaultBrand?: string,
  defaultModel?: string,
};

const BrandModelField: React.FC<BrandModelFieldProps> = ({
  defaultBrand,
  defaultModel,
}) => (
  <>
    <TextField
      label="Brand"
      fullWidth
      variant="outlined"
      name="brand"
      required
      defaultValue={defaultBrand}
    />
    <TextField
      label="Model"
      fullWidth
      variant="outlined"
      name="model"
      required
      defaultValue={defaultModel}
    />
  </>
);

export default BrandModelField;
