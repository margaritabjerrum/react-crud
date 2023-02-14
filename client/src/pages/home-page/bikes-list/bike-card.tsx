import React from 'react';
import {
  Stack,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import Img from 'components/layout/ui/img';
import * as Styled from './styled';

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

  <Stack sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
    <Styled.ContentWrapper>
      <Typography variant="h5" component="p">
        {model}
      </Typography>
      <Typography mb={2} variant="subtitle1" component="p">
        {brand}
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Typography mt={1} variant="subtitle1" component="p">
          {year}
        </Typography>
        <Divider orientation="vertical" />
        <Typography mt={1} variant="subtitle1" component="p">
          {`${price.toFixed(2)}€`}
        </Typography>
        <Divider orientation="vertical" />
        <Typography mt={1} variant="subtitle1" component="p">
          {power}
        </Typography>
      </Stack>
    </Styled.ContentWrapper>
    <Styled.ButtonContainer>
      <Button size="small" variant="contained" sx={{ borderRadius: 0 }}>View More</Button>
    </Styled.ButtonContainer>
  </Stack>

);

export default BikeCard;
