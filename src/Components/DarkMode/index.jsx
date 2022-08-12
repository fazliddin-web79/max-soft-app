import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import React from "react";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../Redux/user";

const DarkMode = () => {
  const dispatch = useDispatch();
  const onChangeSwitch = () => {
    dispatch(setDarkMode());
  };
  return (
    <Container>
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        onChange={onChangeSwitch}
      />
    </Container>
  );
};

export default DarkMode;
