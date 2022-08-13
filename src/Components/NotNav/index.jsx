import React from "react";
import { notNavlink } from "../../Utils/not-navlink";
import Icon from "../Icon";
import Logo from "../Logo";
import { Container, Left, Right, Link } from "./style";
import { ReactComponent as login } from "../../Assets/icon/login.svg";
import { useNavigate } from "react-router-dom";

const NotNav = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Left>
        {" "}
        <Logo />
        <Left.Wrap>
          {notNavlink.map((item) => {
            return (
              <Link key={item.id} to={item.path}>
                {item.title}
              </Link>
            );
          })}
        </Left.Wrap>
      </Left>
      <Right>
        <Icon Img={login} />{" "}
        <span onClick={() => navigate("/sign-in")}>Login/Register</span>
      </Right>
    </Container>
  );
};

export default NotNav;
