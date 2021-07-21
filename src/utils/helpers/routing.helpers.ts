import intersection from 'lodash.intersection';
import { RouteType } from 'types/routing.types';

export const isLoggedIn = (): boolean => !!localStorage.getItem('roles');

export const isArrayWithLength = <T>(array: T): boolean => Array.isArray(array) && !!array.length;

export const getAllowedRoutes = (routes: RouteType[]): RouteType[] => {
  const roles = JSON.parse(localStorage.getItem('roles') ?? '');
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    if (!isArrayWithLength(permission)) return true;
    return intersection(permission, roles).length;
  });
};
