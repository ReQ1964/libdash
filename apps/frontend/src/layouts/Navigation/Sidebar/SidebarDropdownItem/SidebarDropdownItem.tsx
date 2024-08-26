import * as Accordion from '@radix-ui/react-accordion';
import { Flex } from '@radix-ui/themes';
import { NavLink } from 'react-router-dom';
import ChevronDownIcon from '@/assets/icons/arrows/ChevronDownIcon'; // Internal import
import type { SidebarDropdownItemType } from '../useSidebarItems/useSidebarItems'; // Type import

const SidebarDropdownItem = ({
  id,
  icon,
  text,
  dropdownItems,
}: SidebarDropdownItemType): JSX.Element => (
  <Accordion.Item
    className="flex flex-col overflow-hidden"
    key={id}
    value={`item-${id.toString()}`}
  >
    <Accordion.Trigger className="flex p-4 py-5 hover:bg-blacka-2 group">
      <p className="w-1/4 m-auto flex justify-start">{icon}</p>
      <p className="w-3/5 m-auto flex justify-start">{text}</p>
      <ChevronDownIcon className="ml-2 mt-1 transform group-radix-state-open:rotate-180" />
    </Accordion.Trigger>
    <Accordion.Content className="radix-state-open:animate-slideDown radix-state-closed:animate-slideUp ">
      {dropdownItems.map((subItem) => (
        <NavLink
          className="hover:bg-blacka-1"
          key={subItem.id}
          to={subItem.path}
        >
          <Flex className="flex flex-row w-full px-11 py-5 hover:bg-blacka-2">
            <p className="w-1/4 m-auto flex justify-start">{subItem.icon}</p>
            <p className="w-3/4 m-auto flex justify-start">{subItem.text}</p>
          </Flex>
        </NavLink>
      ))}
    </Accordion.Content>
  </Accordion.Item>
);

export default SidebarDropdownItem;
