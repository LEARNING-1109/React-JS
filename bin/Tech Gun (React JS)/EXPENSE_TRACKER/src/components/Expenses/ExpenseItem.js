// Also importing useState by writing particularly useState
import React, {useState} from 'react';

import "./ExpenseItem.css";

import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

// writing props parameter to receive all the passed variable as object (props) from the App.js 🔗🔗
// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  // let title = "Car Insurance";

  // for editing title creating new variable named title
  // let title = props.title;
  // 👆 Effective changes is not visisble by creating varible. ❌
  // So Let's use useState in place of variable name
  
  // useState("");
  // useState("Hello School");
  // 👇 here props.title is passed to the useState as a value
  const [title, setTitle] = useState(props.title);
  // here setTitle is the function name using which new value will be stored
  

  // Creating an Event handler for the onclick
  const clickHandler = () => {
    // alert ("clicked");
    // title = "New Title.."; // these will not work ❌, so useState to fix this ✔
    console.log(title);

    // setTitle("New Title is here");

    setTitle(newTitle);

  } 

  const [newTitle, setNewTitle] = useState("");

  const changeHandler =(event) => {
    setNewTitle(event.target.value);
  }


  return (

    /* Card component is used here, so that by using {props.children} we can call all the sub JSX tag inside the Card Component. 👇
    
    But this will not send the other className which is added here in the Card component. ❌
    
    To solve this problem we have to also import className by using props.className ✅
    */
    <Card className="expense-item">
      
      {/* 👇 Again passing date to ExpenseDate.js file */}
      {/* <ExpenseDate date={props.date} /> ❌🤷‍♀️🤯 */}
      <ExpenseDate date= {new Date(props.date)} /> 
      {/* 👆👆 earlier string is coming as date, But it need object to be passed ✅ */}

      <div className="expense-item__description">
        {/* <h2>Car Insurance</h2> */}
        {/* <h2>{title}</h2> */}
        {/* <h2>{2+4}</h2> */}
        {/* 👆 Inside the curley braces we can write javaScript Code */}

        {/* using title local variable instead of props.title here so that changed title name would be effective ❌👇
            But here title is working properly bcoz of useState ✅
        */}
        <h2>{ props.title}</h2>

        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      <input type="text" value={newTitle}  onChange={changeHandler}/>

      {/* on calling function insdie the onClick in JSX, don't use parenthesis here 👇 */}
      <button className='btn-primary' onClick={clickHandler} >Change Title</button>
      
    </Card>
  );
}

export default ExpenseItem;
