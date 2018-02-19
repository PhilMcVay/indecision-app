import styled from 'styled-components'

export const ActionInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
`

export const ActionButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: #825BC2;
  color: white;
  font-size: 2em;
  font-weight: 700;
  padding: 20px 0;
  cursor: pointer;
  border: 0;
  outline: none;
  opacity: 0.9;
  border-bottom: 5px solid #4E3D77;
  transition: 0.1s all ease-in-out;

  &:disabled {
    opacity: 0.6;
    &:hover {
      opacity: 0.6;
    }
  }

  &:hover {
    opacity: 1;
  }
`