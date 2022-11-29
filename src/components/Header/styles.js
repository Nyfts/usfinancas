import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: #7E8D85;
  padding: 15px 12px;
  font-size: 14px;
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 30%);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  color: #F0F7F4;
  z-index: 1;
`;

export const LeftButton = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 12px;
  transition: all .25s;
  &:hover {
    background-color: #3C493F;
    cursor: pointer;
  }
`;

export const RouteName = styled.div`
  font-size: 18px;
`;