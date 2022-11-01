import React from 'react'

export default function Button(props) {
  function handleClick(event){
    const val = isNaN(parseInt(event.target.value)) ? event.target.value : parseInt(event.target.value);
    console.log(val)

    if(typeof(val) === "number"){
      console.log('num');
      let concat;
      
      if(props.displayValues == null){
        concat = val
      } else {
        concat = props.displayValues.toString();
        concat += val;
      }

      if(props.setTempValues === null){
        props.setTempValues(parseInt(concat))
      }
      
      props.setDisplayValues(parseInt(concat));
    } else if(val !== "=") {
        console.log(val + ' not num' + typeof(val))
        props.setTempValues(null)
        props.setDisplayValues(val);
        props.setOperator(val);
    } else if(val === "=") {
        let total = handleMath(props.tempValues, props.operator, props.totalValue);
        props.setTotalValues(total);
        props.setDisplayValues(total);
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