import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 13px;
  text-align: center;
  border-collapse: collapse;
  margin: 1px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  color: ${props => props.textColor || "#000"};
  height: 15px;
`;

export const THead = styled.thead`
  display: block;

  & > tr {
    background-color: #3C493F;
    color: #fff;
    display: table;
    width: 100%;
  }

  & > tr > td {
    font-size: 13px;
    padding: 5px 5px;
    width: 20%;

    &:hover {
      background-color: #7E8F85;
      cursor: pointer;
    }
  }
`;

export const TBody = styled.tbody`
  display: block;

  & > tr {
    width: 100%;
    display:table;
    &:hover {
      background-color: #f1f1f1;
      cursor: pointer;
    }
  }

  & > tr > td {
    width: 20%;
    padding: 6px 10px;
    border: 1px solid #c4c4c4;
    border-top: none;
    font-size: 13px;
    text-align: left;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchSubmit = styled.div`
  background-color: #3C493F;
  padding: 0 30px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  align-items: center;
  height: 30px;

  &:hover {
    cursor: pointer;
    background-color: #7E8F85;
  }

  &:focus {
    outline: none;
  }
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;
  color: #3C493F;
`;

export const TableFooterMessages = styled.div`

`;