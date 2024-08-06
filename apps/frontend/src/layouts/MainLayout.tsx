import { Outlet } from 'react-router-dom';
import TopBar from './Navigation/TopBar/TopBar';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
