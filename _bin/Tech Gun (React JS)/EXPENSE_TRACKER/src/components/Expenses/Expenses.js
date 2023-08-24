import React from 'react';

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card.js";


// function Expenses(props) {
const Expenses = (props) => {

  return (
  <Card className="expenses">

  {/* Creating loop to call each one  */}
    {
      props.item.map(
        (expense, pos) => (
          <ExpenseItem key={pos}
            date = {expense.date}
            title = {expense.title}
            amount = {expense.amount} />
        )
      )
    }

      {/* 👇 Passing above three created variable to the expenseItem.js 🔗🔗 */}

      {/* <ExpenseItem 
      date={expenseDate} 
      // title = "food" // You can directly pass the string
      title={expenseTitle}  // or you can pass the variable
      amount={expenseAmount} 
      /> */}

      {/* // Now we don't need to call it one by one we will bcoz above we have created a loop to call all */}
      {/* <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />

      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />

      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />

      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      /> */}
    </Card>
  );
}

export default Expenses;
