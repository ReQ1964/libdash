import { Heading, Avatar, Flex } from '@radix-ui/themes';
import DialogDemo from './Sidebar';

const TopBar = () => {
  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-5 px-6">
      <DialogDemo />
      <Flex direction="row" justify="center" align="center" gap="4">
        <Avatar fallback="JD" variant="solid" color="gray" />
        <Heading as="h5" className="text-white">
          John Doe
        </Heading>
      </Flex>
    </header>
  );
};

export default TopBar;
