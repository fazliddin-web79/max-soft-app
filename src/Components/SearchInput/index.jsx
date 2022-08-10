import React from "react";
import { Container } from "./style";
import search from "../../Assets/icon/search.svg";

const SearchInput = () => {
  return (
    <Container>
      <img src={search} alt="" />
      <input type="text" placeholder="Search" />
    </Container>
  );
};

export default SearchInput;
