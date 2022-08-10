import React from "react";
import NotClient from "../../Components/NotClient";
import NotNav from "../../Components/NotNav";
import { Container } from "./style";

const NotFound = () => {
  return (
    <Container>
      <NotNav />
      <NotClient />
    </Container>
  );
};

export default NotFound;
