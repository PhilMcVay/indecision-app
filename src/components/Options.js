import React from 'react'
import Option from './Option'

const Options = (props) => {

  const options = props.options
  const hasOptions = props.hasOptions
  const handleRemoveAll = props.handleRemoveAll
  const handleRemoveOption = props.handleRemoveOption

  return (
    <div id="options-container">
      <button disabled={!hasOptions} onClick={handleRemoveAll}>Remove All</button>
      {
        !hasOptions &&
        <p>Add options to the list!</p>
      }
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