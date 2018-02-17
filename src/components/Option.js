import React, { Component } from 'react'

const Option = (props) => {

  const optionText = props.optionText
  const handleRemoveOption = props.handleRemoveOption

  return (
    <div id="option-container">
      {optionText}
      <button
        onClick={e => {
          handleRemoveOption(optionText)
        }}
      >
        Remove Item
      </button>
    </div>
  )

}

export default Option