import React from 'react'
import Option from './Option'
import {
  OptionsInner,
  OptionsHead,
  OptionsContainer,
  Flex,
  RemoveButton,
  H2
} from './Options.style'

const Options = (props) => {

  const options = props.options
  const hasOptions = props.hasOptions
  const handleRemoveAll = props.handleRemoveAll
  const handleRemoveOption = props.handleRemoveOption

  return (
    <div id="options-container">
      <OptionsInner>
        <OptionsHead>
          <Flex>
            <H2>Your Options</H2>
            <RemoveButton disabled={!hasOptions} onClick={handleRemoveAll}>Remove All</RemoveButton>
          </Flex>
        </OptionsHead>
        <OptionsContainer>
          {
            !hasOptions &&
            <p>Add an option to the list to get started!</p>
          }
          {
            options.map( (option, index) =>
              <Option
              key={option}
              index={index + 1}
              optionText={option}
              handleRemoveOption={handleRemoveOption}
              />
            )
          }
        </OptionsContainer>
      </OptionsInner>
    </div>
  )

}

export default Options