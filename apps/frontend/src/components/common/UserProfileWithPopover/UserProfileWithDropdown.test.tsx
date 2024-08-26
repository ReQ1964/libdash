import {
  render,
  screen,
  renderHook,
  act,
  waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import useStore from '@/store/store';
import UserProfileWithDropdown from './UserProfileWithDropdown';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'sidebar.settings': 'Settings',
        'topbar.logout': 'Logout',
      };
      return translations[key];
    },
  }),
}));

describe('UserProfileWithDropdown', () => {
  beforeEach(() => {
    render(
      <Theme accentColor="brown">
        <BrowserRouter>
          <UserProfileWithDropdown />
        </BrowserRouter>
      </Theme>,
    );
  });

  it('should open dropdown menu and show menu items', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByTestId('dropdown-trigger'));

    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('should render a link with settings path that leads to settings path', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByTestId('dropdown-trigger'));

    const linkDestination = '/dashboard/settings';
    const settingsLink = screen.getByText(/settings/i).closest('a');
    expect(settingsLink).toHaveAttribute('href', linkDestination);

    if (settingsLink) {
      await user.click(settingsLink);
      expect(window.location.pathname).toBe(linkDestination);
    }
  });

  it('should render username and user initials', async () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.updateUsername('John Doe');
    });

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/jd/i)).toBeInTheDocument();
    });
  });

  it('should render "User" and "U" if username is empty', async () => {
    expect(screen.getByText(/user/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/u/i)).toBeInTheDocument();
    });
  });

  it('should display the tooltip on hover', async () => {
    const user = userEvent.setup();
    await user.hover(screen.getByTestId('dropdown-trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('account-tooltip')).toBeInTheDocument();
    });
  });
});
