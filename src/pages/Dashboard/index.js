import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import api from "../../services/api";

import { Container, Grid, Title, BoxContainer, Column, Row } from "./styles";

import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";
import TransactionsTable from "../../components/TransactionsTable";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  useEffect(() => {
    getResponse();
    // console.log()
  }, []);

  const getResponse = async () => {
    // alert("get response");
    // try{
    //   await api
    //   .post("/dashboard", { ano: 2020 })
    //   .then((response) => {
    //     // console.log(response.data);
    //     setMovimentos(response.data.movimentos);
    //     setTotalAnual(response.data.totalAnual);
    //     setTotalMonthly(response.data.totalMensal);

    //     setLoading(false);
    //     // setTotalMonthly(response.data.totalMensal);
    //   })
    // }
    // catch (err) {
    //   console.log(err.response);
    //   console.log(err);
    //   setError({
    //     show: true,
    //     status: err.response.status,
    //     title: 'Something went wrong!',
    //     message: err.message
    //   })
    //   setLoading(false);
    // }
    setLoading(false);
  };

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  return (
    <Container>
      {error.show ? (
        <ErrorScreen status={error.status} title={error.title} message={error.message} />
      ) : (
        <>
          <Loading isLoading={loading} />
            <Grid>
              <div style={{gridArea: "1 / 1 / 2 / 2"}}>
                <BoxContainer>
                  <Title>Mensal</Title>
                </BoxContainer>
              </div>
              <div style={{gridArea: "1 / 2 / 2 / 3"}}>
                <BoxContainer>
                  <Title>Anual</Title>
                </BoxContainer>
              </div>
              <div style={{gridArea: "2 / 1 / 3 / 3"}}>
                <BoxContainer>
                  <Title>Ultimas movimentações</Title>
                  <TransactionsTable transactions={[]}/>
                </BoxContainer>
              </div>
            </Grid>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
