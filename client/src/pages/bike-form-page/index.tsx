import React from 'react';
import {
  Stack,
  Typography,
  Button,
} from '@mui/material';
import ApiService from 'services/api-service';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useBike from 'hooks/useBike';
import ImagesField from './images-field';
import MainStatsField from './main-stats-field';
import BrandModelField from './brand-model-fields';
import PriceYearFields from './price-year-fields';
import * as Styled from './styled';
import { btnColorMap, btnMap, titleMap } from './data';
import { formatValues } from './helpers';

type BikeFormPageProps = {
  mode?: 'create' | 'update'
};

const BikeFormPage: React.FC<BikeFormPageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const navigate = useNavigate();

  const { id } = useParams();
  const bike = useBike(id);

  const postBikeData = async (bikeData: Omit<BikeModel, 'id'>) => {
    try {
      await ApiService.createBike(bikeData);
      navigate(routes.HomePage);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateBikeData = async (bikeId: string, bikeData: Omit<BikeModel, 'id'>) => {
    try {
      await ApiService.updateBike(bikeId, bikeData);
      navigate(routes.HomePage);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
        postBikeData(values);
      } else if (id !== undefined) updateBikeData(id, values);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  if (mode === 'update' && bike === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" color="primary" sx={{ textAlign: 'center' }}>
          {titleMap[mode]}
        </Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <BrandModelField defaultBrand={bike?.brand} defaultModel={bike?.model} />
          <MainStatsField
            defaultEngine={bike?.stats.engine}
            defaultPower={bike?.stats.power.slice(0, -4)}
            defaultSeatHeight={bike?.stats.seatHeight.slice(0, -2)}
            defaultWeight={bike?.stats.weight.slice(0, -2)}
          />
          <ImagesField defaultImages={bike?.images} />
          <PriceYearFields defaultPrice={bike?.price} defaultYear={bike?.year} />
          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
              fullWidth
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default BikeFormPage;
