Changes in Main Branh Done

[Notes 1 : Apna College 🔗](<https://github.com/All-CODE-with-Explanation/Web-Development-Learning/tree/main/REACT%20JS%20(Learning)>)

## [Notes 2 Link : Tech Gun 👇]

[Notes 3 : Form Validation using JS 🔗](<https://github.com/All-CODE-with-Explanation/Web-Development-Learning/blob/main/REACT%20JS%20(Learning)/1.%20React%20Reusable%20Template/form_validation.md>)

# React JS

A JavaScript Library for building user interfaces.

---

## 🔴 Why not learn Angular or VUE Framework ?

bcoz by using External Library we can make React JS more Powerful & Efficient.

Q. Benefits fo using External Library rather than using Framework that have predefined contents.

Ans.

    While using external library we have lots of options

    But in Framework internal feature those thing which are provided to us we have to adjust with that one.

---

Note : ✨✨

React Native - When react is used for mobile application.

React - Single Page Application (Websites).

# Arrow function

```javascript
let sayName3 = (name3) => {
  // console.log(name3);
  return name3;

  sayName3("Hello World 3");
  console.log(sayName3("Hello World 3"));
};
```

## Shortcut of arrow function

- You can remove the Parenthesis when single parameter is present
- You can remove curley braces and return keyword if only one parameter is returned

```JavaScript
let sayName4 = (name4) => {
    */
   let sayName4 = (name4) => {
       return name4;
};
```

```JavaScript
let sayName5 = (name5) => name5;    // ✨ Shortest form
console.log(sayName5("Hare Krishna"));

let double = num => num*2;
console.log(double(10));
```

## Normal Script vs Module Script

```html
<!-- Adding Normal Script file 👇 -->
<script src="app.js"></script>

<!-- Adding module script 👇 -->
<script type="module" src="app.js"></script>
```

# How to use map function :

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((y) => y * 2);
console.log(doubled);
```

---

# 🔴 Resolve Error (Each child in a list should have a unique "key" prop.)

```js
Warning: Each child in a list should have a unique "key" prop.

react-jsx-dev-runtime.development.js:117

Check the render method of `List_of_candidates`. See https://reactjs.org/link/warning-keys for more information.
   at h3
   at List_of_candidates
   at App
```

To Solve the above mentioned Error, use below instruction

- Add one more parameter named **_pos_** i.e, position in the **_map function._**
- Also, inside the html element add an attribute **_key={pos}_**

```js
// Type this code insidet the return( _______ )
{
  list.map((item, pos) => {
    return (
      <div className="fs-2" key={pos}>
        <div>Name : {item.Name}</div>

        <div>Skills : {item.exp}</div>
      </div>
    );
  });
}
```

# Import and Export in React JS ✅

🎯 Component file customer.js

```javascript
// created a object named person
export const person =  {
  name1 = "Ayush Kumar",
}
```

```javascript
// create arrow function
const person = () => {
  name1 = "Ayush Kumar";
};
```

```javascript
// This is mostly used in React
export default person;
```

🟢 Now import these functions & varible in **_app.js_**

```javascript
// importing default exported person object form customer.js
import person from "./customer.js";
console.log(person);
```

or

```javascript
// importing default exported person object as new name 'ps'
import ps from "./customer.js";
console.log(ps);
```

---

---

🎯 For componenet file sell.js

```javascript
// This below arrow function is exported & other file can use this

export let hello = () => {
  console.log("hello");
};

// exporting variable
export let data = 10;
```

🟢 Now importing these functions and variable in **_app.js_**

```javascript
import { hello } from "./sell.js";
hello();

import { data } from "./sell.js";
console.log(data);
```

```javascript
// Change the variable name of data as da
import { data as da } from "./sell.js";
console.log(da);
```

```javascript
// import multiple file & variable at one time rather than discrete
import { hello, data as da } from "./sell.js";
```

```javascript
// import all files as  a property of the object
import * as bundle from "./sell.js";

bundle.hello();
console.log(bundle.data);
```

## Important Extension in VS Code for React JS :

[Go to File (Material Icon Theme by Philipp Kief & ...)](<https://github.com/All-CODE-with-Explanation/Web-Development-Learning/blob/main/REACT%20JS%20(Learning)/README.md>)

# What's Inside the public folder and its use ❔

- manifest.json - use for pwa (Progressive Web App)

- public/index.html

🟢 The only page of our Website.

## For src/index.css file

Put that css here which is universal same for complete website.

# Which is Component file & Where to import that ? 🤔

1. **_src/App.js_** is **_Component_** file

2. All components file will be imported in **_index.js_**

# After deleting all inside the projectName/src/ folder :

1.

```cmd
Could not find a required file.
  Name: index.js
```

It means first of all we needed to create **_index.js_** file

# 04:50:55 Handle Input in React 👇

if the input field is not changing then apply these changes

const [newTitle, setNewTitle] = useState("hi");

```js
const [newTitle, setNewTitle] = useState("hi");

const changeHandler = (event) => {
  setNewTitle(event.target.value);
};

<input type="text" value={newTitle} onChange={changeHandler} />;
```

👆 Using these codes you will be able to type in the input field and bring effective changes.

🟢 Now on clicking the button, some text in the dom like h2, p, .. tags value become change. HOW TO DO THAT ??

```js
const ExpenseItem = (props) => {
  // let title = "Car Insurance";

  // for editing title creating new variable named title
  // let title = props.title;
  // 👆 Effective changes is not visisble by creating varible. ❌
  // So Let's use useState in place of variable name


  // 👇 here props.title is passed to the useState as a value
  const [title, setTitle] = useState(props.title);
  // here setTitle is the function name using which new value will be stored


  // Creating an Event handler for the onclick
  const clickHandler = () => {
    // setTitle("New Title is here");

    setTitle(newTitle);
  }

  const [newTitle, setNewTitle] = useState("hi");

  const changeHandler =(event) => {
    setNewTitle(event.target.value);
  }
```

```js
  return (
    <Card className="expense-item">

        <h2>{ title}</h2>

        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      <input type="text" value={newTitle}  onChange={changeHandler}/>

      {/* on calling function insdie the onClick in JSX, don't use parenthesis here 👇 */}
      <button className='btn-primary' onClick={clickHandler} >Change Title</button>

    </Card>
  );
}
```

# 🎯 Adding form for New Expense list : 👇

- Adding multiple States in React :

## How Take input and save it ?

```js
const arrowFunction = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  // value will be received as an Object named event
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={titleChangeHandler} />
    </div>
  );
};
```

## Overcome Refresh Problem :

- You will face one problem that on clicking the Submit button. The page will refresh by default.

- But using react means that we have to use the Website without any reloading.

- To Overcome this issue we will use 👇

```js

    const submitHandler = (event) => {

        // Any default behaviour which is generator please close all of them. (i.e, Refresh)
        event.preventDefault();

    }

    return(
      <form onSubmit={submitHandler}>
    )
