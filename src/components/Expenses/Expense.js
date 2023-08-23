import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
function Expense(props){


const [filterYear,setFilterYear]=useState('2020')
// const [selectedYear,setYear]=useState('2019 2021 2022')

const filterChangeHAndler=selectedYear=>{
  setFilterYear(selectedYear)

  // if(selectedYear==='2019')
  // setYear('hehe 2019')
  // else setYear("noonoe")
}

const filteredExpenses=props.items.filter( (expense)=>{
  
  return expense.date.getFullYear().toString()===filterYear
  
})




    return(
        <Card className="expenses">
 <ExpenseFilter 
          selected={filterYear}
                   onChangeFilter={filterChangeHAndler}/>
 {/* <p> the year is {selectedYear} year </p> */}
{ filteredExpenses.length===0 && (<p> no item yet </p>)}
{ filteredExpenses.length>0 && filteredExpenses.map((expense)=>  //props.items.map to scarp all  //array loop instead of for loop,jsx built in
   <ExpenseItem 
       key={expense.id}         //key should be added to identify unique
      title={expense.title} 
      date={expense.date}
      amount={expense.amount}
   />)}

   

    {/* <ExpenseItem
      title={props.items[0].title}
      date={props.items[0].date}
      amount={props.items[0].amount}
    ></ExpenseItem>
      
    <ExpenseItem
      title={props.items[1].title}
      date={props.items[1].date}
      amount={props.items[1].amount}
    ></ExpenseItem>
  <ExpenseItem
    title={props.items[2].title}
    date={props.items[2].date}
    amount={props.items[2].amount}
  ></ExpenseItem>
 <ExpenseItem
      title={props.items[3].title}
      date={props.items[3].date}
      amount={props.items[3].amount}
    ></ExpenseItem> */}
    
    </Card>


    );
}

export default Expense;

// import React, { useState } from 'react';

// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesList from './ExpenseList';
// import './Expense.css';

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className='expenses'>
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         <ExpensesList items={filteredExpenses} />
//       </Card>
//     </div>
//   );
// };

// export default Expenses;