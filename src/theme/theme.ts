'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff', // Cyan bright
    },
    secondary: {
      main: '#2979ff', // Blue
    },
    background: {
      default: '#03101c', // Very deep blue
      paper: '#071a2f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#90caf9',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
    h2: {
        fontWeight: 700,
    },
    button: {
        textTransform: 'none',
        fontWeight: 600,
    }
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                background: 'linear-gradient(135deg, #020b14 0%, #071a2f 100%)',
                backgroundAttachment: 'fixed',
            }
        }
    }
  }
});

export default theme;
