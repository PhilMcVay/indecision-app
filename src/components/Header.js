import React from 'react'

const Header = (props) => {

  const title = props.title
  const subtitle = props.subtitle

  return (
    <div id="header-container">
      <h1>{title}</h1>
      {
        subtitle &&
        <h2>{subtitle}</h2>
      }
    </div>
  )

}

Header.defaultProps = {
  title: 'Indecision'
}

export default Header