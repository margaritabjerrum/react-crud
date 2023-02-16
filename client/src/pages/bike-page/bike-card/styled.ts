import { Stack, styled } from '@mui/material';

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,

}));
