import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Campaña", "Cantidad de personas que participaron", "Código de distrito", "Campaña", "Código de campaña"],
  ["Navidad", 5, 1.67, "Campaña 01", 100],
  ["Navidad", 3, 1.36, "Campaña 02", 200],
  ["L4", 8, 1.84, "Campaña 02", 200],
  ["Navidad", 4, 2.78, "Campaña 01", 100],
  ["L6", 10, 2, "Campaña 03", 300],
  ["Navidad", 7, 1.7, "Campaña 01", 100],
  ["L8", 8, 4.77, "Campaña 03", 300],
  ["L9", 11, 2.96, "Campaña 03", 300],
  ["L10", 1, 1.54, "Campaña 04", 400],
  ["L11", 6, 2.05, "Campaña 04", 400],
];

export const options = {
  title: "Campañas por distrito",
  hAxis: { title: "Campañas" },
  vAxis: { title: "Distritos" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
};

export function BChart() {
  return (
    <Chart
        chartType="BubbleChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
    />
  );
}