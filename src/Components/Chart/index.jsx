import React from "react";
import { Line } from "@ant-design/plots";
import { chartData } from "../../Mock/pie-chart";
import { Container } from "./style";
import { useSelector } from "react-redux";

export const Chart = () => {
  const darkMode = useSelector((store) => store.user.darkMode);
  const config = {
    data: chartData,
    xField: "day",
    yField: "value",
    seriesField: "category",
    smooth: true,
    xAxis: {
      type: "time",
    },
    color: "#0E9F6E",

    autoFit: false,
    yAxis: {},
  };

  return (
    <Container darkMode={darkMode}>
      <Line {...config} />
    </Container>
  );
};

export default Chart;
