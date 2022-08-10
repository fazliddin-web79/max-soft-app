import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { Container, Left, Right, Title, Wrap } from "./style";
import loginImg from "../../Assets/img/sign-in.jpg";
import google from "../../Assets/img/google.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/overview");
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Container>
      <Left>
        <img src={loginImg} alt="" />
      </Left>
      <Right>
        <Wrap>
          <Title>Sign In</Title>
          <Right.Message>{message && message}</Right.Message>
          <Right.Wrap>
            <Right.Title>Email</Right.Title>
            <Right.Input
              type="text"
              value={loginEmail}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              placeholder="Email ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Password</Right.Title>
            <Right.Input
              type="password"
              value={loginPassword}
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              placeholder="Password ..."
            />
          </Right.Wrap>
          <Right.Btn onClick={login}>Sign In</Right.Btn>
          <Right.Link>
            If you not have an account. Just{" "}
            <Right.Span
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign Up
            </Right.Span>{" "}
            page
          </Right.Link>
          <Right.Btn onClick={signInWithGoogle}>
            <img src={google} alt="google logo" />
            Sign in with Google
          </Right.Btn>
        </Wrap>
      </Right>
    </Container>
  );
};

export default SignIn;
