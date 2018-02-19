import styled from 'styled-components'

export const OptionsInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
`

export const OptionsHead = styled.div`
  background-color: #3C4251;
  padding: 15px;
`

export const OptionsContainer = styled.div`
  text-align: center;
  color: #A5AFD6;
  background-color: #464C5E;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RemoveButton = styled.button`
  background: none;
  border: 0;
  color: #A5AFD6;
  line-height: 25px;
  font-size: 0.8em;
  padding: 0;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  &:hover {
    color: white;
  }
`

export const H2 = styled.h2`
  margin: 0;
  color: #A5AFD6;
  line-height: 25px;
  font-size: 1em;
  font-weight: 700;
`