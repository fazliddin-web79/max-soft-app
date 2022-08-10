import React from "react";
import { Container, Left, Right } from "./style";

const ProductRow = ({ data }) => {
  return (
    <Container>
      <Left>
        <Left.Title>{data.title}</Left.Title>
        <Left.Texnology>{data.texnology}</Left.Texnology>
      </Left>
      <Right>
        <Right.Price>
          {data.saled}
          <span>sales</span>
        </Right.Price>
      </Right>
    </Container>
  );
};

export default ProductRow;
