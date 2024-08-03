import React from 'react';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './libs/i18n/config';
import './index.css';
import '@radix-ui/themes/styles.css';

const queryClient = new QueryClient();

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <RouterProvider router={router} />
        <ThemePanel />
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
