import React, {useState} from 'react'
import Button from './Button';

export default function Calculator() {
  const values = [7, 8 , 9, "/", 4, 5, 6, "-", 1, 2, 3, "+", "Clear", 0, "=", "x"]
  const [displayValues, setDisplayValues] = useState();
  const [tempValues, setTempValues] = useState();
  const [operator, setOperator] = useState();
  const [total, setTotal] = useState();

  return (
    <div className='container'>
        <div className='display d-flex justify-content-center text-center'>
          {displayValues}
        </div>
        <div className='buttons-area justify-content-center text-center'>
            {values.map((value, i) =>
              <Button 
                value = {value}
                key = {i}
                displayValues = {displayValues}
                setDisplayValues = {setDisplayValues}
                tempValues = {tempValues}
                setTempValues = {setTempValues}
                operator = {operator}
                setOperator = {setOperator}
                total = {total}
                setTotal = {setTotal}
              />
            )}
        </div>
    </div>
  )
}
