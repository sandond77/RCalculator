import React from 'react'
import Button from './Button';
export default function Calculator() {
  return (
    <div className='container'>
        <div className='display d-flex justify-content-center'>
            This is the display
        </div>
        <div className='buttons-area text-center'>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
        </div>
    </div>
  )
}
