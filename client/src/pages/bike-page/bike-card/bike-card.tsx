import React from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import Img from 'components/layout/ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
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
  <Stack mt={{ md: 10 }}>
    <Grid container width="auto" spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Swiper
          navigation
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView="auto"
          loop
        >
          {
            images.map((img) => (
              <SwiperSlide key={img}>
                <Img src={img} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Styled.ContentWrapper>
          <Typography variant="h3" color="primary" sx={{ mb: 5 }}>{`${brand} - ${model}`}</Typography>
          <Stack alignItems="center">
            <Typography
              gutterBottom
              variant="h4"
              component="h1"
              color="primary.dark"
            >
              At a glance
            </Typography>
            <Typography variant="h5">{`Year: ${year}`}</Typography>
            <Typography variant="h5">{`Price: ${price.toFixed(2)}€`}</Typography>
            <Typography variant="h5">{`Engine: ${engine}`}</Typography>
            <Typography variant="h5">{`Power: ${power}`}</Typography>
            <Typography variant="h5">{`Seat Height: ${seatHeight}`}</Typography>
            <Typography variant="h5">{`Weight: ${weight}`}</Typography>
            <Typography display="none">{id}</Typography>
          </Stack>
        </Styled.ContentWrapper>
      </Grid>
    </Grid>
  </Stack>
);

export default BikeCard;
