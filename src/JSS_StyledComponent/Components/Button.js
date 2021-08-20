import styled from "styled-components";

export const Button = styled.button`
  color: red;
  background-color: ${props => props.bgPrimary ? 'blue' : 'red'};
  border-radius: 3px;
  font-weight: bold;
  padding: 1rem;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 0.5s;
  }
  &.button_style {
    font-size: ${props => props.fontSize2x ? '3rem' : '2rem'};
    color: yellow;
  }
`;

export const SmallButton = styled(Button)`
  background-color: pink;
  font-size: 0.5rem;
  padding: 3rem;
`
