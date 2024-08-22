import { Heading, Avatar, Flex } from '@radix-ui/themes';
import { useMemo } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import useStore from '@/store/store';

const TopBar = (): JSX.Element => {
  const { username } = useStore((state) => state);

  const userInitials = useMemo(() => {
    return username
      .split(' ')
      .map((letter: string): string => letter.charAt(0))
      .join('');
  }, [username]);

  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-5 px-6">
      <Sidebar />
      <Flex align="center" direction="row" gap="4" justify="center">
        <Avatar color="gray" fallback={userInitials} variant="solid" />
        <Heading as="h5" className="text-white">
          {username}
        </Heading>
      </Flex>
    </header>
  );
};

export default TopBar;
