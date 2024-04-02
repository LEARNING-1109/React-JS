import React from 'react';
import Coins from "./Coins";
import Exchanges from './Exchanges';
import Nav from './layouts/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;