import logo from './logo.svg';
import './App.css';

let name = 'Er. Ayush Kumar';
name = '<b>Er. Ayush Kumar</b>';  // react protect from unwanted js code insertion in your react app 

function App() {
  return (
    <>
      <h1>Hare Krishna</h1> 
      <nav>
        <li>Home</li> 
        <li>Contact</li>
        <li>About</li>
      </nav>
      <p>Hello {name}</p>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React with Ayush Kumar
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
