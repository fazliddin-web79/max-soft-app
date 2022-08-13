import React from "react";
import { productsData } from "../../Mock/topProducts";
import ProductRow from "../ProductRow";
import { Container } from "./style";
import { useSelector } from "react-redux";

const TopProducts = () => {
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <Container darkMode={darkMode}>
      <Container.Title darkMode={darkMode}>Top products</Container.Title>
      <Container.Wrap>
        {productsData.map((item) => {
          return <ProductRow key={item.id} data={item} />;
        })}
      </Container.Wrap>
    </Container>
  );
};

export default TopProducts;
