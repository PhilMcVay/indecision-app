import React, { Component } from 'react'

class IndecisionApp extends Component {

  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: []
    }
  }

  handleRemoveAll() {
    this.setState(() => {
      return { options: [] }
    })
  }

  handlePick() {
    const randomNum = (Math.floor(Math.random() * this.state.options.length))
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {

    if (!option) {
      return 'Enter valid value to add option'
    }
    else if (this.state.options.includes(option)) {
      return (`${option} is already in the list. Pick another game`)
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {

    return (
      <div id="container">
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )

  }
}

class Header extends Component {
  render() {

    const title = this.props.title
    const subtitle = this.props.subtitle

    return (
      <div id="header-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )

  }
}

class Action extends Component {

  render() {

    const hasOptions = this.props.hasOptions
    const handlePick = this.props.handlePick

    return (
      <div id="action-container">
        <button
          disabled={!hasOptions}
          onClick={handlePick}
        >
        Which game should you play?
        </button>
      </div>
    )

  }
}

class Options extends Component {

  render() {

    const options = this.props.options
    const handleRemoveAll = this.props.handleRemoveAll

    return (
      <div id="options-container">
        <button onClick={handleRemoveAll}>Remove All</button>
        {
          options.map(option =>
            <Option key={option} optionText={option}/>
          )
        }
      </div>
    )

  }
}

class Option extends Options {
  render() {

    const optionText = this.props.optionText

    return (
      <div id="option-container">
        <p>{optionText}</p>
      </div>
    )

  }
}

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

    this.setState(() => {
      return { error }
    })

    e.target.elements.option.value = ''
  }

  render() {

    const errorMessage = this.state.error

    return (
      <div id="addoption-container">
        {errorMessage &&
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

export default IndecisionApp