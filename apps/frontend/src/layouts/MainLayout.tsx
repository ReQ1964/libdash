import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
