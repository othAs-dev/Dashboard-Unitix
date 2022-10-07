import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const ChartUnitix = (props) => {
  let scale = {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  };
  if (!props.scale) {
    scale = {};
  }
  const config = {
    type: props.type,
    data: props.data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Demandes",
        },
      },
      responsive: true,
      scales: scale,
    },
  };

  switch (props.type) {
    case "bar":
      return (
        <Bar data={props.data} options={config.options} style={props.style} />
      );
    case "line":
      return (
        <Line data={props.data} options={config.options} style={props.style} />
      );
    case "pie":
      return (
        <Pie data={props.data} options={config.options} style={props.style} />
      );
    default:
      break;
  }
};

export default ChartUnitix;
