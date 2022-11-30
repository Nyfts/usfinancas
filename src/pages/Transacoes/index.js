import React, { useState, useEffect } from "react";

import TextInput from "../../components/TextInput";
import DatePickerInput from "../../components/DatePickerInput";
import ButtonInput from "../../components/ButtonInput";
import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";

import {
  Container,
  BoxContainer,
  Title,
  Inline,
} from "./styles";
import TransactionsTable from "../../components/TransactionsTable";
import { useData } from "../../contexts/data";
import { useAlert } from "react-alert";

function Transacoes() {
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState({
    description: "",
    date: new Date(),
    value: 0
  });
  const [transactionsState, setTransactionsState] = useState([])
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  const { transactions, setStorageTransactions } = useData();

  const alert = useAlert();

  useEffect(() => {
    console.log("loaded");

    setTransactionsState(transactions);
  }, []);


  function validateForm() {
    if (!transaction.description) {
      return "Descrição é obrigatório";
    }

    if (!transaction.value || typeof transaction.value !== 'number') {
      return "Valor inválido";
    }

    if (!transaction.date) {
      return "Data inválida";
    }
  }

  function sendRequest(type) {
    const errors = validateForm();

    if (errors) {
      return alert.error(errors)
    }

    setTransactionsState([...transactionsState, {
      description: transaction.description,
      date: transaction.date,
      value: transaction.value,
      type: type
    }]);
    setStorageTransactions([...transactionsState, {
      description: transaction.description,
      date: transaction.date,
      value: transaction.value,
      type: type
    }]);
  };

  return (
    <Container>
      {error.show ? (
        <ErrorScreen status={error.status} title={error.title} message={error.message} />
      ) : (
        <>
          <Loading isLoading={loading} />
          <BoxContainer>
            <Title>Cadastrar nova transação</Title>
            <Inline>
              <TextInput
                name="desc"
                title="Descrição:"
                onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
              />
              <TextInput
                name="valor"
                title="Valor:"
                type="number"
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    value: parseFloat(e.target.value.replace(/\,/g, ".")),
                  })
                }
              />
              <DatePickerInput
                selected={transaction.date}
                onChange={(date) => setTransaction({ ...transaction, date: date })}
              />
            </Inline>
            <div style={{ marginTop: 20 }}></div>
            <Inline>
              <ButtonInput onClick={() => sendRequest("RECEITA")} title="Receita" primary={"#467e53"} />
              <ButtonInput onClick={() => sendRequest("DESPESA")} title="Despesa" primary={"#a50000"} />
            </Inline>

          </BoxContainer>
          <BoxContainer>
            <Title>Ultimas transações</Title>
            <TransactionsTable transactions={transactionsState}/>
          </BoxContainer>
        </>
      )}
    </Container>
  );
}

export default Transacoes;
