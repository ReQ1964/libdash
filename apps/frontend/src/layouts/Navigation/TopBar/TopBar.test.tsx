import { act, renderHook, screen, render } from '@testing-library/react';
import { Theme } from '@radix-ui/themes';
import TopBar from './TopBar';
import useStore from '@/store/store';

describe('TopBar', () => {
  it('should render with correct username', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.updateUsername('John Doe');
    });

    render(
      <Theme>
        <TopBar />
      </Theme>,
    );

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });
});
