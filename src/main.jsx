import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { getAttribution } from './utils/attribution';

// Capture and persist attribution from URL UTM params on app startup.
// This ensures the source is stored before any routing/navigation occurs.
getAttribution();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);