import React, { useEffect, useState, memo } from "react";
import Icon from "../Icon";
import { Container, Options, Wrap } from "./style";
import up from "../../Assets/icon/up.svg";
import down from "../../Assets/icon/down.svg";
import { NavLink as Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navlink = ({ data }) => {
  const [option, setOption] = useState(true);
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes(data.path)) {
      setActive("active");
    } else {
      setActive("");
    }
  }, [location, data.path]);
  return (
    <Wrap data={active}>
      <Container data={option.toString()}>
        <Link to={data.path}>
          <Container.Left>
            <Icon Img={data.img} />
            <Container.Title>{data.title}</Container.Title>
          </Container.Left>
        </Link>
        {data?.options && (
          <Container.Btn onClick={() => setOption(!option)}>
            <img src={option ? down : up} alt="down" />
          </Container.Btn>
        )}
      </Container>
      {data?.options && !option && (
        <Wrap.Option>
          {data.options.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                <Options>{item.title}</Options>
              </Link>
            );
          })}
        </Wrap.Option>
      )}
    </Wrap>
  );
};

export default memo(Navlink);
