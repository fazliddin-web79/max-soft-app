import React from "react";
import Sidebar from "../Sidebar";
import { Wrapper } from "./style";
import { Container } from "./style";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
