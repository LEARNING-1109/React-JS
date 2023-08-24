// Type rafc shortcut

import React from "react";
import User from "./components/PropsRev/User";
// import inuseLocation from './components/UseLocation/Index';
// import UseLocation from "./components/useLocation/Parent";
import Toastify from "./components/Toastify/Toastify"

import Home from "./components/Project_01/components/Home";

const App = () => {
  return (
    <>
      {/* <div className="App">
        <h1>App Component</h1>
        
        <User data={{name: 'Ayush Kumar', age:20 } } />

      </div> */}

      {/* 👇 This is not working */}
      {/* <UseLocation /> */}


      {/* <Home /> */}
      <Toastify />
    </>
  );
};

export default App;
