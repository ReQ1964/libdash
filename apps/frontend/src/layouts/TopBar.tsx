import { Heading, Avatar, Flex } from '@radix-ui/themes';
import HamburgerMenuIcon from '@/assets/icons/abstract/HamburgerMenuIcon';

const TopBar = () => {
  return (
    <header className="flex align-middle justify-between bg-bronze-12 p-6">
      <HamburgerMenuIcon />
      <Flex direction="row" justify="center" align="center" gap="2">
        <Avatar fallback="JD" variant="solid" color="gray" />
        <Heading as="h5" className="text-white">
          John Doe
        </Heading>
      </Flex>
    </header>
  );
};

export default TopBar;
