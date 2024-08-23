import { useMemo } from 'react';
import {
  Popover,
  Flex,
  Avatar,
  Heading,
  Tooltip,
  Text,
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useStore from '@/store/store';
import { SETTINGS_PATH } from '@/constants/paths';
import SettingsIcon from '@/assets/icons/navigation/SettingsIcon';
import LogoutIcon from '@/assets/icons/navigation/LogoutIcon';

const UserProfileWithPopover = (): JSX.Element => {
  const { username } = useStore((state) => state);
  const { t } = useTranslation(['dashboard']);

  const userInitials = useMemo(() => {
    return username
      .split(' ')
      .map((letter: string): string => letter.charAt(0))
      .join('');
  }, [username]);

  return (
    <Popover.Root>
      <Tooltip content={t('topbar.accountSettings')}>
        <Popover.Trigger className="hover:cursor-pointer">
          <Flex align="center" direction="row" gap="4" justify="center">
            <Avatar color="gray" fallback={userInitials} variant="solid" />
            <Heading as="h5" className="text-white">
              {username}
            </Heading>
          </Flex>
        </Popover.Trigger>
      </Tooltip>
      <Popover.Content>
        <Flex direction="column" gap="4">
          <Link className="flex justify-center gap-4" to={SETTINGS_PATH}>
            <SettingsIcon />
            <Text>{t('sidebar.settings')}</Text>
          </Link>
          <Flex direction="row" gap="4" justify="center">
            <LogoutIcon />
            <Text>{t('topbar.logout')}</Text>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default UserProfileWithPopover;
