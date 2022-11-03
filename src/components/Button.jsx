import React from 'react'

export default function Button(props) {
  function handleClick(event){
    let val = event.target.value;
    let output;

    if(val === "Clear"){
      props.setTempValues(null);
      props.setOperator(null);
      props.setTotal(null);
      props.setDisplayValues(null);
    }

    if(!isNaN(parseInt(val)) && !output){
      console.log("number");

      if(props.tempValues){
        val = props.tempValues + val;
      }

      props.setTempValues(val);
      
      if(!props.operator){
        console.log(1)
        props.setDisplayValues(val);
      } else {
        console.log(2)
        props.setDisplayValues(props.total + props.operator + val);
      }
    } else if(val !== "=" && !props.operator) {
      console.log('operator path')
      props.setOperator(val);
      val = props.displayValues + val;
      props.setDisplayValues(val);
      props.setTotal(props.tempValues);
      props.setTempValues(null);
    } else if(val === "=" && props.operator && props.tempValues && props.total) {
      console.log("equals")
      let val1 = parseInt(props.total);
      let val2 = parseInt(props.tempValues);
      output = handleMath(val1, props.operator, val2);
      props.setDisplayValues(props.total + props.operator + props.tempValues + "=" + output);
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