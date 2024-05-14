import { createSearchParams } from 'react-router-dom';

class RouteHelper {
  constructor(arr) {
    this.arr = arr;
  }

  getRoute = (key) => {
    return this.arr.find((route) => {
      return route.key === key;
    });
  };

  getPath = (key, options = {}) => {
    const route = this.getRoute(key);
    let path = route?.path || '/';
    if (options && options.segments) {
      Object.entries(options.segments).forEach(([segment, value]) => {
        path = path.replace(`:${segment}`, value);
      });
    }
    if (options && options.params) {
      path = decodeURIComponent(
        `${path}?${createSearchParams(options.params)}`
      );
    }
    return path; // default homepage path if missing
  };
}

export default RouteHelper;
