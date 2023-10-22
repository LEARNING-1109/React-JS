import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import App2 from './App2';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App2 /> */}
    
  </React.StrictMode>
);

