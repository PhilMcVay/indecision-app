import React from 'react'
import {
  ActionInner,
  ActionButton
} from './Action.style'

const Action = (props) => {

  const hasOptions = props.hasOptions
  const handlePick = props.handlePick

  return (
    <div id="action-container">
      <ActionInner>
        <ActionButton
          disabled={!hasOptions}
          onClick={handlePick}
        >
        What should I do?
        </ActionButton>
      </ActionInner>
    </div>
  )

}

export default Action