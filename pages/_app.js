import { createTheme, ThemeProvider } from '@mui/material';
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#054A91',
      dark: '#DAE3ED',
      contrastText: '#1D1D1D',
    },
    secondary: {
      light: '#ff7961',
      main: '#054A91',
      dark: '#ba000d',
      contrastText: '#FFF',
    },
    third: {
      light: '#5fba7d',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#FFF',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
