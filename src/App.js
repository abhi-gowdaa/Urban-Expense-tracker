// import ExpenseItem from "./components/ExpenseItem";
import React,{useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from './components/NewExpense/NewExpense';

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App=()=> {
  
  const [expenses,setExpense]=useState(dummyData)

  const addEnteredData=(expense)=>{
    setExpense((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
   
};
    // expenses.push(expense) cANT USE
    
   
  return (
    <div>
      <NewExpense onEnteredNewData={addEnteredData}  />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
