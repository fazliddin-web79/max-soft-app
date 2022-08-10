import React from "react";
import Icon from "../../Components/Icon";
import Logo from "../../Components/Logo";
import SearchInput from "../../Components/SearchInput";
import { Container } from "./style";
import { ReactComponent as bell } from "../../Assets/icon/bell.svg";
import avatar from "../../Assets/img/Avatar.png";
import Avatar from "../../Components/Avatar";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <Container.Left>
          <Logo />
          <SearchInput />
        </Container.Left>
        <Container.Right>
          <Icon Img={bell} width={"32px"} />
          <Avatar img={avatar} width={"32px"} />
        </Container.Right>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
