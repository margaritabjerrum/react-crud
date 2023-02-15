import React from 'react'; import {
  Typography,
  TextField,
  Box,
  Stack,
  InputAdornment,
} from '@mui/material';

const MainStats = () => (
  <Stack sx={{ gap: 2 }}>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Main Stats</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label="Engine" fullWidth variant="outlined" name="engine" required />
      <TextField
        label="Power"
        fullWidth
        variant="outlined"
        name="power"
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">bhp</InputAdornment>,
        }}
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
      />
    </Box>
  </Stack>
);

export default MainStats;
