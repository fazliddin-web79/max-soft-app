import React from "react";
import { Container } from "./style";
import not404 from "../../Assets/img/404.png";
import { useNavigate } from "react-router-dom";

const NotClient = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={not404} alt="" />
      <Container.Title>Page not found</Container.Title>
      <Container.Info>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </Container.Info>
      <Container.Btn
        onClick={() => {
          navigate("/overview");
        }}
      >
        Go back home
      </Container.Btn>
    </Container>
  );
};

export default NotClient;
