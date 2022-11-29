import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const Title = styled.div`
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0;
  color: #7c7c7c;
  font-style: italic;
  z-index: 0;
`;

export const BoxContainer = styled.div`
  margin: 10px;
  padding: 20px;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  background-color: #fff;
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
