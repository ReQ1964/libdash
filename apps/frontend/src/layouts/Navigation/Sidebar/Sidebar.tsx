import * as Dialog from '@radix-ui/react-dialog';
import { Text } from '@radix-ui/themes';
import { NavLink } from 'react-router-dom';
import { DASHBOARD_PATH } from '@/constants/paths';
import HamburgerMenuIcon from '@/assets/icons/abstract/HamburgerMenuIcon';
import DoubleArrowLeft from '@/assets/icons/arrows/DoubleArrowLeft';
import SidebarItemList from './SidebarItemList';
import logo from '@/assets/imgs/logo.png';

const Sidebar = (): JSX.Element => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Text as="p" className="flex align-middle ">
          <HamburgerMenuIcon />
        </Text>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blacka-3 fixed inset-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="bg-bronze-2 dark:bg-bronzedark-8 absolute left-0 top-0 w-60 h-full radix-state-open:animate-slideOutFromLeft radix-state-closed:animate-slideInToLeft border-solid border-gray-7 border-r"
        >
          <Dialog.Title>
            <NavLink to={DASHBOARD_PATH}>
              <img
                alt="Logo of the site - books with flames"
                className="my-0 mx-auto"
                height={80}
                src={logo}
                width={200}
              />
            </NavLink>
          </Dialog.Title>
          <Dialog.Close>
            <Text as="p" className="flex align-middle absolute top-3 right-3">
              <DoubleArrowLeft fill="black" />
            </Text>
          </Dialog.Close>

          <SidebarItemList />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sidebar;
