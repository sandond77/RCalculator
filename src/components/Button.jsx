import React from 'react'

export default function Button(props) {
  function handleClick(event){
    let val = event.target.value;

    if(val === "Clear")){
      props.setTempValues();
      props.setOperator();
      props.setTotal();
      props.setDisplayValues("Enter Numbers");
    } else {
      if(!isNaN(parseInt(val)) && props.operator !== "="){
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
        props.setOperator(val);
        val = props.displayValues + val;
        props.setDisplayValues(val);
        props.setTotal(props.tempValues);
        props.setTempValues(null);
      } else if(val === "=" && props.operator && props.tempValues && props.total) {
        let val1 = parseInt(props.total);
        let val2 = parseInt(props.tempValues);
        let output = handleMath(val1, props.operator, val2);
        props.setDisplayValues(props.total + props.operator + props.tempValues + "=" + output);
        props.setOperator("=");
      }  
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