import * as Accordion from '@radix-ui/react-accordion';
import { NavLink } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import { SidebarDropdownItemType } from './useSidebarItems';

const SidebarDropdownItem = ({
  id,
  icon,
  text,
  dropdownItems,
}: SidebarDropdownItemType) => (
  <Accordion.Item key={id} value={`item-${id}`} className="flex flex-col">
    <Accordion.Trigger className="flex p-4 py-5 hover:bg-blacka-2">
      <p className="w-1/4 m-auto flex justify-start">{icon}</p>
      <p className="w-3/4 m-auto flex justify-start">{text}</p>
    </Accordion.Trigger>
    <Accordion.Content>
      {dropdownItems.map((subItem) => (
        <NavLink
          key={subItem.id}
          to={subItem.path}
          className="hover:bg-blacka-1"
        >
          <Flex className="flex flex-row w-full px-9 py-5 hover:bg-blacka-2">
            <p className="w-1/4 m-auto flex justify-start">{subItem.icon}</p>
            <p className="w-3/4 m-auto flex justify-start">{subItem.text}</p>
          </Flex>
        </NavLink>
      ))}
    </Accordion.Content>
  </Accordion.Item>
);

export default SidebarDropdownItem;
