import React from "react";
import Sidebar from "../Sidebar";
import { Wrapper } from "./style";
import { Container } from "./style";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const open = useSelector((store) => store.sidebar.sidebarOpen);
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <Container>
      <Sidebar />
      <Wrapper open={open} darkMode={darkMode}>
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
