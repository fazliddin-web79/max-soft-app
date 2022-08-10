import React from "react";
import Chart from "../../Components/Chart";
import CustomerTable from "../../Components/CustomerTable";
import TopProducts from "../../Components/TopProducts";
import { Container, UserWrap } from "./style";

const Home = () => {
  return (
    <Container>
      <Chart />
      <UserWrap>
        <CustomerTable />
        <TopProducts />
      </UserWrap>
    </Container>
  );
};

export default Home;
