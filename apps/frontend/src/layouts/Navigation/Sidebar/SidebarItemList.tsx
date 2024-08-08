import * as Accordion from '@radix-ui/react-accordion';
import useSidebarItems from './useSidebarItems';
import { Flex } from '@radix-ui/themes';
import { NavLink } from 'react-router-dom';

const SidebarItemList = () => {
  const sidebarListItems = useSidebarItems();

  return (
    <Accordion.Root
      className="flex align-middle flex-col justify-center text-gray-12"
      type="multiple"
    >
      {sidebarListItems.map((item) => {
        if ('dropdownItems' in item) {
          return (
            <Accordion.Item
              key={item.id}
              value={`item-${item.id}`}
              className="flex flex-col"
            >
              <Accordion.Trigger className="flex hover:bg-blacka-1 p-4 py-5">
                <p className="w-1/4 m-auto flex justify-start">{item.icon}</p>
                <p className="w-3/4 m-auto flex justify-start">{item.text}</p>
              </Accordion.Trigger>
              <Accordion.Content>
                {item.dropdownItems.map((subItem) => (
                  <NavLink to={subItem.path} className="hover:bg-blacka-1">
                    <Flex
                      key={subItem.id}
                      className="flex flex-row hover:bg-blacka-1 px-9 py-5 w-full"
                    >
                      <p className="w-1/4 m-auto flex justify-start">
                        {subItem.icon}
                      </p>
                      <p className="w-3/4 m-auto flex justify-start">
                        {subItem.text}
                      </p>
                    </Flex>
                  </NavLink>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          );
        }
        return (
          <NavLink to={item.path} className="hover:bg-blacka-1">
            <Accordion.Item
              key={item.id}
              value={`item-${item.id}`}
              className="flex flex-col align-middle p-4  py-5"
            >
              <Accordion.Trigger className="flex">
                <p className="w-1/4 m-auto flex justify-start">{item.icon}</p>
                <p className="w-3/4 m-auto flex justify-start">{item.text}</p>
              </Accordion.Trigger>
            </Accordion.Item>
          </NavLink>
        );
      })}
    </Accordion.Root>
  );
};

export default SidebarItemList;
