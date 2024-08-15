import { Outlet } from 'react-router-dom';
import TopBar from './Navigation/TopBar/TopBar';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
