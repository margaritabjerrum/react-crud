import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <Box component="header" sx={{ py: 3 }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate(routes.BikeCreatePage)}
      >
        Add New Motorcycle
      </Button>
    </Box>
  );
};

export default AdminHeader;
