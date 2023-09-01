import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
const ExpenseList=props=>{

 
  if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }


  return(
<li className='.expenses-list'>
  {props.items.map((expense)=> (
   <ExpenseItem 
        key={expense.id}         //key should be added to identify unique
       title={expense.title} 
       date={expense.date}
       amount={expense.amount}
    />
    ))
  }

</li>

  )

}

export default ExpenseList;


// import React from 'react';

// import ExpenseItem from './ExpenseItem';
// import './ExpenseList.css';

// const ExpensesList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
//   }

//   return (
//     <ul className='expenses-list'>
//       {props.items.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ExpensesList;