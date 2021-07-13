import { Route } from 'react-router-dom';

import React from 'react';
import { publicRoutesConfig as publicRoutes } from '../config/routes-config';

export const PublicRoutes = (): JSX.Element => (
  <>
    {publicRoutes.map(({ path, exact, component }) => (
      <Route key={path} path={path} component={component} exact={exact} />
    ))}
  </>
);

export default PublicRoutes;
