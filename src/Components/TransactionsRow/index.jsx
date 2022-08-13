import React from "react";
import { Container } from "./style";

const TransactionsRow = ({ data }) => {
  return (
    <Container index={data.id}>
      <Container.Name>{data.name}</Container.Name>
      <Container.Date>{data.date}</Container.Date>
      <Container.Amount>{data.amount}</Container.Amount>
      <Container.Status status={data.status}>
        <h1>{data.statusName}</h1>
      </Container.Status>
    </Container>
  );
};

export default TransactionsRow;
