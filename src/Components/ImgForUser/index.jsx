import React from "react";
import { Container } from "./style";

const ImgForUser = ({ img, onClick }) => {
  return (
    <Container onClick={() => onClick(img)}>
      <img src={img} alt="user avatar" />
    </Container>
  );
};

export default ImgForUser;
