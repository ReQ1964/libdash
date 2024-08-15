import * as Accordion from '@radix-ui/react-accordion';
import { NavLink } from 'react-router-dom';
import { SidebarNoDropdownItemType } from '../useSidebarItems';

const SidebarNoDropdownItem = ({
  id,
  icon,
  text,
  path,
}: SidebarNoDropdownItemType) => (
  <NavLink to={path} className="hover:bg-blacka-2">
    <Accordion.Item
      value={`item-${id}`}
      className="flex flex-col align-middle p-4 py-5"
    >
      <Accordion.Trigger className="flex">
        <p className="w-1/4 m-auto flex justify-start">{icon}</p>
        <p className="w-3/4 m-auto flex justify-start">{text}</p>
      </Accordion.Trigger>
    </Accordion.Item>
  </NavLink>
);

export default SidebarNoDropdownItem;
