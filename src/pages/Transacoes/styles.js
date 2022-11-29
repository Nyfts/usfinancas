import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxContainer = styled.div`
  margin: 25px;
  padding: 20px;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const Form = styled.form`
  width: 100%;
`;
