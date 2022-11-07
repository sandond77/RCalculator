import React from 'react'

export default function Button(props) {

  //handleclick is attached to all buttons so function needs to determine how to handle each buttons' value
  function handleClick(event){
    let val = event.target.value;
    
    //clearing all state when clear button is hit; switch statement might have been useful here
    if(val === "Clear"){
      props.setTempValues();
      props.setOperator();
      props.setTotal();
      props.setDisplayValues("Enter Numbers");
    } else {
      if(!isNaN(parseInt(val)) && props.operator !== "="){ //checks if the button is a operator or value
        if(props.tempValues){ //if a number is already pressed, function will string concat the numbers instead of evaluating
          val = props.tempValues + val;
        }
        props.setTempValues(val);
        if(!props.operator){ //for the first set of values
          props.setDisplayValues(val);
        } else { //if the first values and operator has been entered, this will concatnate all to dispaly everything on screen
          props.setDisplayValues(props.total + props.operator + val);
        }
      } else if(val !== "=" && !props.operator) { //handles operator buttons except equal
        props.setOperator(val);
        val = props.displayValues + val;
        props.setDisplayValues(val);
        props.setTotal(props.tempValues);
        props.setTempValues(null);
      } else if(val === "=" && props.operator && props.tempValues && props.total) { //handles equal button if all conditions are met
        let val1 = parseInt(props.total);
        let val2 = parseInt(props.tempValues);
        let output = handleMath(val1, props.operator, val2);
        props.setDisplayValues(props.total + props.operator + props.tempValues + "=" + output);
        props.setOperator("=");
      }  
    }
  }

  //basic function to call on to handle math operations
  function handleMath(val, op, val2){
    switch(op){
      case "+":
        return val+val2
      case "-":
        return val - val2
      case "x":
        return val * val2
      case "/":
        return val/val2
      default:
        return null
    }
  }

  return (
    <button 
      type="button" 
      className="btn btn-rounded btn-sm" 
      value={props.value}
      onClick={handleClick}
    >
      {props.value}
    </button>
  )
}