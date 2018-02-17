import React, { Component } from 'react'

const Action = (props) => {

  const hasOptions = props.hasOptions
  const handlePick = props.handlePick

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

export default Action