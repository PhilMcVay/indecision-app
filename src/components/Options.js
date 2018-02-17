import React, { Component } from 'react'
import Option from './Option'

const Options = (props) => {

  const options = props.options
  const handleRemoveAll = props.handleRemoveAll
  const handleRemoveOption = props.handleRemoveOption

  return (
    <div id="options-container">
      <button onClick={handleRemoveAll}>Remove All</button>
      {
        options.map(option =>
          <Option
          key={option}
          optionText={option}
          handleRemoveOption={handleRemoveOption}
          />
        )
      }
    </div>
  )

}

export default Options