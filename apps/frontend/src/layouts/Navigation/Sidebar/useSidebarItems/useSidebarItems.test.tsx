import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useSidebarItems from './useSidebarItems';
import {
  DASHBOARD_PATH,
  READERS_PATH,
  ADD_READER_PATH,
  BOOKS_PATH,
  ADD_BOOK_PATH,
  SETTINGS_PATH,
} from '@/constants/paths';

const DashboardIcon = (): JSX.Element => <div>DashboardIcon</div>;
const ReaderIcon = (): JSX.Element => <div>ReaderIcon</div>;
const ReaderListIcon = (): JSX.Element => <div>ReaderListIcon</div>;
const ReaderAddIcon = (): JSX.Element => <div>ReaderAddIcon</div>;
const LibraryIcon = (): JSX.Element => <div>LibraryIcon</div>;
const LibraryListIcon = (): JSX.Element => <div>LibraryListIcon</div>;
const LibraryAddIcon = (): JSX.Element => <div>LibraryAddIcon</div>;
const SettingsIcon = (): JSX.Element => <div>SettingsIcon</div>;

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'sidebar.overview': 'Overview',
        'sidebar.readers': 'Readers',
        'sidebar.readersList': 'Readers List',
        'sidebar.addReader': 'Add Reader',
        'sidebar.library': 'Library',
        'sidebar.booksList': 'Books List',
        'sidebar.addBook': 'Add Book',
        'sidebar.settings': 'Settings',
      };
      return translations[key];
    },
  }),
}));

describe('useSidebarItems', () => {
  it('should return the correct sidebar items', () => {
    const { result } = renderHook(() => useSidebarItems());

    expect(result.current).toEqual([
      {
        id: 1,
        path: DASHBOARD_PATH,
        text: 'Overview',
        icon: <DashboardIcon />,
      },
      {
        id: 2,
        text: 'sidebar.readers',
        icon: <ReaderIcon />,
        dropdownItems: [
          {
            id: 21,
            path: READERS_PATH,
            text: 'sidebar.readersList',
            icon: <ReaderListIcon />,
          },
          {
            id: 22,
            path: ADD_READER_PATH,
            text: 'sidebar.addReader',
            icon: <ReaderAddIcon />,
          },
        ],
      },
      {
        id: 3,
        text: 'sidebar.library',
        icon: <LibraryIcon />,
        dropdownItems: [
          {
            id: 31,
            path: BOOKS_PATH,
            text: 'sidebar.booksList',
            icon: <LibraryListIcon />,
          },
          {
            id: 32,
            path: ADD_BOOK_PATH,
            text: 'sidebar.addBook',
            icon: <LibraryAddIcon />,
          },
        ],
      },
      {
        id: 4,
        path: SETTINGS_PATH,
        text: 'sidebar.settings',
        icon: <SettingsIcon />,
      },
    ]);
  });
});
