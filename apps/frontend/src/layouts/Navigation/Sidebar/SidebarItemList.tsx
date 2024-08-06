import * as Accordion from '@radix-ui/react-accordion';
import useSidebarItems from './useSidebarItems';
import { Box } from '@radix-ui/themes';

const SidebarItemList = () => {
  const sidebarListItems = useSidebarItems();

  return (
    <Accordion.Root
      className="flex align-middle flex-col justify-center gap-4 p-4"
      type="multiple"
    >
      {sidebarListItems.map((item) => {
        if ('dropdownItems' in item) {
          return (
            <Accordion.Item
              key={item.id}
              className="AccordionItem"
              value={`item-${item.id}`}
            >
              <Accordion.Trigger>
                {item.icon}
                {item.text}
              </Accordion.Trigger>
              <Accordion.Content>
                {item.dropdownItems.map((subItem) => (
                  <Box key={subItem.id}>
                    {subItem.icon}
                    {subItem.text}
                  </Box>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          );
        }
        return (
          <Accordion.Item
            key={item.id}
            className="AccordionItem"
            value={`item-${item.id}`}
          >
            <Accordion.Trigger>
              {item.icon}
              {item.text}
            </Accordion.Trigger>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

export default SidebarItemList;
