import React, { Component } from 'react'

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
        {
          errorMessage &&
          <p>{errorMessage}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )

  }

}

export default AddOption