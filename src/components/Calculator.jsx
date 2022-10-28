import React, {useState} from 'react'
import Button from './Button';

export default function Calculator() {
  const values = [7, 8 , 9, "/", 4, 5, 6, "-", 1, 2, 3, "+", "Clear", 0, ".", "="]
  const [firstValues, setFirstValues] = useState(0);
  return (
    <div className='container'>
        <div className='display d-flex justify-content-center text-center'>
            {firstValues}
        </div>
        <div className='buttons-area justify-content-center text-center'>
            {values.map((value, i) =>
              <Button 
                value = {value}
                key = {i}
                firstValues = {firstValues}
                setFirstValues = {setFirstValues}
              />
            )}
        </div>
    </div>
  )
}
