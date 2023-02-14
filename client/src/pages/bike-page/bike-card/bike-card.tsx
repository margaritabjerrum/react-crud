import React from 'react';
import { Typography, Grid } from '@mui/material';
import Img from 'components/layout/ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import * as Styled from './styled';
import Header from './header';

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
  <>
    <Header>{`${brand} - ${model}`}</Header>
    <Grid container width="auto" spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={images[1]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={images[2]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Styled.ContentWrapper>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            color="primary.dark"
          >
            At a glance
          </Typography>
          <Typography>{`Year: ${year}`}</Typography>
          <Typography>{`Price: ${price.toFixed(2)}€`}</Typography>
          <Typography>{`Engine: ${engine}`}</Typography>
          <Typography>{`Power: ${power}`}</Typography>
          <Typography>{`Seat Height: ${seatHeight}`}</Typography>
          <Typography>{`Weight: ${weight}`}</Typography>
        </Styled.ContentWrapper>
      </Grid>
    </Grid>
  </>
);

export default BikeCard;
