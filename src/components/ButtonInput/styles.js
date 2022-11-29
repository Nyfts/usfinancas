import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 5px;
`;

export const Button = styled.button`
  background-color: ${props => props.primary}; //#3C493F;
  color: #fff;
  border: none;
  padding: 10px 20px;
  min-width: 200px;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }

  &:active {
    border: none;
    background-color: #3C493F;
  }

  &:active {
    border: none;
  }

`;