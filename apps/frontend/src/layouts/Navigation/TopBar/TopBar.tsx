import { Heading, Avatar, Flex } from '@radix-ui/themes';
import Sidebar from '../Sidebar/Sidebar';

const TopBar = (): JSX.Element => {
  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-5 px-6">
      <Sidebar />
      <Flex align="center" direction="row" gap="4" justify="center">
        <Avatar color="gray" fallback="JD" variant="solid" />
        <Heading as="h5" className="text-white">
          John Doe
        </Heading>
      </Flex>
    </header>
  );
};

export default TopBar;
