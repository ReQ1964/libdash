import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
const queryClient = new QueryClient();

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </React.StrictMode>
    </QueryClientProvider>
  );
};

export default App;
