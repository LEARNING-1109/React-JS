import logo from './logo.svg';
import './App.css';
import SampleName from './components/SampleName'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,  
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      
      <nav>
        <h1>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/abcd" >Error Page</Link>
        </h1>
      </nav>


      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/home" element={ <Home /> } ></Route>
        <Route path="/about" element={ <About /> } ></Route>
        <Route path="/profile" element={ <Profile /> } ></Route>
        <Route path="*" element={ <ErrorPage /> } ></Route>
      </Routes>

    </Router>

  );
}

export default App;
