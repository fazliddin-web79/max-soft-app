import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import { transactionsData } from "../../Mock/transactions";
import TransactionsRow from "../TransactionsRow";

const Transactions = () => {
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <Container darkMode={darkMode}>
      <Container.Title darkMode={darkMode}>Transactions</Container.Title>
      <Container.Info>This is a list of latest transactions.</Container.Info>
      <Container.Wrap>
        <Container.Header>
          <div>TRANSACTION</div>
          <div>DATE & TIME</div>
          <div>AMOUNT</div>
          <div>STATUS</div>
        </Container.Header>
        {transactionsData.map((item) => {
          return <TransactionsRow key={item.id} data={item} />;
        })}
      </Container.Wrap>
    </Container>
  );
};

export default Transactions;
