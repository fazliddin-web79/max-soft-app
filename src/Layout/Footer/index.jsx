import React from "react";
import { useLocation } from "react-router-dom";
import Icon from "../../Components/Icon";
import { Container } from "./style";
import { ReactComponent as facebook } from "../../Assets/icon/Nav Link1.svg";
import { ReactComponent as twitter } from "../../Assets/icon/Nav Link2.svg";
import { ReactComponent as git } from "../../Assets/icon/Nav Link3.svg";
import { ReactComponent as dribbl } from "../../Assets/icon/Nav Link4.svg";

const Footer = () => {
  const location = useLocation();
  return (
    <Container
      style={{
        display: location.pathname.includes("/messages") ? "none" : "flex",
      }}
    >
      <Container.Left>
        © 2021 Themesberg, LLC. All rights reserved.
      </Container.Left>
      <Container.Right>
        <Icon
          Img={facebook}
          path={"https://www.facebook.com/FazliddinYakubjonoff"}
        />
        <Icon
          Img={twitter}
          path={"https://www.linkedin.com/in/fazliddin-yakubjonoff/"}
        />
        <Icon Img={git} path={"https://github.com/fazliddin-web79"} />
        <Icon Img={dribbl} path={"https://github.com/fazliddin-web79"} />
      </Container.Right>
    </Container>
  );
};

export default Footer;
