import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["ASDFASDF", "Life Expectancy", "Fertility Rate", "Region", "Population"],
  ["L2", 80.66, 1.67, "Campaña 01", 33739900],
  ["L3", 79.84, 1.36, "Campaña 02", 81902307],
  ["L4", 78.6, 1.84, "Campaña 02", 5523095],
  ["L5", 72.73, 2.78, "Campaña 01", 79716203],
  ["L6", 80.05, 2, "Campaña 03", 61801570],
  ["L7", 72.49, 1.7, "Campaña 01", 73137148],
  ["L8", 68.09, 4.77, "Campaña 03", 31090763],
  ["L9", 81.55, 2.96, "Campaña 03", 7485600],
  ["L10", 68.6, 1.54, "Campaña 04", 141850000],
  ["L11", 78.09, 2.05, "Campaña 04", 307007000],
];

export const options = {
  title: "Campañas por distrito",
  hAxis: { title: "Categorías" },
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