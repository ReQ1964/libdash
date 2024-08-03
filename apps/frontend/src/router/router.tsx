import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ErrorPage from '@/router/ErrorPage/ErrorPage';
import { BASE_PAGE_PATH } from '@/constants/paths';
import DashboardPage from '@/pages/Dashboard/DashboardPage';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: BASE_PAGE_PATH,
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
