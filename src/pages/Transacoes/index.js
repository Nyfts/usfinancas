import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";

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

function Transacoes() {
  const [loading, setLoading] = useState(true);
  const [movimento, setMovimento] = useState({
    tipo_movId: 2,
    data: new Date(),
    valor: 0,
    desc: "",
    subcategoriaId: 0,
  });
  const [movimentos, setMovimentos] = useState([]);
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  const alert = useAlert();

  const tiposMov = [
    {
      id: 2,
      nome: "Saída",
    },
    {
      id: 3,
      nome: "Investimento",
    },
    {
      id: 1,
      nome: "Entrada",
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  const sendRequest = async () => {
    setLoading(true);
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
                onChange={(e) => setMovimento({ ...movimento, desc: e.target.value })}
              />
              <TextInput
                name="valor"
                title="Valor:"
                onChange={(e) =>
                  setMovimento({
                    ...movimento,
                    valor: parseFloat(e.target.value.replace(/\,/g, ".")),
                  })
                }
              />
              <DatePickerInput
                selected={movimento.data}
                onChange={(date) => setMovimento({ ...movimento, data: date })}
              />
            </Inline>
            <div style={{ marginTop: 20 }}></div>
            <Inline>
              <ButtonInput onClick={sendRequest} title="Receita" primary={"#467e53"} />
              <ButtonInput onClick={sendRequest} title="Despesa" primary={"#a50000"} />
            </Inline>

          </BoxContainer>
          <BoxContainer>
            <Title>Ultimas transações</Title>
            <TransactionsTable transactions={movimentos}/>
          </BoxContainer>
        </>
      )}
    </Container>
  );
}

export default Transacoes;
