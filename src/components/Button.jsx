import React from 'react'

export default function Button(props) {
  function handleClick(event){
    const val = isNaN(parseInt(event.target.value)) ? event.target.value : parseInt(event.target.value);
    console.log(val)

    if(typeof(val) === "number"){

    } else if(val !== "=") {

    } else if(val === "=") {

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