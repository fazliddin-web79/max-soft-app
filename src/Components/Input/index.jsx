import React from "react";
import { Container } from "./style";

const Input = ({ type, placeholder, onChange, disebled }) => {
  return (
    <Container>
      <input
        onChange={(e) => onChange(e.target.value)}
        type={type ? type : "text"}
        placeholder={placeholder}
        disabled={disebled}
      />
    </Container>
  );
};

export default Input;
