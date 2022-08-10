import React from "react";
import { customerData } from "../../Mock/customer";
import CustomerRow from "../CustomerRow";
import { Container } from "./style";

const CustomerTable = () => {
  return (
    <Container>
      <Container.Title>Latest Customers</Container.Title>
      <Container.Wrap>
        {customerData.map((item) => {
          return <CustomerRow data={item} key={item.id} />;
        })}
      </Container.Wrap>
    </Container>
  );
};

export default CustomerTable;
