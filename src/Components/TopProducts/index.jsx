import React from "react";
import { productsData } from "../../Mock/topProducts";
import ProductRow from "../ProductRow";
import { Container } from "./style";

const TopProducts = () => {
  return (
    <Container>
      <Container.Title>Top products</Container.Title>
      <Container.Wrap>
        {productsData.map((item) => {
          return <ProductRow key={item.id} data={item} />;
        })}
      </Container.Wrap>
    </Container>
  );
};

export default TopProducts;
