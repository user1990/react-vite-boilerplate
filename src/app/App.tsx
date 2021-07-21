import { StyledEngineProvider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'components/routing/main-routes';

// import theme from './utils/theme';

const theme = createTheme();

const App = (): JSX.Element => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <CssBaseline /> */}
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
