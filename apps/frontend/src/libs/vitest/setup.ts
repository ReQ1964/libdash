import '@testing-library/jest-dom/vitest';

// eslint-disable-next-line import/no-extraneous-dependencies -- eslint's error
import ResizeObserver from 'resize-observer-polyfill';

vi.mock('zustand');

global.ResizeObserver = ResizeObserver;
