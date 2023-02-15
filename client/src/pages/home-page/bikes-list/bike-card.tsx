import React from 'react';
import {
  Stack,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import Img from 'components/layout/ui/img';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
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
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{
      boxShadow: 3, borderRadius: 2, overflow: 'hidden', position: 'relative',
    }}
    >
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button variant="contained" color="warning" size="small">
          Update
        </Button>
        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>
        <Typography variant="h5" component="p">
          {model}
        </Typography>
        <Typography mb={2} variant="subtitle1" component="p">
          {brand}
        </Typography>
        <Divider />
        <Stack direction="row" justifyContent="space-around">
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
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: 0 }}
          onClick={() => navigate(routes.BikePage.createLink(id))}
        >
          View Details
        </Button>
        <Stack display="none">{`${engine} ${seatHeight} ${weight}`}</Stack>
      </Styled.ButtonContainer>
    </Stack>
  );
};
export default BikeCard;
