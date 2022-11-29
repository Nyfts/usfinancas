import styled from "styled-components";

export const Container = styled.div`
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Title = styled.div`
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0;
  color: #3C493F;
  font-style: italic;
  z-index: 0;
`;

export const BoxContainer = styled.div`
  min-height: 200px;
  margin: 20px 20px 0px;
  padding: 20px;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  background-color: #FFF;
  border-radius: 7px;
  position: relative;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    display: inline-flex;
    /* background-color: #f1f1f1; */
`;
