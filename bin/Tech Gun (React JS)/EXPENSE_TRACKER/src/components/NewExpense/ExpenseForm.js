import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Creating variable using useState so that we can change its value
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // value will be received as an Object named event
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const amountTitleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const dateTitleChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // Any default behaviour which is generator please close all of them. (i.e, Refresh)
    event.preventDefault();

    // We will collect all three data in an object named expenseData.
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);

    console.log(expenseData);

    // Again there is Error ❌ that after submit form, input tags remains filled ❔ 👇
    // To overcome this problem we have to save these data in an object and then overwrite these variable with the blank 👇
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* Parent wrapper 👇 */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountTitleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateTitleChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
