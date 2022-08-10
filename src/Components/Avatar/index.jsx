import React from "react";
import { Container } from "./style";

const Avatar = ({ img, width }) => {
  return (
    <Container width={width}>
      <img src={img} alt="Avatar" />
    </Container>
  );
};

export default Avatar;
