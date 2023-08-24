# CODE WITH HARRY YT TUTORIAL

# set Interval in React and Change document title :

#16th video
```
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = 'TextUtils - Dark Mode';
      setInterval( () => {
        document.title = 'TextUtils is Amazing Mode'
      }, 1000 )
      setInterval( () => {
        document.title = 'Install TextUtils Now'
      }, 1250 )
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ccffff";    
      document.title = 'TextUtils - Light Mode';
    }
  };
```

# React Router Setup + Usage :-

[***React Router Documentation*** 🔗](https://v5.reactrouter.com/web/guides/quick-start)

```js
npx create-react-app Sample
cd Sample
________________________________

npm install react-router-dom    ✨

______________________________


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
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

```

![alt text](./img_for_md/1_def.png)

---

# Conditional Rendering in React :- 👇

**[Conditional Rendering in React]**(https://flexiple.com/react/conditional-rendering-in-react/#section4)

Table of Contents

- What is Conditional Rendering? if/else Ternary operation
- How can we use this in React JS?
- Inline If with Logical && Operator Switch Case operator in React Conditional - Rendering with enums Higher Order Components 

## Example : Inline If with Logical && Operator
```js
function TodoComponent(props) {
  const todoList = props.todoList;
  return (
    <div>
      <h1>Hi User!</h1>
      {todoList.length > 0 &&     // ✨✨
        <h2>
          You have {todoList.length} Tasks to do.
        </h2>
      }
    </div>
  );
}
const todo = ['Eat', 'Play', 'Read'];
ReactDOM.render(
  <Task todoList={todo} />,
  document.getElementById('root')
);
```

