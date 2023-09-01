import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
// import Expense from './Expense';

function ExpenseItem(props) {

// const [title,setTitle]=useState(props.title)

//  const clickHandler=()=>{

//   console.log("clicked")
//    };

  
  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description '>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}> change title</button> */}
   </Card>
  );
}
export default ExpenseItem;















// function ExpenseItem({date,title,amount}) {

//   return (
//     <div className='expense-item'>
//       <div>{date.toISOString()}</div>
//       <div className='expense-item__description '> 
//       <h2>{title}</h2>
//       <div className='expense-item__price'>${amount}</div>
//     </div>
//     </div>
//   );
// }