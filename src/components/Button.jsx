import React from 'react'

export default function Button(props) {
  function handleClick(event){
    let val = event.target.value;
    console.log(val)
    if(typeof(parseInt(val)) === "number" && !props.operator){
      console.log(number)
      if(props.tempValues){
        val = props.tempValues + val;
      }
      props.setTempValues(val);
      props.setDisplayValues(val);
    } else if(val !== "=" && !props.operator) {
      props.setTotal(props.tempValues);
      props.tempValues();
      console.log('operator' + props.tempValues)
    } else if(val === "=" && !props.operator) {
      console.log("equals")
    } 
  }

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