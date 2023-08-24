import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

// function NewExpense() {
const NewExpense = (props) => {  // Arrow function


    // creating a arrow function to receive inputs data in NewExpense(Parent) from the ExpenseForm.js(Child component)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        
        const expenseData = {
            // 👇 Copying all the imported input data using spread operator
            ...enteredExpenseData,
            
            id: Math.random().toString(),
            // Now adding extra content to it
        }

        // Here onAddExpense function is a function coming from App.js to receive newly added data
        props.onAddExpense(expenseData);

        console.log(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}


export default NewExpense; 