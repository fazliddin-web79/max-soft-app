import React, { useEffect } from "react";
import Icon from "../../Components/Icon";
import Navlink from "../../Components/Navlink";
import { sidebarLink } from "../../Utils/sidebar";
import { sidebarLinkDown } from "../../Utils/sidebar-down";
import { Container } from "./style";
import { ReactComponent as adjust } from "../../Assets/icon/sidebar-footer1.svg";
import { ReactComponent as globe } from "../../Assets/icon/sidebar-footer2.svg";
import { ReactComponent as setting } from "../../Assets/icon/sidebar-footer3.svg";
import { useSelector } from "react-redux/";

const Sidebar = () => {
  const open = useSelector((store) => store.sidebar.sidebarOpen);
  const darkMode = useSelector((store) => store.user.darkMode);
  const responsive = useSelector((store) => store.sidebar.sidebarResponsive);

  useEffect(() => {
    if (responsive) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [responsive]);
  return (
    <Container responsive={responsive} open={open} darkMode={darkMode}>
      <Container.Wrap>
        {sidebarLink.map((item) => {
          return <Navlink key={item.id} data={item} />;
        })}
        <hr />
        {sidebarLinkDown.map((item) => {
          return <Navlink key={item.id} data={item} />;
        })}
      </Container.Wrap>
      <Container.Footer open={open}>
        <Icon Img={adjust} width={"28px"} />
        <Icon Img={globe} width={"28px"} />
        <Icon Img={setting} width={"28px"} />
      </Container.Footer>
    </Container>
  );
};

export default Sidebar;
