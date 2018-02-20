import styled from 'styled-components'

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

export const OptionWrap = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`