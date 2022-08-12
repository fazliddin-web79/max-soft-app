import React from "react";
import { Container } from "./style";

const SaveBtn = ({ title, onClick }) => {
  return <Container onClick={onClick}>{title}</Container>;
};

export default SaveBtn;
