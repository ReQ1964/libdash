import * as Accordion from '@radix-ui/react-accordion';
import { NavLink } from 'react-router-dom';
import type { SidebarNoDropdownItemType } from '../useSidebarItems/useSidebarItems';

const SidebarNoDropdownItem = ({
  id,
  icon,
  text,
  path,
}: SidebarNoDropdownItemType): JSX.Element => (
  <NavLink className="hover:bg-blacka-2" to={path}>
    <Accordion.Item
      className="flex flex-col align-middle p-4 py-5"
      value={`item-${id.toString()}`}
    >
      <Accordion.Trigger className="flex">
        <p className="w-1/4 m-auto flex justify-start">{icon}</p>
        <p className="w-3/4 m-auto flex justify-start">{text}</p>
      </Accordion.Trigger>
    </Accordion.Item>
  </NavLink>
);

export default SidebarNoDropdownItem;
