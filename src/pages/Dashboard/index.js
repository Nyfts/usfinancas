import React, { useState, useEffect } from "react";
import { PieChart } from 'react-minimal-pie-chart';

import { Container, Grid, Title, BoxContainer, DataContainer, DataTitle, DataDescription, DataValueTitle, DataValue } from "./styles";

import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";
import TransactionsTable from "../../components/TransactionsTable";
import { useData } from "../../contexts/data";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [transactionsState, setTransactionsState] = useState([])
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  const { transactions, setStorageTransactions } = useData();

  useEffect(() => {
    console.log("loaded");

    setTransactionsState(transactions);
  }, []);

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <Container>
      {error.show ? (
        <ErrorScreen status={error.status} title={error.title} message={error.message} />
      ) : (
        <>
          <Loading isLoading={loading} />
          <Grid>
            <div style={{ gridArea: "1 / 1 / 2 / 2" }}>
              <BoxContainer>
                <Title>Mensal</Title>

                <DataContainer>
                  <div style={{maxHeight: "280px"}}>
                    <PieChart
                      data={[
                        { title: 'Receita', value: 60, color: '#467e53' },
                        { title: 'Despesa', value: 40, color: '#a50000' },
                      ]}
                    />
                  </div>
                </DataContainer>
                <DataContainer>
                  <DataTitle>
                    {"Novembro/2022"}
                  </DataTitle>
                  <div>
                    <DataDescription>
                      <DataValueTitle>Receita:</DataValueTitle><DataValue color="#467e53">{"R$ 2.000,00"}</DataValue>
                    </DataDescription>
                    <DataDescription>
                      <DataValueTitle>Despesa:</DataValueTitle><DataValue color="#a50000">{"R$ 1.599,00"}</DataValue>
                    </DataDescription>
                    <DataDescription>
                      <DataValueTitle>Saldo:</DataValueTitle><DataValue>{"R$ 401,00"}</DataValue>
                    </DataDescription>
                  </div>
                </DataContainer>
              </BoxContainer>
            </div>
            <div style={{ gridArea: "1 / 2 / 2 / 3" }}>
              <BoxContainer>
                <Title>Anual</Title>

                <DataContainer>
                  {/* Grafico */}
                </DataContainer>
                <DataContainer>
                  <DataTitle>
                    {"2022"}
                  </DataTitle>
                  <div>
                    <DataDescription>
                      <DataValueTitle>Receita:</DataValueTitle><DataValue color="#467e53">{"R$ 2.000,00"}</DataValue>
                    </DataDescription>
                    <DataDescription>
                      <DataValueTitle>Despesa:</DataValueTitle><DataValue color="#a50000">{"R$ 1.599,00"}</DataValue>
                    </DataDescription>
                    <DataDescription>
                      <DataValueTitle>Saldo:</DataValueTitle><DataValue>{"R$ 401,00"}</DataValue>
                    </DataDescription>
                  </div>
                </DataContainer>
              </BoxContainer>
            </div>
            <div style={{ gridArea: "2 / 1 / 3 / 3" }}>
              <BoxContainer>
                <Title>Ultimas movimentações</Title>
                <TransactionsTable transactions={transactionsState} />
              </BoxContainer>
            </div>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
