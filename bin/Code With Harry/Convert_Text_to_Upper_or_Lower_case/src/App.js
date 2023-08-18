import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

document.body.style.backgroundColor = "#ccffff";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 1000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1250);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ccffff";
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert="This is alert!" />
        <div className="container my-3">
          {/* <Switch> ❌ this is not working */} 

          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
          {/* </Switch> */}
        </div>
      </Router>
    </>
  );
}

export default App;
