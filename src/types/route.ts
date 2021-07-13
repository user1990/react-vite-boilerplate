import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Roles } from './roles';

export type RouteType = {
  component: FC<RouteComponentProps>;
  path: string;
  title: string;
  exact: boolean;
  permission?: Roles[];
};
