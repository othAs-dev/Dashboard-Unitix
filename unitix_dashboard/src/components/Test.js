/*import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default function Test(props) {
  console.log(props.data);
  let scales = {};
  if (!props.scale) {
    scales = {};
  } else {
    scales = {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    };
  }

  const config = {
    type: props.type,
    data: props.data,
    options: {
      plugins: {
        title: {
          display: true,
          text: props.title,
        },
      },
      responsive: true,
      scales: scales,
    },
  };

  switch (props.type) {
    case "bar":
      return (
        <Bar
          data={props.data}
          options={config.options}
          style={{
            marginBottom: "20px",
            boxShadow: "3px 3px 3px grey",
            borderRadius: "10px",
            padding: "20px",
            border: "1px solid black",
          }}
        />
      );
      break;
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
}*/
