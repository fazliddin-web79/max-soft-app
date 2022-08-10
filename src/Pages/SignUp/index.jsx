import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { Container, Left, Right, Title, Wrap } from "./style";
import loginImg from "../../Assets/img/sign-in.jpg";
import google from "../../Assets/img/google.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConf, setRegisterPasswordConf] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const signUp = () => {
    if (
      (registerPasswordConf === registerPassword) !== "" &&
      registerEmail !== ""
    ) {
      register();
    }
    if (
      registerPasswordConf === "" ||
      registerPassword === "" ||
      registerEmail === ""
    ) {
      setMessage("Please, Check your info!!!");
    }
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setMessage("");
      navigate("/overview");
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
          <Title>Sign Up</Title>
          <Right.Message>{message && message}</Right.Message>
          <Right.Wrap>
            <Right.Title>Email</Right.Title>
            <Right.Input
              type="text"
              value={registerEmail}
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              placeholder="Email ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Password</Right.Title>
            <Right.Input
              type="password"
              value={registerPassword}
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              placeholder="Password ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Password Confirm</Right.Title>
            <Right.Input
              type="password"
              value={registerPasswordConf}
              onChange={(event) => {
                setRegisterPasswordConf(event.target.value);
              }}
              placeholder="Password ..."
            />
          </Right.Wrap>
          <Right.Btn onClick={signUp}>Sign Up</Right.Btn>
          <Right.Link>
            If you already have an account. Just{" "}
            <Right.Span
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Log In
            </Right.Span>{" "}
            page
          </Right.Link>

          <Right.Btn onClick={signInWithGoogle}>
            <img src={google} alt="google logo" />
            Sign Up with Google
          </Right.Btn>
        </Wrap>
      </Right>
    </Container>
  );
};

export default SignUp;
