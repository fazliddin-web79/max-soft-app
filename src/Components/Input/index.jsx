import React from "react";
import { Container } from "./style";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <Container>
      <input
        onChange={(e) => onChange(e.target.value)}
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
