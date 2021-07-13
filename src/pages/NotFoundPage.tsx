import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = (): JSX.Element => (
  <>
    <Typography variant="h1">404 - Not Found!</Typography>
    <Link to="/">
      <Typography variant="h2">Go Home</Typography>
    </Link>
  </>
);

export default DashboardPage;
