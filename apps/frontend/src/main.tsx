import React from 'react';
import './index.css';
import '@radix-ui/themes/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
if (el) {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error('Could not find root element');
}
