import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import DialogDemo from './Sidebar';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
