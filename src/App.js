import React, { Component } from 'react'

class IndecisionApp extends Component {
  render() {

    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'
    const options = [
      'Celeste',
      'Hyper Light Drifter',
      'Briad',
      'Super Meat Boy',
      'FEZ'
    ]

    return (
      <div id="container">
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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

  handleAction(e) {
    alert(e.target.textContent)
  }

  render() {

    return (
      <div id="action-container">
        <button onClick={this.handleAction}>What should I do?</button>
      </div>
    )

  }
}

class Options extends Component {

  handleRemoveAll(e) {
    alert(e.target.textContent)
  }

  render() {

    const options = this.props.options

    return (
      <div id="options-container">
        <button onClick={this.handleRemoveAll}>Remove All</button>
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