import React, { useState, useEffect } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

import { Container, Inline, Title, BoxContainer, DataContainer, DataTitle, DataDescription, DataValueTitle, DataValue } from "./styles";

import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";
import TransactionsTable from "../../components/TransactionsTable";
import { useData } from "../../contexts/data";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle
);

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  const { transactions } = useData();

  useEffect(() => {
  }, []);

  function getCurrentMonthTransactions() {
    return transactions.filter(t => new Date(t.date).getMonth() === new Date().getMonth())
  }

  function getMonthTransactionsSum(month, tipo) {
    const transacoesMes = transactions.filter(t => new Date(t.date).getMonth() === month)

    const transacoesMesTipo = transacoesMes.filter(i => i.type === tipo);

    return transacoesMesTipo.reduce((partialSum, a) => partialSum + a.value, 0);
  }

  function getValorPorTipo(tipo) {
    const receitasMes = getCurrentMonthTransactions().filter(i => i.type === tipo);

    return receitasMes.reduce((partialSum, a) => partialSum + a.value, 0);
  }

  function formatarDinheiro(valor) {
    return "R$ " + parseFloat(valor).toFixed(2).toString().replace(/\./g, ",");
  }

  function getCurrentMonthLabel() {
    return months[new Date().getMonth()]
  }

  function getAnualPorMesETipo(tipo) {
    let values = [];

    for (let i = 0; i < 12; i++) {
      values[i] = getMonthTransactionsSum(i, tipo) || null;
    }

    return values;
  }

  const data = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        data: [
          (getValorPorTipo("RECEITA") / (getValorPorTipo("RECEITA") + getValorPorTipo("DESPESA"))) * 100,
          (getValorPorTipo("DESPESA") / (getValorPorTipo("RECEITA") + getValorPorTipo("DESPESA"))) * 100
        ],
        backgroundColor: [
          '#467e53',
          '#a50000',
        ],
        borderColor: [
          '#467e53',
          '#a50000',
        ],
        borderWidth: 1,
      },
    ],
  };

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
          <Inline>
            <BoxContainer style={{flex: 1}}>
              <Title>Mensal</Title>

              <DataContainer>
                <div style={{ maxHeight: "280px" }}>
                  <Pie data={data} />
                </div>
              </DataContainer>
              <DataContainer>
                <DataTitle>
                  {getCurrentMonthLabel() + "/" + new Date().getFullYear()}
                </DataTitle>
                <div>
                  <DataDescription>
                    <DataValueTitle>Receita:</DataValueTitle><DataValue color="#467e53">{formatarDinheiro(getValorPorTipo("RECEITA"))}</DataValue>
                  </DataDescription>
                  <DataDescription>
                    <DataValueTitle>Despesa:</DataValueTitle><DataValue color="#a50000">{formatarDinheiro(getValorPorTipo("DESPESA"))}</DataValue>
                  </DataDescription>
                  <DataDescription>
                    <DataValueTitle>Saldo:</DataValueTitle><DataValue>{formatarDinheiro(getValorPorTipo("RECEITA") - getValorPorTipo("DESPESA"))}</DataValue>
                  </DataDescription>
                </div>
              </DataContainer>
            </BoxContainer>
            <BoxContainer style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
              <Title>Anual</Title>
              <DataContainer>
                <Line
                  style={{
                    width: 500
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      }
                    },
                  }}
                  data={{
                    labels: months,
                    datasets: [
                      {
                        label: 'Receita',
                        data: getAnualPorMesETipo("RECEITA"),
                        borderColor: '#467e53',
                      },
                      {
                        label: 'Despesa',
                        data: getAnualPorMesETipo("DESPESA"),
                        borderColor: '#a50000',

                      },
                    ],
                  }}
                />
              </DataContainer>
            </BoxContainer>
          </Inline>
          <BoxContainer>
            <Title>Ultimas movimentações</Title>
            <TransactionsTable transactions={transactions} />
          </BoxContainer>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
