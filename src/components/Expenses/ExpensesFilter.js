import React from "react";
import './ExpenseFilter.css'

function ExpenseFilter(props){
   
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
       
    }
    
  

    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <label >Filter by year</label>
           
            <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="2019" key="">2019</option>
        <option value="2020" key="">2020</option>
        <option value="2021" key="">2021</option>
        <option value="2022" key="">2022</option>
            </select>

            </div>
        </div>
    )
}

export default ExpenseFilter;