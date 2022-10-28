import React from 'react'

export default function Button(props) {
  function handleClick(event){
    const val = isNaN(parseInt(event.target.value)) ? event.target.value : parseInt(event.target.value);
    console.log(val)

    if(typeof(val) === "number"){
      console.log('num');
      let concat;
      if(props.firstValues === 0){
        concat = val
      } else {
        concat = props.firstValues.toString();
        concat += val;
      }
      props.setFirstValues(parseInt(concat));
    } else if(val) {
      console.log('not num');
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