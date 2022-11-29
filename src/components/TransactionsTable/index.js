import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

import transactions from "../../data/transactions.json";

import {
  Container,
  Table,
  THead,
  TBody,
  Tr,
  Td,
  TableContainer,
  SearchBox,
  SearchInput,
  SearchSubmit,
  TableFooter,
  TableFooterMessages,
} from './styles';

function TransactionsTable() {
  const [filter, setFilter] = useState("");

  return (
    <Container>
      <SearchBox>
        <SearchInput
          name="search"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <SearchSubmit onClick={() => { }}>
          <FaSearch color="#fff" size={14} />
        </SearchSubmit>
      </SearchBox>
      <TableContainer>
        <Table cellSpacing={0}>
          <THead>
            <Tr>
              <Td textColor="#fff">Descrição</Td>
              <Td textColor="#fff">Data</Td>
              <Td textColor="#fff">Tipo</Td>
              <Td textColor="#fff">Valor</Td>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid #c4c4c4",
                  borderLeft: "none",
                  borderRight: "none",
                  padding: 3,
                }}
              ></Td>
            </Tr>
            {transactions?.map((transaction) => {
              const date = new Date(transaction.date)
                .toLocaleString("pt-BR")
                .split(" ")[0];
              return (
                <Tr key={transaction.id}>
                  <Td>{transaction.description}</Td>
                  <Td>{date}</Td>
                  <Td textColor={transaction.type === "DESPESA" ? "#a50000" : "#467e5"}>{transaction.type}</Td>
                  <Td>
                    R${" "}
                    {parseFloat(transaction.value)
                      .toFixed(2)
                      .toString()
                      .replace(/\./g, ",")}
                  </Td>
                </Tr>
              );
            })}
          </TBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TableFooterMessages>
          Total de registros: {transactions.length}
        </TableFooterMessages>
      </TableFooter>
    </Container>
  );
}

export default TransactionsTable;