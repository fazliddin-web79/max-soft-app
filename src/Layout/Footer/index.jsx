import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";

const Footer = () => {
  const location = useLocation();
  return (
    <Container
      style={{
        display: location.pathname.includes("/messages") ? "none" : "block",
      }}
    >
      © 2021 Themesberg, LLC. All rights reserved.
    </Container>
  );
};

export default Footer;
