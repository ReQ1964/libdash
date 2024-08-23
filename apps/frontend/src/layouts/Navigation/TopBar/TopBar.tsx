import Sidebar from '../Sidebar/Sidebar';
import UserProfileWithPopover from '@/components/common/UserProfileWithPopover/UserProfileWithPopover';

const TopBar = (): JSX.Element => {
  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-5 px-6">
      <Sidebar />
      <UserProfileWithPopover />
    </header>
  );
};

export default TopBar;
