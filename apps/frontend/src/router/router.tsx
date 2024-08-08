import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ErrorPage from '@/router/ErrorPage/ErrorPage';
import { BASE_PAGE_PATH, DASHBOARD_PATH } from '@/constants/paths';
import DashboardPage from '@/pages/Dashboard/DashboardPage';

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
