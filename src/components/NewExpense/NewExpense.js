import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const SaveExpenseDateHandler = (enteredEnteredData) => {   //enteredEnteredData=props.onSaveExpenseDate(expenseData); this is from expenseForm.js
    const enteredData = {
      ...enteredEnteredData,
      id: Math.random().toString(),
      
    };
    props.onEnteredNewData(enteredData);
    console.log(enteredData)
    
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={SaveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
