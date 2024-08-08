import * as Accordion from '@radix-ui/react-accordion';
import useSidebarItems from './useSidebarItems';
import SidebarNoDropdownItem from './SidebarNoDropdownItem';
import SidebarDropdownItem from './SidebarDropdownItem';

const SidebarItemList = () => {
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
