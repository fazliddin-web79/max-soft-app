import React from "react";
import { Container } from "./style";

const Icon = ({ Img, width }) => {
  return (
    <Container width={width}>
      <Img />
    </Container>
  );
};

export default Icon;
