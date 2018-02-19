import React from 'react'
import Option from './Option'
import styled from 'styled-components'

const OptionsInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
`

const OptionsHead = styled.div`
  background-color: #3C4251;
  padding: 15px;
`

const OptionsContainer = styled.div`
  text-align: center;
  color: #A5AFD6;
  background-color: #464C5E;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RemoveButton = styled.button`
  background: none;
  border: 0;
  color: #A5AFD6;
  line-height: 25px;
  font-size: 0.8em;
  padding: 0;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  &:hover {
    color: white;
  }
`

const H2 = styled.h2`
  margin: 0;
  color: #A5AFD6;
  line-height: 25px;
  font-size: 1em;
  font-weight: 700;
`

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
              options.map(option =>
                <Option
                key={option}
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