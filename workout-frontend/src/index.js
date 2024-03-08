import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './apps/workout-document/homepage.tsx';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="text-3xl font-bold underline">
      <HomePage />
    </div>
  </React.StrictMode>
);

reportWebVitals();
