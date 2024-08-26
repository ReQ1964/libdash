import * as Accordion from '@radix-ui/react-accordion';
import SidebarDropdownItem from './SidebarDropdownItem/SidebarDropdownItem';
import SidebarNoDropdownItem from './SidebarNoDropdownItem/SidebarNoDropdownItem';
import useSidebarItems from './useSidebarItems/useSidebarItems';

const SidebarItemList = (): JSX.Element => {
  const sidebarListItems = useSidebarItems();

  return (
    <Accordion.Root
      className="flex flex-col align-middle justify-center text-gray-12"
      type="multiple"
    >
      {sidebarListItems.map((item) =>
        'dropdownItems' in item ? (
          <SidebarDropdownItem key={item.id} {...item} />
        ) : (
          <SidebarNoDropdownItem key={item.id} {...item} />
        ),
      )}
    </Accordion.Root>
  );
};

export default SidebarItemList;
