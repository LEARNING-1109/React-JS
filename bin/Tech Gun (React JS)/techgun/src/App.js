/*
App.js will be used as parent Component (or Component Gateway) to import all sub component in it.

Then this App.js Parent Component will be imported in the main index.js

✨ This is done to make clear & clean code for index.js
*/

import SubComponent from "./components/SubComponent";

// Respective Component CSS ko respective js file me hi import krna hai
import "./App.css";

// App.js is a component

// 🔴 Return pass only a single thing
// function App() {
//   return <h2>First Component - App.js</h2>;
// }

// 🔴 To pass multiple thing using return keyword we have to wrap them in (like div)
// function App() {
//   return (
//     <div className="app-container" >
//       <h2>First Component - App.js</h2>
//       <p>This is a p tag</p>
//     </div>
//   );
// }

// ----------------------------------------------

/* Now bcoz App.js is a Parent Component so in return(.....) 
🔴 we will not write JSX code directly.

🟢 we will pass all the small Subcomponet here 👇
*/
function App() {
  return (
    <div>
      <h2>This is a h2 tag</h2>
      <SubComponent />
      {/* <SubComponent> </SubComponent> // 🔴 long method */}
    </div>
  );
}

// default is sent so that we can import it with any name
export default App;
