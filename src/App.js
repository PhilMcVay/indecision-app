import React, { Component } from 'react'

class IndecisionApp extends Component {

  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: [
        'Celeste',
        'Hyper Light Drifter',
        'Briad',
        'Super Meat Boy',
        'FEZ'
      ]
    }
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = (Math.floor(Math.random() * this.state.options.length))
    const option = this.state.options[randomNum]
    alert(option)
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
        <AddOption />
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
        What should I do?
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

  handleAddOption(e) {
    e.preventDefault()
    let option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }

    e.target.elements.option.value = ''
  }

  render() {

    return (
      <div id="addoption-container">
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button type="submit">Add Option</button>
        </form>
      </div>
    )

  }
}

export default IndecisionApp