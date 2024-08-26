import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DASHBOARD_PATH } from '@/constants/paths';
import MainLayout from '@/layouts/MainLayout';
import DashboardPage from '@/pages/Dashboard/DashboardPage';
import ErrorPage from '@/router/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={DASHBOARD_PATH} />,
      },
      {
        path: DASHBOARD_PATH,
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
