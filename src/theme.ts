'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      100: '#FD6F00',
      200: '#FF8C00',
      300: '#FFFFFF',
      400: '#FFA500',
      500: '#FFFFF0',
    },
    secondary: {
      100: '#000000',
      200: '#1E1E1E',
      300: '#545454',
      400: '#121212',
    },
   
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
