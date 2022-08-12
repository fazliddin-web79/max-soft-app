import React from "react";
import Input from "../../Components/Input";
import { Container, Wrap } from "./style";

const UserPage = () => {
  return (
    <Container>
      <Wrap>
        <Input placeholder={"text"} />
      </Wrap>
    </Container>
  );
};

export default UserPage;
