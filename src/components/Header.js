import React from 'react'
import {
  HeaderWrap,
  HeaderInner,
  H1,
  H2
} from './Header.style'

const Header = (props) => {

  const title = props.title
  const subtitle = props.subtitle

  return (
    <HeaderWrap>
      <HeaderInner>
        <H1>{title}</H1>
        {
          subtitle &&
          <H2>{subtitle}</H2>
        }
      </HeaderInner>
    </HeaderWrap>
  )

}

Header.defaultProps = {
  title: 'Indecision'
}

export default Header