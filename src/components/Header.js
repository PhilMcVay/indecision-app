import React from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  width: 100%;
  background-color: #21222B;
`

const HeaderInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

const H1 = styled.h1`
  margin: 0;
  color: white;
`

const H2 = styled.h2`
  margin: 0;
  color: #A5AFD6;
  line-height: 25px;
  font-size: 1em;
  font-weight: 400;
`

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