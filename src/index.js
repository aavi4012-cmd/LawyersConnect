import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global CSS file for basic styles
import App from './App.js'; // Main App component
import reportWebVitals from './reportWebVitals'; // Optional performance logging

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: measure performance and send data to analytics or console
reportWebVitals();
