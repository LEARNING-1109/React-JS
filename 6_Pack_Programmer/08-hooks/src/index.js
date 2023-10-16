import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createContext } from 'react';  // 📄
const MyContext = createContext();  // 📄

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <MyContext.Provider value={"Ayush"} >   
      <App />
    </MyContext.Provider>
  </React.StrictMode>
);

export { MyContext }; // 📄
