import { Fragment } from "react";

// 🎯 default export can be imported with any name
// import MyHeading3 from "./components/MyHeading3";
// import { LittleHeading1, LittleHeading2 as MeraNaam, LittleHeading3 } from "./components/MyHeading3";

// 🎯 Combinedly imported as 
import MyHeading3, { LittleHeading1, LittleHeading2 as MeraNaam, LittleHeading3 } from "./components/MyHeading3";
import PropsPage from "./components/PropsPage";

const a = 100;

// arrow function use karne se short ho jaayega code
function MyHeading() {
  return (
    <h1>Heading First</h1>
  )
}

const MyHeading2 = () => <h1>Heading Second (from arrow function)</h1>;


// function App() {
//   return (
//     <Fragment>
//       <div>
//         <MyHeading />
//         <MyHeading2 />
//         Hello World a
//         <br />
//         Hello World {a}
//       </div>
//     </Fragment>
//   );
// }
// ✨ or
const App = () => {
  return (
    <>
      {/* Hello
      <MyHeading3 />

      <LittleHeading1/>
      <MeraNaam/>
      <LittleHeading3/> */}

      <PropsPage head="HomePage" content="Lorem Ipsum 100" footer="All Rights Reserved for HomePage pvt ltd." price={999} />
      
    </>
  );
}

export default App;
