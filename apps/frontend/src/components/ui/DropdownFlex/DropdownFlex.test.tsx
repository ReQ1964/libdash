// DropdownFlex.test.tsx
import { render, screen } from '@testing-library/react';
import DropdownFlex from './DropdownFlex';

describe('DropdownFlex', () => {
  it('renders children correctly', () => {
    render(
      <DropdownFlex>
        <div>Child 1</div>
        <div>Child 2</div>
      </DropdownFlex>,
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies the default className and styles', () => {
    const { container } = render(
      <DropdownFlex>
        <div>Child 1</div>
      </DropdownFlex>,
    );

    const flexElement = container.querySelector('.hover\\:cursor-pointer');
    expect(flexElement).toBeInTheDocument();
  });
});
