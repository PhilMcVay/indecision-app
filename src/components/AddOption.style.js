import styled from 'styled-components'

export const AddOptionInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #464C5E;
  text-align: center;

  p {
    font-size: 14px;
    font-style: italic;
  }
`

export const Flex = styled.div`
  display: flex;
`

export const AddOptionButton = styled.button`
  text-align: center;
  background-color: #825BC2;
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border: 0;
  outline: none;
  opacity: 0.9;
  border-bottom: 3px solid #4E3D77;
  transition: 0.1s all ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const Form = styled.form`
  padding: 15px;
`

export const Input = styled.input`
  flex: 1;
  border: 0;
  background-color: #333845;
  border-bottom: 3px solid #292B37;
  outline: none;
  color: #A5AFD6;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 1em;
`

export const P = styled.p`
  margin: 0;
  padding-top: 15px;
  color: #A5AFD6;
`