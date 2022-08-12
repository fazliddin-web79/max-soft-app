import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";

const Icon = ({ Img, width, path }) => {
  const darkMode = useSelector((store) => store.user.darkMode);
  const onNavigate = () => {
    if (path) window.location.href = path;
  };
  return (
    <Container darkMode={darkMode} width={width} onClick={onNavigate}>
      <Img />
    </Container>
  );
};

export default Icon;