```

## Now How to collect these input data and store in a list ❔

- We will collect all three data in an object named expenseData.

```js
// keep this code inside the submit handler arrow function
const expenseData = {
  title: enteredTitle,
  amount: enteredAmount,
  date: enteredDate,
};
```

## Again there is Error ❌ that after submit form, input tags remains filled ❔

To overcome this problem we have to save these data in an object and then overwrite these variable with the blank

```js
// Add these codes in submit handler after collecting all data in a object
setEnteredTitle("");
setEnteredAmount("");
setEnteredDate("");
```

Now also add **_value_** attribute inside the input tag so that blank character will be reflective in it.

```js
<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
```

value={enteredTitle}

# Send collected data from child to the Parent :

NewExpense (parent)

⬆

ExpenseForm (child component)

🟢 We have receive data through function only, so we will create a function named **_saveExpenseDataHandler()_**

## 🎯 Parent class will **Receive** data through this way :

We have to create a arrow function with a parameter,

then pass this function inside the return tag to the Child component.

Now inside the child function, we have to call that function, and pass the object in it as parameter in which all the data are stored as object.

```js
// function NewExpense() {
const NewExpense = () => {
  // Arrow function

  // creating a arrow function to receive inputs data in NewExpense(Parent) from the ExpenseForm.js(Child component) 📌 ***Step 1***
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      // 📌 ***Step 2***
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
```

## 🎯 Child class will send data through this way :

Write this inside the submit handler button in the ExpenseForm.js

```js
// 📌 ***Step 3***
props.onSaveExpenseData(expenseData);
```

---

# React Provide facility to use any of the backened languages :

- PHP
- Ruby
- JAVA
- .net
- Python

🔴 Earlier we were using HTML + PHP code combined

🟢 But in React instead of these it provide API support

    API - Application Programming Interface

🟢 Front END and Backend code are separated in REACT.

---

---

# useHistory :

The useHistory hook gives you access to the history instance that you may use to navigate.

```js
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
    // or
    history.push("/LoginAsWaiter/NewOrder/TableOrder/TableMenu");

  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>

    // If you are using histroy mostly use 👇
    <button type="button" onClick={() => dataShow(item)}>
      BTN
    </button>
  );
}
```

# Make Back Button Working using useHistory.goBack() :- 👇

```js
import React from "react";

