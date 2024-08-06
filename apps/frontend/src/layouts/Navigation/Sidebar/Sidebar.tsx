import * as Dialog from '@radix-ui/react-dialog';
import { Text } from '@radix-ui/themes';
import HamburgerMenuIcon from '@/assets/icons/abstract/HamburgerMenuIcon';
import DoubleArrowLeft from '@/assets/icons/arrows/DoubleArrowLeft';
import logo from '@/assets/imgs/logo.png';
import SidebarItemList from './SidebarItemList';

const Sidebar = () => {
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
          className="bg-bronze-2 dark:bg-bronzedark-8 absolute left-0 top-0 w-60 h-full data-[state=open]:animate-slideOutFromLeft data-[state=closed]:animate-slideInToLeft"
          aria-describedby={undefined}
        >
          <Dialog.Title>
            <img src={logo} width={200} height={80} className="my-0 mx-auto" />
          </Dialog.Title>
          <Dialog.Close>
            <Text as="p" className="flex align-middle absolute top-3 right-3">
              <DoubleArrowLeft fill={'black'} />
            </Text>
          </Dialog.Close>

          <SidebarItemList />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sidebar;
