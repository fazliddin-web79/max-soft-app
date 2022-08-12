import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "./style";

const Generic = () => {
  const location = useLocation();
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <Container darkMode={darkMode}>
      Ooops, sorry! <span>{location.pathname}</span> This page is coming soon
    </Container>
  );
};

export default Generic;
