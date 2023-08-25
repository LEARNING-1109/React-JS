import './App.css';
// Importing Components files
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import User from './Components/User';
import Footer from './Components/Footer';

// 1. react router --------------
import { BrowserRouter } from 'react-router-dom';
// 2. react router --------------
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* 1. ----------------- */}
      {/*       
      <BrowserRouter>
        <Navbar />

        <About />
        <Contact />

        <Footer />
        </BrowserRouter> 
      */}

      {/* 2. ------------------------ */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/user/admin" element={<User />} />
          {/* http://localhost:3000/user/abc    🎯 if any query is there in place of ':id' then below Route is rendered */}
          <Route path="/user/:id" element={<User />} />   
          <Route path="/user" element={<User />} />

          
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;
