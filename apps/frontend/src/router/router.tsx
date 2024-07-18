import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ErrorPage from '@/router/ErrorPage/ErrorPage';
import { BASE_PAGE_PATH } from '@/constants/paths';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: BASE_PAGE_PATH,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
