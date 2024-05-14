import './App.css';
import { InitToastContainer } from './components/Toast';
import queryClient from '@utils/queryClient';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRoute from './routes';

function App() {
  const router = createBrowserRouter(AppRoute);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools
          initialIsOpen={false}
          toggleButtonProps={{ className: '!mb-24' }}
        /> */}
        <InitToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
