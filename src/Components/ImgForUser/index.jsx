import React from "react";
import { Container } from "./style";

const ImgForUser = ({ img }) => {
  return (
    <Container>
      <img src={img} alt="user avatar" />
    </Container>
  );
};

export default ImgForUser;
