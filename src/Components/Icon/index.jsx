import React from "react";
import { Container } from "./style";

const Icon = ({ Img, width, path }) => {
  const onNavigate = () => {
    if (path) window.location.href = path;
  };
  return (
    <Container width={width} onClick={onNavigate}>
      <Img />
    </Container>
  );
};

export default Icon;
