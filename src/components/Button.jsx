import React from 'react'

export default function Button(props) {
  return (
    <button type="button" className="btn btn-rounded btn-sm">{props.value}</button>
  )
}
