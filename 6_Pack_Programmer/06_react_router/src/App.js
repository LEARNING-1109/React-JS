import './App.css';
// Importing Components files
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import User from './components/User';
import Footer from './components/Footer';

// 1. react router --------------
import { BrowserRouter } from 'react-router-dom';
// 2. react router --------------
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';

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

        {/* jo pehle match ho gya wo render ho jaayega */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />          
          <Route path="/contact" element={<Contact />} />

          <Route path="/user/admin" element={<User name="Admin" />} />
          {/* http://localhost:3000/user/abc    🎯 if any query is there in place of ':id' then below Route is rendered */}
          <Route path="/user/:id" element={<User />} />   
          <Route path="/user" element={<User />} />

          <Route path="*" element={<h1>Page 404 Not Found !</h1>} />

          <Route path='/product/:id' element={<Product />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;
