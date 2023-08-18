import ReactDom from "react-dom";

// 👇 Universal CSS
// import './index.css';

// 🎯 We have to keep separate CSS for each component.

// const element = <h1>Create element outside</h1>

// first parameter is to pass JSX
// second parameter is selecting the id or class of index.html file where to pass the element in the
// ReactDom.render( element, document.getElementById('root'));

// ReactDom.render( <h1>React</h1>, document.getElementById('root'));

// ----------------------------------------------------------

import App from "./App";
import App1 from "./App";
/* Write html tag name with lower case generally
    and Component name with first letter as Capital 
    Eg. < App />
*/
ReactDom.render(<App />, document.getElementById("root"));
ReactDom.render(<App1 />, document.getElementById("root"));
