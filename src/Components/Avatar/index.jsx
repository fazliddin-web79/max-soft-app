import React from "react";
import { Container } from "./style";
import avatar from "../../Assets/img/avatar.jpg";

const Avatar = ({ img, width }) => {
  return (
    <Container width={width}>
      <img src={img ? img : avatar} alt="Avatar" />
    </Container>
  );
};

export default Avatar;
