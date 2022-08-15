// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloMessage from './components/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<HelloMessage name="World" />);
});
