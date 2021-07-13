import { RoutePath } from 'constants/route-path';
import { DashboardPage } from 'pages/DashboardPage';
import { RouteType } from 'types/route';
import { Roles } from 'types/roles';

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
