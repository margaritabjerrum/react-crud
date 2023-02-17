import React from 'react'; import {
  Typography,
  TextField,
  Box,
  Stack,
  InputAdornment,
} from '@mui/material';

type MainStatsFieldProps = {
  defaultEngine?: string,
  defaultPower?: string,
  defaultSeatHeight?: string,
  defaultWeight?: string,
};

const MainStatsField: React.FC<MainStatsFieldProps> = ({
  defaultEngine,
  defaultPower,
  defaultSeatHeight,
  defaultWeight,
}) => (
  <Stack sx={{ gap: 2 }}>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Main Stats</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Engine"
        fullWidth
        variant="outlined"
        name="engine"
        required
        defaultValue={defaultEngine}
      />
      <TextField
        label="Power"
        fullWidth
        variant="outlined"
        name="power"
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">bhp</InputAdornment>,
        }}
        defaultValue={defaultPower}
      />
    </Box>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Seat Height"
        fullWidth
        variant="outlined"
        name="seatHeight"
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">mm</InputAdornment>,
        }}
        defaultValue={defaultSeatHeight}

      />
      <TextField
        label="Weight"
        fullWidth
        variant="outlined"
        name="weight"
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        defaultValue={defaultWeight}

      />
    </Box>
  </Stack>
);

export default MainStatsField;
