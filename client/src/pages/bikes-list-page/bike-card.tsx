import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@mui/material';

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
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card>
      <CardMedia
        component="img"
        height="240px"
        object-fit="cover"
        object-position="center"
        image={images[0]}
      />
      <CardContent>
        <Typography variant="h4" component="p">
          {brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          {model}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {`Year: ${year}`}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {`Price: ${price.toFixed(2)}€`}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="subtitle2" component="p">
          {`Engine: ${engine}`}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {`Power: ${power}`}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {`Seat Height: ${seatHeight}`}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {`Weight: ${weight}`}
        </Typography>
        <Typography variant="subtitle2" component="p" display="none">
          {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Button 1</Button>
        <Button size="small">Button 2</Button>
      </CardActions>
    </Card>
  </Grid>

);

export default BikeCard;
