// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ColumnChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Popular",
        decimals: 0,
        theme: "candy",
        xAxisName: "Repos",
        yAxisName: "Stars",
        xAxisNameFontSize: "1.5rem",
        yAxisNameFontSize: "1.5rem",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ColumnChart;
