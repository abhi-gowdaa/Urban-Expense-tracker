import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //or it can be (  'function ExpenseForm{  return()  } '   )
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmont, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput]=useState(

  //   {  enteredTitle:'',
  //     enteredAmont:'',
  //     enteredDate:''
  //   }
  //   )

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value); //{event.nativeEvent.data} //multivalue(1);

    // setUserInput({ // this will forst use old data      singlevalue(2)
    //   ...userInput, //(...)spread operator to select all the value in the array or in object
    //   enteredTitle:event.target.value
    // }); // or {event.nativeEvent.data}

    // setUserInput((prevState)=>{ // this is for up to date date  singlevalue(3)
    //   return {...prevState,enteredTitle:event.target.value}
    // });

    console.log(enteredTitle);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmont:event.target.value
    // });// console.log(userInput.enteredAmont)

    console.log(enteredAmont);
  };

  const DateHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // }); console.log(userInput.enteredDate)

    console.log(enteredDate);
  };

  //     const alernatechangeHandler=(identifier,value)=>{    alternate method(3)
  //       if(identifier==="title")
  //       setEnteredTitle(value);
  //     else if(identifier==="amount")
  //       setEnteredAmount(value);
  //     else setEnteredDate(value);
  //     }
  // <input type="text" onChange={(event)=>{ alernatechangeHandler('title',event.target.value)}} /> same for others

  const submitHandler = (event) => {
    event.preventDefault(); // to prevent submission beforre getting data,if its not used the data will be lost so use it before

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmont,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDate(expenseData);

  setEnteredTitle(""); //to clear the form
    setEnteredAmount(" ");
    setEnteredDate(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //it is used to clear the form
            onChange={titleHandler}
          />
          {/*can use onInput */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="numbers"
            min="0.01"
            step="0.01"
            value={enteredAmont}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2023-12-8"
            value={enteredDate}
            onChange={DateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
