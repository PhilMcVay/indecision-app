import React from 'react'
import {
  Flex,
  RemoveButton,
  OptionWrap
} from './Option.style'

const Option = (props) => {

  const optionText = props.optionText
  const index = props.index
  const handleRemoveOption = props.handleRemoveOption

  return (
    <div id="option-container">
      <OptionWrap>
        <Flex>
          {index}: {optionText}
          <RemoveButton
            onClick={e => {
              handleRemoveOption(optionText)
            }}
          >
            Remove
          </RemoveButton>
        </Flex>
      </OptionWrap>
    </div>
  )

}

export default Option