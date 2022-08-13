import React from "react";
import { Container } from "./style";
import avatar from "../../Assets/img/avatar.jpg";

const ImgForUser = ({ img, onClick }) => {
  return (
    <Container onClick={() => onClick(img)}>
      <img src={img ? img : avatar} alt="user avatar" />
    </Container>
  );
};

export default ImgForUser;
