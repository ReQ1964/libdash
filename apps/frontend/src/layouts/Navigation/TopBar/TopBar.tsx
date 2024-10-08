import UserProfileWithDropdown from '@/components/common/UserProfileWithPopover/UserProfileWithDropdown';
import Sidebar from '../Sidebar/Sidebar';

const TopBar = (): JSX.Element => {
  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-5 px-6">
      <Sidebar />
      <UserProfileWithDropdown />
    </header>
  );
};

export default TopBar;
