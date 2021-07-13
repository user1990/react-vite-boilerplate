import { privateRoutesConfig } from 'config/routes-config';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteType } from 'types/route';
import { getAllowedRoutes, isLoggedIn } from 'utils/routes';

export const PrivateRoutes = (): JSX.Element => {
  let allowedRoutes: RouteType[] = [];

  if (isLoggedIn()) allowedRoutes = getAllowedRoutes(privateRoutesConfig);
  if (!isLoggedIn()) return <Redirect to="/" />;

  return (
    <>
      {allowedRoutes.map(({ path, exact, component }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
    </>
  );
};

export default PrivateRoutes;
