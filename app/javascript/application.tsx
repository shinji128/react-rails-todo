// Entry point for the build script in your package.json
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
