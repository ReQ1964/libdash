import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as Accordion from '@radix-ui/react-accordion';
import SidebarDropdownItem from './SidebarDropdownItem';
import {
  SidebarDropdownItemType,
  SidebarNoDropdownItemType,
} from '../useSidebarItems';
import userEvent from '@testing-library/user-event';

describe('SidebarDropdownItem', () => {
  const user = userEvent.setup();

  const mockIcon = <span>Icon</span>;
  const mockDropdownItems: SidebarNoDropdownItemType[] = [
    {
      id: 12,
      icon: <span>SubIcon1</span>,
      text: 'SubItem 1',
      path: '/subitem1',
    },
    {
      id: 13,
      icon: <span>SubIcon2</span>,
      text: 'SubItem 2',
      path: '/subitem2',
    },
  ];

  const mockItem: SidebarDropdownItemType = {
    id: 1,
    icon: mockIcon,
    text: 'Main Item',
    dropdownItems: mockDropdownItems,
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Accordion.Root type="single" collapsible>
          <SidebarDropdownItem {...mockItem} />
        </Accordion.Root>
      </BrowserRouter>,
    );
  });

  it('should render the SidebarDropdownItem with icon and text', () => {
    expect(screen.getByText(/main item/i)).toBeInTheDocument();
    expect(screen.getByText(/icon/i)).toBeInTheDocument();
  });

  it('should not display dropdown items initially', () => {
    expect(screen.queryByText(/subitem 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/subitem 2/i)).not.toBeInTheDocument();
  });

  it('should display dropdown items when the trigger is clicked', async () => {
    const trigger = screen.getByText(/main item/i);
    await userEvent.click(trigger);

    expect(screen.getByText(/subitem 1/i)).toBeInTheDocument();
    expect(screen.getByText(/subitem 2/i)).toBeInTheDocument();
  });

  it('should navigate to the correct path when a dropdown item is clicked', async () => {
    const trigger = screen.getByText(/main item/i);
    await userEvent.click(trigger);

    const subItemLink = screen.getByText(/subitem 1/i).closest('a');
    expect(subItemLink).toHaveAttribute('href', '/subitem1');
  });
});