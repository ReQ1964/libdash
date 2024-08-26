import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe } from 'vitest';
import { Theme, DropdownMenu } from '@radix-ui/themes';
import LanguageSwitcher from './LanguageSwitcher';
import { forwardRef } from 'react';

const MockTrigger = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button ref={ref} type="button" {...props}>
      Press me
    </button>
  );
});

MockTrigger.displayName = 'MockTrigger';

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    render(
      <Theme accentColor="brown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <MockTrigger />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <LanguageSwitcher />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Theme>,
    );
  });

  it('should render the LanguageSwitcher', async () => {
    const user = userEvent.setup();
    const triggerButton = screen.getByRole('button', { name: /Press me/i });

    await user.click(triggerButton);

    const languageSwitcher = await waitFor(() =>
      screen.findByTestId('language-switcher-trigger'),
    );
    expect(languageSwitcher).toBeInTheDocument();

    await user.click(languageSwitcher);

    const englishOption = screen.getByText(/english/i);
    const polishOption = screen.getByText(/polski/i);

    expect(englishOption).toBeInTheDocument();
    expect(polishOption).toBeInTheDocument();
  });
});
