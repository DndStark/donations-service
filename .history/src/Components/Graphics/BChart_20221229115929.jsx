import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Campaña", "Cantidad de personas que participaron", "Código de distrito", "Nombre de Campaña", "Código de campaña"],
  ["Navidad", 5, 1, "Campaña 01", 100],
  ["Damnificado", 3, 1, "Campaña 02", 200],
  ["Damnificado", 8, 2, "Campaña 02", 200],
  ["Navidad", 4, 2, "Campaña 01", 100],
  ["Damnificado incendio", 10, 2, "Campaña 03", 300],
  ["Navidad", 7, 3, "Campaña 01", 100],
  ["Damnificado incendio", 8, 1, "Campaña 03", 300],
  ["Damnificado incendio", 11, 3, "Campaña 03", 300],
  ["L10", 1, 2, "Campaña 04", 400],
  ["L11", 6, 1, "Campaña 04", 400],
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