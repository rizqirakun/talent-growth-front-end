import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1_000 * 60 * 1, // 1 minutes
      cacheTime: 1_000 * 60 * 5 // 5 minutes
    }
  }
});

export default queryClient;
