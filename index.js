import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS file for styling
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance (optional)

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measuring performance
// If you want to measure app performance, replace the `console.log` below with your analytics function.
reportWebVitals(console.log);
