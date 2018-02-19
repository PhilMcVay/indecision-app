import React, { Component } from 'react'
import styled from 'styled-components'

const AddOptionInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #464C5E;
  text-align: center;
`

const Flex = styled.div`
  display: flex;
`

const AddOptionButton = styled.button`
  text-align: center;
  background-color: #825BC2;
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border: 0;
  outline: none;
  opacity: 0.9;
  border-bottom: 3px solid #4E3D77;
  transition: 0.1s all ease-in-out;

  &:hover {
    opacity: 1;
  }
`

const Form = styled.form`
  padding: 15px;
`

const Input = styled.input`
  flex: 1;
  border: 0;
  background-color: #333845;
  border-bottom: 3px solid #292B37;
  outline: none;
  color: #A5AFD6;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 1em;
`

const P = styled.p`
  margin: 0;
  padding-top: 15px;
  color: #A5AFD6;
`

class AddOption extends Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState( () => ({ error }) )

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {

    const errorMessage = this.state.error

    return (
      <div id="add-option-container">
        <AddOptionInner>
          {
            errorMessage &&
            <P>{errorMessage}</P>
          }
          <Form onSubmit={this.handleAddOption}>
            <Flex>
              <Input type="text" name="option" autoComplete="off"/>
              <AddOptionButton type="submit">Add Option</AddOptionButton>
            </Flex>
          </Form>
        </AddOptionInner>
      </div>
    )

  }

}

export default AddOption