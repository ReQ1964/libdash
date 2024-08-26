import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

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
