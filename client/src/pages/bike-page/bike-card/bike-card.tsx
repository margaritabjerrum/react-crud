import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Img from 'components/layout/ui/img';

type BikeCardProps = BikeModel;

const BikeCard: React.FC<BikeCardProps> = ({
  id,
  brand,
  model,
  year,
  price,
  stats: {
    engine,
    power,
    seatHeight,
    weight,
  },
  images,
}) => (
  <Stack>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
    <Typography>{id}</Typography>
    <Typography>{brand}</Typography>
    <Typography>{model}</Typography>
    <Typography>{year}</Typography>
    <Typography>{price}</Typography>
    <Typography>{engine}</Typography>
    <Typography>{power}</Typography>
    <Typography>{seatHeight}</Typography>
    <Typography>{weight}</Typography>

  </Stack>
);

export default BikeCard;
