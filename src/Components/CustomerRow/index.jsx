import React from "react";
import Avatar from "../Avatar";
import { Container, Left, Right } from "./style";

const CustomerRow = ({ data }) => {
  return (
    <Container>
      <Left>
        <Avatar img={data.img} width={"32px"} />
        <Left.Wrap>
          <Left.Name>{data.name}</Left.Name>
          <Left.Email>{data.email}</Left.Email>
        </Left.Wrap>
      </Left>
      <Right>
        <Right.Price>${data.price}</Right.Price>
      </Right>
    </Container>
  );
};

export default CustomerRow;
