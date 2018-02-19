import React, { Component } from 'react'
import {
  AddOptionInner,
  Flex,
  AddOptionButton,
  Form,
  Input,
  P
} from './AddOption.style'

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