import React, { Suspense } from 'react';
import './index.css';
import '@radix-ui/themes/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './libs/i18n/config';

const el = document.getElementById('root');
if (el) {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </React.StrictMode>,
  );
} else {
  throw new Error('Could not find root element');
}
