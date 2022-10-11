import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartUnitix from "../ChartUnitix";
import "./Graph.css";
const Graph = () => {
  const [select, setSelect] = useState();
  // structure des obj => un 1er tabl labels suivi d'un tab d'obj => label, data(tab), bgc, fill
  console.log(Chart);
  const dataDemandesJours = {
    labels: [
      "00h",
      "01h",
      "02h",
      "03h",
      "04h",
      "05h",
      "06h",
      "07h",
      "08h",
      "09h",
      "10h",
      "11h",
      "12h",
      "13h",
      "14h",
      "15h",
      "16h",
      "17h",
      "18h",
      "19h",
      "20h",
      "21h",
      "22h",
      "23h",
    ],
    datasets: [
      {
        label: "Demande en attente",
        data: [
          100, 87, 10, 20, 40, 10, 78, 23, 90, 21, 11, 34, 67, 23, 11, 34, 27,
          76, 87, 98, 121, 101, 23, 89,
        ],
        backgroundColor: "rgba(104, 113, 156, 0.8)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [
          19, 17, 40, 60, 80, 21, 78, 23, 60, 41, 71, 54, 47, 63, 71, 84, 67,
          36, 47, 48, 51, 71, 43, 59,
        ],
        backgroundColor: "rgba(26, 98, 142, 0.8)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [
          100, 87, 10, 20, 40, 19, 38, 63, 80, 41, 61, 74, 47, 93, 81, 44, 57,
          76, 97, 38, 141, 181, 23, 69,
        ],
        backgroundColor: "rgba(168, 128, 149, 0.8)",
        fill: true,
      },
    ],
  };
  const dataDemandesSemaines = {
    labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    datasets: [
      {
        label: "Demande en attente",
        data: [100, 87, 10, 20, 40, 10],
        backgroundColor: "rgba(133, 121, 121, 0.8)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [34, 52, 10, 42, 20, 5],
        backgroundColor: "rgba(26, 98, 142, 0.8)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [100, 87, 20, 53, 23, 14],
        backgroundColor: "rgba(220, 21, 71, 1)",
        fill: true,
      },
    ],
  };
  const dataDemandesMois = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "Demande en attente",
        data: [
          1, 2, 4, 0, 7, 6, 8, 3, 0, 1, 1, 4, 7, 3, 1, 4, 7, 6, 7, 8, 1, 1, 3,
          9, 2, 3, 0, 1, 6, 2, 1,
        ],
        backgroundColor: "rgba(128, 168, 173, 0.7)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [
          1, 2, 4, 0, 7, 6, 3, 3, 0, 1, 0, 4, 7, 3, 0, 4, 7, 0, 7, 1, 1, 2, 3,
          1, 2, 3, 0, 1, 0, 3, 8,
        ],
        backgroundColor: "rgba(178, 179, 141, 0.7)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [
          7, 3, 1, 0, 1, 2, 3, 7, 1, 2, 1, 3, 4, 3, 1, 4, 2, 5, 2, 1, 1, 3, 9,
          1, 2, 2, 3, 1, 6, 2, 1,
        ],
        backgroundColor: "rgba(163, 47, 41, 0.7)",
        fill: true,
      },
    ],
  };
  const dataDemandesAnnees = {
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Demande en attente",
        data: [100, 87, 90, 122, 98, 111, 60, 49, 88, 97, 117, 94],
        backgroundColor: "rgba(217, 184, 96, 0.8)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [114, 45, 67, 111, 68, 89, 91, 75, 43, 87, 39, 76],
        backgroundColor: "rgba(26, 98, 142, 0.8)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [75, 23, 129, 91, 68, 89, 41, 50, 39, 97, 29, 65],
        backgroundColor: "rgba(220, 21, 71, 1)",
        fill: true,
      },
    ],
  };
  const dataDemandesOutils = {
    labels: ["Salesforce", "Excel", "Trax", "Bubble", "SEO", "Base de donnée"],
    datasets: [
      {
        label: "Demande en attente",
        data: [10, 8, 9, 2, 1, 11, 24],
        backgroundColor: "rgba(217, 184, 96, 0.8)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [4, 8, 1, 3, 5, 5, 14],
        backgroundColor: "rgba(26, 98, 142, 0.8)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [9, 11, 6, 1, 13, 10, 21],
        backgroundColor: "rgba(220, 21, 71, 1)",
        fill: true,
      },
    ],
  };
  const dataDemandesConsultantsParOutils = {
    labels: [
      "Consultant Salesforce",
      "Consultant Excel",
      "Consultant Trax",
      "Consultant Bubble",
      "Consultant SEO",
      "Consultant Base de donnée",
    ],
    datasets: [
      {
        label: "Demande en attente",
        data: [11, 2, 3, 4, 9, 10, 8],
        backgroundColor: "rgba(217, 184, 96, 0.8)",
        fill: true,
      },
      {
        label: "Demande en cours de traitement",
        data: [3, 4, 1, 0, 0, 15, 11],
        backgroundColor: "rgba(26, 98, 142, 0.8)",
        fill: true,
      },
      {
        label: "Demande terminée",
        data: [8, 1, 8, 1, 13, 10, 21],
        backgroundColor: "rgba(220, 21, 71, 1)",
        fill: true,
      },
    ],
  };
  switch (select) {
    case "days":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix data={dataDemandesJours} type="bar" scale={true} />
              {/*importation des obj*/}
              <h3>Linear diagram</h3>
              <ChartUnitix data={dataDemandesJours} type="line" scale={true} />
            </div>
          </div>
        </div>
      );
    case "weekly":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix
                data={dataDemandesSemaines}
                type="bar"
                scale={true}
              />
              <h3>Linear diagram</h3>
              <ChartUnitix
                data={dataDemandesSemaines}
                type="line"
                scale={true}
              />
            </div>
          </div>
        </div>
      );
    case "monthly":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix data={dataDemandesMois} type="bar" scale={true} />
              <h3>Linear diagram</h3>
              <ChartUnitix data={dataDemandesMois} type="line" scale={true} />
            </div>
          </div>
        </div>
      );
    case "yearly":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix data={dataDemandesAnnees} type="bar" scale={true} />
              <h3>Linear diagram</h3>
              <ChartUnitix data={dataDemandesAnnees} type="line" scale={true} />
            </div>
          </div>
        </div>
      );
    case "tools":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix data={dataDemandesOutils} type="bar" scale={true} />
              <h3>Linear diagram</h3>
              <ChartUnitix data={dataDemandesOutils} type="line" scale={true} />
            </div>
          </div>
        </div>
      );
    case "tools by consulting":
      return (
        <div className="cont">
          <div className="mt-3">
            <label htmlFor="select"></label>
            <select
              name="select"
              id="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="init">Choose a diagram</option>
              <option value="days">Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="tools">Tools</option>
              <option value="tools by consulting">Tools by consulting</option>
            </select>
          </div>
          <div className="w flex justify-content-between mt-5 mb-3">
            <div className={select ? "uniqView" : "box"}>
              <h2>Request number in {select}</h2>
              <ChartUnitix
                data={dataDemandesConsultantsParOutils}
                type="bar"
                scale={true}
              />
              <h3>Linear diagram</h3>
              <ChartUnitix
                data={dataDemandesConsultantsParOutils}
                type="line"
                scale={true}
              />
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
  return (
    <div className="cont">
      <div className="mt-3">
        <label htmlFor="select"></label>
        <select
          name="select"
          id="select"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="init">Choose a diagram</option>
          <option value="days">Days</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="tools">Tools</option>
          <option value="tools by consulting">Tools by consulting</option>
        </select>
      </div>
      <div className="w flex justify-content-between mt-5 mb-3">
        <div className="box">
          <h2>Request number in days</h2>
          <ChartUnitix data={dataDemandesJours} type="bar" scale={true} />
        </div>
        <div className="box">
          <h2>Request number in weekly</h2>
          <ChartUnitix data={dataDemandesSemaines} type="bar" scale={true} />
        </div>
        <div className="mt-5 box">
          <h2>Request number in monthly</h2>
          <ChartUnitix data={dataDemandesMois} type="bar" scale={true} />
        </div>
        <div className="mt-5 box">
          <h2>Request number in yearly</h2>
          <ChartUnitix data={dataDemandesAnnees} type="bar" scale={true} />
        </div>
        <div className="mt-5 box">
          <h2>Request number in tools</h2>
          <ChartUnitix data={dataDemandesOutils} type="bar" scale={true} />
        </div>
        <div className="mt-5 box">
          <h2>Request number in tools by consulting</h2>
          <ChartUnitix
            data={dataDemandesConsultantsParOutils}
            type="bar"
            scale={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
