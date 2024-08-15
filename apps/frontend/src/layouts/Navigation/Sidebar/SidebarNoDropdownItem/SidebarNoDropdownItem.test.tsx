import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as Accordion from '@radix-ui/react-accordion';
import SidebarNoDropdownItem from './SidebarNoDropdownItem';
import { SidebarNoDropdownItemType } from '../useSidebarItems';

describe('SidebarNoDropdownItem', () => {
  const mockItems: SidebarNoDropdownItemType[] = [
    {
      id: 1,
      icon: <span>Icon 1</span>,
      text: 'Item 1',
      path: '/item1',
    },
    {
      id: 2,
      icon: <span>Icon 2</span>,
      text: 'Item 2',
      path: '/item2',
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Accordion.Root type="single" collapsible>
          {mockItems.map((item) => {
            return <SidebarNoDropdownItem {...item} />;
          })}
        </Accordion.Root>
      </BrowserRouter>,
    );
  });

  it('should render the SidebarNoDropdownItems with icon and text', () => {
    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/icon 1/i)).toBeInTheDocument();

    expect(screen.getByText(/item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/icon 2/i)).toBeInTheDocument();
  });

  it('should navigate to the correct path when a dropdown item is clicked', () => {
    const itemLink = screen.getByText(/item 1/i).closest('a');
    expect(itemLink).toHaveAttribute('href', '/item1');
  });
});
