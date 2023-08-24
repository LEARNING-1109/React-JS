import React from "react";
import LearnUseReducer from "./components/UseReducer/LearnUseReducer";
import AddDeleteListOfForm from "./components/UseReducer/AddDeleteListOfForm";

import HandleData from "./components/FetchJSX_TableToJS/HandleData";
import LearnProps from "./components/Props/LearnProps";

import ComplexStateAction from "./components/UseReducer/ComplexStateAction";

import HandleLogin from "./components/LoggedIn/HandleLogin"

function App() {
  return (
    <>
      {/* <LearnUseReducer /> */}

      {/* <AddDeleteListOfForm /> */}

      {/* <HandleData /> */}

      {/* <ComplexStateAction /> */}


      {/* 👇 App.js <--- LearnProps.js <---  PropsExample.js */}
      {/* <LearnProps /> */}

      <HandleLogin />

    </>
  );
}

export default App;
