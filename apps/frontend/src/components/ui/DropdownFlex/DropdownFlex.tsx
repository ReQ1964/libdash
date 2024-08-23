import { Flex } from '@radix-ui/themes';
import type { FlexProps } from '@radix-ui/themes';
import type { ReactNode } from 'react';

type DropdownFlexType = FlexProps & {
  children: ReactNode;
};

const DropdownFlex = ({ children, ...rest }: DropdownFlexType): JSX.Element => (
  <Flex
    className="hover:cursor-pointer"
    direction="row"
    gap="4"
    justify="center"
    {...rest}
  >
    {children}
  </Flex>
);

export default DropdownFlex;
