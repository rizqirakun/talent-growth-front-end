import Register from '@pages/Auth/Register';
import NotFound from '@pages/NotFound';

const GlobalRoute = [
  {
    index: true,
    key: 'home',
    name: 'Home',
    path: '/',
    element: <Register />
  },
  {
    key: 'global',
    name: 'Global',
    path: '*',
    element: <NotFound />
  }
];

export { GlobalRoute };
