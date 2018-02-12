import React, { Component } from 'react'

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hi. This is ${this.name}!`
  }

  description() {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, instrument) {
    super(name, age) // Calls parent constructor function
    this.instrument = instrument
  }

  playsInstrument() {
    return !!this.instrument
  }

  description() {
    let description = super.description()

    if (this.playsInstrument()) {
      description += ` and ${this.name} plays the ${this.instrument}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age) // Class parent constructor function
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    return !!this.homeLocation
  }

  greet() {
    let greeting = super.greet()

    if (this.hasHomeLocation()) {
      greeting += ` He is from ${this.homeLocation} and is currently travelling`
    }

    return greeting
  }
}

const me = new Student('Phil', 27, 'Drums')
console.log(me)
console.log(me.greet())
console.log(me.playsInstrument())
console.log(me.description())

const other = new Student()
console.log(other)
console.log(other.greet())
console.log(other.playsInstrument())
console.log(other.description())

const traveler = new Traveler('Steve', 60, 'Jersey')
console.log(traveler)
console.log(traveler.greet())

class Classes extends Component {
  render() {
    return (
      <p>Hi</p>
    )
  }
}

export default Classes