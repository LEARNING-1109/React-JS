// This is parent component to import all small sub-components

import React, { useState } from 'react';
 
import Expenses from "./components/Expenses/Expenses.js";

import NewExpense from './components/NewExpense/NewExpense.js';


  // create date using javascript Date Objects
  // let expenseDate = new Date(2022, 2, 18);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 3000;
  // 👆 Creating these variable which will be further passed to ExpenseItem.js 🔗🔗

  // Instead of creating variable again and again for different expense item ❌❌
  // We will use arrays of object to create
  // let expenses = [
  let DUMMY_EXPENSE = [   // Changing its expenses name to DUMMY_Expense

    // inside curley braces to create objects 👇
    {
      id: 'e1',
      title: 'School Fee',
      amount: 3500,
      date : new Date(2022, 3, 25),
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 700,
      date : new Date(2022, 3, 18),
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 8000,
      date : new Date(2022, 4, 3),
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 2500,
      date : new Date(2022, 4, 12),
    },
  ];



// Now instead of creating function we will create Arrow function
// function App() {
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    
    const updatedExpense = [expense, ...expenses];

    setExpenses(updatedExpense);

    console.log(expense);
  } 
``

  return (
    <div>
        <h2>Let's Get Started</h2>

        {/* 👇 We have to receive new Add Expense data from the NewExpense.js 
          New Expenses will not add simply, we have to use the useState() function to reflect all the changes.
        */}
        <NewExpense onAddExpense={addExpenseHandler} />
      
        {/* 👇 Directly using Repeating Elements  */}
        <Expenses item={ expenses } />      

    </div>

  );
}

export default App;
