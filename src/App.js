import React, { Component } from 'react'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOption from './components/AddOption'
import styled from 'styled-components'

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #333845;
`

class IndecisionApp extends Component {

  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const items = localStorage.getItem('options')
      const options = JSON.parse(items)

      if (options) {
        this.setState( () => ({ options }) )
      }
    }
    catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options', json)
  }

  handleRemoveOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(options => options !== optionToRemove)
    }))
  }

  handleRemoveAll() {
    this.setState( () => ({ options: [] }) )
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

    this.setState( (prevState) => ({ options: prevState.options.concat(option) }) )
  }

  render() {

    const subtitle = 'Put your life in the hands of a computer'

    return (
      <AppWrapper>
        <Header
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </AppWrapper>
    )

  }
}

export default IndecisionApp