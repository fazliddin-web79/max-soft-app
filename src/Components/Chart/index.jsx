import React from "react";
import { Line } from "@ant-design/plots";
import { chartData } from "../../Mock/pie-chart";
import { Container } from "./style";

export const Chart = () => {
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
    <Container>
      <Line {...config} />
    </Container>
  );
};

export default Chart;
