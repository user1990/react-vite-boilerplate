import { StyledEngineProvider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'common/components/routing/main-routes';

// import theme from './utils/theme';

const theme = createTheme();

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* <CssBaseline /> */}
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
