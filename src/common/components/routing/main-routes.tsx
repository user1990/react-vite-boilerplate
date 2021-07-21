import NotFoundPage from 'pages/NotFoundPage';
import { BrowserRouter, Route as NotFoundRoute, Switch } from 'react-router-dom';

import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <PublicRoutes />
      <PrivateRoutes />
      <NotFoundRoute component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
