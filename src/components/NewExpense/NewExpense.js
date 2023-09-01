import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

const [isEditing,setIsEditing]=useState(false)


const SaveExpenseDateHandler = (enteredEnteredData) => {   //enteredEnteredData=props.onSaveExpenseDate(expenseData); this is from expenseForm.js
    const enteredData = {
      ...enteredEnteredData,
      id: Math.random().toString(),
      
    };
    props.onEnteredNewData(enteredData);
    console.log(enteredData)
    setIsEditing(false);
  };

  const startEditingHandler=()=>{
    setIsEditing(true)
  }
   const stopEditingHandler=()=>{
    setIsEditing(false)
   }



   return (
    <div className="new-expense">
     {!isEditing && 
     <button onClick={startEditingHandler}> Add Expense</button>
}

{isEditing &&
      <ExpenseForm 
      onSaveExpenseDate={SaveExpenseDateHandler} 
      onCancle={stopEditingHandler}
      />

}
    </div>
  );
};

export default NewExpense;