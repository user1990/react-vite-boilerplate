import { DashboardPage } from 'pages/DashboardPage';
import { RouteType } from 'types/routing.types';
import { Roles } from 'types/roles.types';
import { RoutePath } from 'utils/constants/routing-path.constants';

export const privateRoutesConfig: RouteType[] = [
  {
    exact: true,
    path: RoutePath.DASHBOARD,
    title: 'Dashboard',
    permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.MANAGER],
    component: DashboardPage,
  },
];

export const publicRoutesConfig: RouteType[] = [
  {
    exact: true,
    path: RoutePath.LOGIN,
    title: 'Login',
    component: DashboardPage,
  },
];