import { useHistory } from "react-router-dom";

const LoginAsKitchenJSX = ({ handleForm }) => {

  const history = useHistory();

  <button onClick={() => history.goBack()}>
}
```

# Take Form Input of Restaurant App :-

```js
// This is JSX File where form data is generated

import React from "react";

const LoginAsKitchenJSX = ({ handleForm }) => { 🔑🔑🔑🔑🔑
  return (
    <>
      <form method="POST" onSubmit={(e) => handleForm(e)}>  🔑🔑🔑🔑🔑
        <div className=" text-md  absolute left-3 right-3">
          Email or UserName
          <input
            type="email"
            placeholder="ABC23654"
            className=" w-full rounded-lg  py-3 px-4 bg-[#eaedf0] mt-3 mb-3"
            name="kitchenEmail" 🔑🔑🔑🔑🔑
          />
          Password
          <input
            type="text"
            placeholder="At least 8 characters"
            className=" w-full rounded-lg  py-3 px-5 bg-[#eaedf0] mt-3"
            name="kitchenPassword" 🔑🔑🔑🔑🔑
          />
          <a>
            <button
              type="submit" 🔑🔑🔑🔑🔑
              className=" w-full rounded-lg text-white font-bold py-3 px-5 mt-8 bg-[#4690da] text-center "
            >
              Login
            </button>
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginAsKitchenJSX;
```

```js
//  This is .js file where form data is fetched

import React, { useState } from "react";
import LoginAsKitchenJSX from "./LoginAsKitchenX";

export default function LoginAsKitchen() {
  // ⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙

  const [user, setUser] = useState(false);
  const [password, setPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    let userName = e.target.kitchenEmail.value.trim()
      ? e.target.kitchenEmail.value.trim()
      : false;

    let userPassword = e.target.kitchenPassword.value.trim()
      ? e.target.kitchenPassword.value.trim()
      : false;

    let formData = [userName, userPassword];

    console.log(formData);

    console.log("Login Data Submitted Successfully !");

    let user;
  };

  // ⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙

  return (
    <>
      <LoginAsKitchenJSX handleForm={handleForm} />
    </>
  );
}
```

# useReducer in React

🟢 **useReducer** is usually preferable to **useState** when you have complex state logic that involves multiple sub-values.

🟢 It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```js
// Step 1 :
// reducerFunction 👇     👇 intial Value of State
useReducer(reducer, initialState);
newState = reducer(currentState, action);

/* Step 2 : Now we have to create a reducer function with two parameters : state, action
 action means the action which we want to perform on the state

 Step 3 : This useReducer(reducer, initialState) will return two things ~ state , dispatch
*/
const [state, dispatch] = useReducer(reducer, initialState);
// state - state is used to display the data
// dispatch - dispatch function which is going to dispatch our actions
```

🟢 useReducer returns a pair of values [newState, dispatch]

## Take Form Input and display in DOM using **useReducer**

```js
import React, { useState, useReducer } from "react"; // 🔑

const initialState = [  // 🔑 Step 1
  {
    id: Date.now(),
    name: "Ayush Kumar",
    email: "a@gmail.com",
  },
];

function reducer(state, action) {   // 🔑 Step 4
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });

    default:
      throw new error();
  }
}

