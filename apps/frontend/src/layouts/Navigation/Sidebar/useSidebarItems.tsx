import { ReactElement } from 'react';
import {
  DASHBOARD_PATH,
  READERS_PATH,
  ADD_READER_PATH,
  BOOKS_PATH,
  ADD_BOOK_PATH,
  SETTINGS_PATH,
} from '@/constants/paths';
import DashboardIcon from '@/assets/icons/navigation/DashboardIcon';
import ReaderIcon from '@/assets/icons/navigation/readers/ReaderIcon';
import ReaderListIcon from '@/assets/icons/navigation/readers/ReaderListIcon';
import ReaderAddIcon from '@/assets/icons/navigation/readers/ReaderAddIcon';
import LibraryIcon from '@/assets/icons/navigation/books/LibraryIcon';
import LibraryListIcon from '@/assets/icons/navigation/books/LibraryListIcon';
import LibraryAddIcon from '@/assets/icons/navigation/books/LibraryAddIcon';
import SettingsIcon from '@/assets/icons/navigation/SettingsIcon';
import { useTranslation } from 'react-i18next';

interface SidebarBasicListItemType {
  id: number;
  path: string;
  text: string;
  icon: ReactElement;
}

interface SidebarDropdownListItemType
  extends Omit<SidebarBasicListItemType, 'path'> {
  dropdownItems: SidebarBasicListItemType[];
}

export type SidebarListItemsType = (
  | SidebarBasicListItemType
  | SidebarDropdownListItemType
)[];

const useSidebarItems = (): SidebarListItemsType => {
  const { t } = useTranslation(['dashboard']);

  return [
    {
      id: 1,
      path: DASHBOARD_PATH,
      text: t('sidebar.overview', { format: 'capitalise' }),
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      text: t('sidebar.readers'),
      icon: <ReaderIcon />,
      dropdownItems: [
        {
          id: 21,
          path: READERS_PATH,
          text: t('sidebar.readersList'),
          icon: <ReaderListIcon />,
        },
        {
          id: 22,
          path: ADD_READER_PATH,
          text: t('sidebar.addReader'),
          icon: <ReaderAddIcon />,
        },
      ],
    },
    {
      id: 3,
      text: t('sidebar.library'),
      icon: <LibraryIcon />,
      dropdownItems: [
        {
          id: 31,
          path: BOOKS_PATH,
          text: t('sidebar.booksList'),
          icon: <LibraryListIcon />,
        },
        {
          id: 32,
          path: ADD_BOOK_PATH,
          text: t('sidebar.addBook'),
          icon: <LibraryAddIcon />,
        },
      ],
    },
    {
      id: 4,
      path: SETTINGS_PATH,
      text: t('sidebar.settings'),
      icon: <SettingsIcon />,
    },
  ];
};

export default useSidebarItems;
