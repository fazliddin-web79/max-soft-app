import React from "react";
import { customerData } from "../../Mock/customer";
import CustomerRow from "../CustomerRow";
import { Container } from "./style";
import { useSelector } from "react-redux";

const CustomerTable = () => {
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <Container darkMode={darkMode}>
      <Container.Title darkMode={darkMode}>Latest Customers</Container.Title>
      <Container.Wrap>
        {customerData.map((item) => {
          return <CustomerRow data={item} key={item.id} />;
        })}
      </Container.Wrap>
    </Container>
  );
};

export default CustomerTable;