export default function AddDeleteListOfForm() {
  const [state, dispatch] = useReducer(reducer, initialState);  // 🔑 Step 2

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(state);

  const addContact = (e) => {
    e.preventDefault();

    const contact = {
      id: Date.now(),
      name,
      email,
    };

    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact }); // 🔑 Step 3
  };

  return (
    <>
      <h1>Use Reducer Hooks</h1>
      {/* 👇 🔑 */} 
      <form action="" onSubmit={addContact}> 
        <input
          type="text"
          placeholder="name"
          value={name}  // 🔑
          onChange={(e) => setName(e.target.value)} // 🔑
        />
            &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <button>Add Contact</button>
        </div>
      </form>

      <div>
        <ul>
          {state.map((contact) => { // 🔑
            return (
              <>
                <li key={contact.id}>
                  <h4>{contact.name}</h4>
                  <div>
                    <span>{contact.email}</span> &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() =>        // 🔑
                        dispatch({
                          type: "delete",
                          payload: { id: contact.id },
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

```


# Fetch Data from JSON to JS file :

This is List.json file 👇
```json
[
        {"id": "1", "name":"T1", "booked":"false"},
        {"id": "2", "name":"T2", "booked":"false"},
        {"id": "3", "name":"T3", "booked":"true"},
        {"id": "4", "name":"T4", "booked":"true"},
        {"id": "5", "name":"T5", "booked":"true"}

]
```

This is HandleData.js file 👇
```js
import React from 'react';

import List from './List.json'; // 🔑

export default function HandleData () 
{

    return (
        <>
            <h2>Fetch List Data from JSON to JS file </h2>    

            {/* <ListX /> */}

            {
                List.map( item => { // 🔑🔑
                    return (
                        <div className="box" key={item.id} >
                            { item.name } &nbsp;&nbsp;&nbsp;
                            Booking Status :  {item.booked }
                        </div>
                    )
                } )
            }


        </>
    )
}
```


# How to Export and Import Array of Objects among two JS Files : 👇

```js
// This is Contant.js file
export const TABLE_NUMBER_ARRAY = [
    {name:"T1", booked:false},
    {name:"T2", booked:false},
    {name:"T3", booked:true},
    {name:"T4", booked:true},  
];

export const PARCEL_NUMBER_ARRAY = [
    {name:"P1", booked:false},
    {name:"P2", booked:false},
    {name:"P3", booked:true},
    {name:"P4", booked:true},  
];

```

```js
// File Name is TableOrder.js

import React from "react";
import { Link } from "react-router-dom";

import {
  TABLE_NUMBER_ARRAY,
  PARCEL_NUMBER_ARRAY,
} from "./../../../../../Data/Constant";

export default function TableOrder() {
  let tName;
  let booked;

  let list;
  list = TABLE_NUMBER_ARRAY.filter((item) => {
    tName = item.name;
    booked = item.booked;
    console.log(tName);
  });

  return (
    <div>
      {TABLE_NUMBER_ARRAY.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );


}
```

# Write JSX variable inside the className : 

```jsx
            <button
              type="button"
              className={` ${
                item.booked ? bgGreen : bgOrange
              } text-white font-bold text-xl leading-tight uppercase rounded-2xl shadow-md  hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out `}
              key={item.name}
              onClick={() => dataShow(item)}
            >
              {item.name}
            </button>
```




# Write Text and write conditonal statements ( if else ) in JSX

```js
  {text.length >0 ? text : "Nothing to preview!"  }        
```
- ***[How to write if statement in react js]***(https://reactjs.org/docs/conditional-rendering.html)
