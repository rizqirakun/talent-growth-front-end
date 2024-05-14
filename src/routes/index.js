import { AuthenticationRoute } from './AuthenticationRoute';

import RouteHelper from '../helpers/routeHelper';
import { GlobalRoute } from './GlobalRoute';

const AppRoute = [...AuthenticationRoute, ...GlobalRoute];

// delete unnecessary object for route helper
const mergeShallowRoute = [...AppRoute]
  .filter((item) => item.key)
  .map((item) => {
    return {
      key: item.key,
      name: item.name,
      path: item.path
    };
  });

const helper = new RouteHelper(mergeShallowRoute);
const getRoute = helper.getRoute;
const getPath = helper.getPath;

export { AuthenticationRoute, getRoute, getPath };
export default AppRoute;
