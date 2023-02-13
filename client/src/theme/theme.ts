import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  palette: {
    primary: {
      main: '#84923d',
      light: '#d0d175',
      dark: '#646e32',
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;
