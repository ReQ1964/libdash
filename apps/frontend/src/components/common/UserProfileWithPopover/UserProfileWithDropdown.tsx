import { useMemo } from 'react';
import {
  DropdownMenu,
  Flex,
  Avatar,
  Heading,
  Tooltip,
  Text,
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import useStore from '@/store/store';
import { SETTINGS_PATH } from '@/constants/paths';
import SettingsIcon from '@/assets/icons/navigation/SettingsIcon';
import LogoutIcon from '@/assets/icons/navigation/LogoutIcon';
import DropdownFlex from '@/components/ui/DropdownFlex/DropdownFlex';

const UserProfileWithDropdown = (): JSX.Element => {
  const { username } = useStore((state) => state);
  const { t } = useTranslation(['dashboard']);

  const displayName = username ? username : 'User';
  const userInitials = useMemo(
    () =>
      displayName
        .split(' ')
        .map((name) => name[0])
        .join(''),
    [displayName],
  );

  return (
    <DropdownMenu.Root>
      <Tooltip content={t('topbar.accountSettings')}>
        <DropdownMenu.Trigger className="hover:cursor-pointer">
          <Flex align="center" direction="row" gap="4" justify="center">
            <Avatar color="gray" fallback={userInitials} variant="solid" />
            <Heading as="h5" className="text-white">
              {username}
            </Heading>
          </Flex>
        </DropdownMenu.Trigger>
      </Tooltip>

      <DropdownMenu.Content className="ml-4" variant="soft">
        <Flex direction="column" gap="2" p="1">
          <DropdownMenu.Item>
            <Link to={SETTINGS_PATH}>
              <DropdownFlex>
                <SettingsIcon />
                <Text>{t('sidebar.settings')}</Text>
              </DropdownFlex>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <DropdownFlex>
              <LogoutIcon />
              <Text>{t('topbar.logout')}</Text>
            </DropdownFlex>
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <LanguageSwitcher />
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserProfileWithDropdown;
