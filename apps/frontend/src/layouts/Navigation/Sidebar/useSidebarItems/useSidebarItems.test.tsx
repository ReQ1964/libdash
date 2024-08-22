/* eslint-disable @typescript-eslint/no-unsafe-assignment -- react functions point to a reference, hence expecting any object, as it doesn't really matter */
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useSidebarItems from './useSidebarItems'; // Adjust path as needed
import {
  DASHBOARD_PATH,
  READERS_PATH,
  ADD_READER_PATH,
  BOOKS_PATH,
  ADD_BOOK_PATH,
  SETTINGS_PATH,
} from '@/constants/paths';

// Mock the useTranslation hook
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
  it('should return the correct sidebar items structure', () => {
    const { result } = renderHook(() => useSidebarItems());

    const expectedItems = [
      {
        id: 1,
        path: DASHBOARD_PATH,
        text: 'Overview',
        icon: expect.any(Object),
      },
      {
        id: 2,
        text: 'Readers',
        icon: expect.any(Object),
        dropdownItems: [
          {
            id: 21,
            path: READERS_PATH,
            text: 'Readers List',
            icon: expect.any(Object),
          },
          {
            id: 22,
            path: ADD_READER_PATH,
            text: 'Add Reader',
            icon: expect.any(Object),
          },
        ],
      },
      {
        id: 3,
        text: 'Library',
        icon: expect.any(Object),
        dropdownItems: [
          {
            id: 31,
            path: BOOKS_PATH,
            text: 'Books List',
            icon: expect.any(Object),
          },
          {
            id: 32,
            path: ADD_BOOK_PATH,
            text: 'Add Book',
            icon: expect.any(Object),
          },
        ],
      },
      {
        id: 4,
        path: SETTINGS_PATH,
        text: 'Settings',
        icon: expect.any(Object),
      },
    ];

    expect(result.current).toEqual(expectedItems);
  });
});
