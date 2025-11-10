import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Row, Col } from "reactstrap";

const SceduleCompilerBarAndLineChart = () => {
  const [timeRange, setTimeRange] = useState("month");

  // --- Define data for each time range ---
  const chartData = {
    day: {
      labels: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00"],
      runtime: [0.1, 0.25, 0.4, 0.35, 0.2, 0.1],
      cycles: [5, 9, 13, 10, 7, 4],
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      runtime: [0.3, 0.45, 0.5, 0.55, 0.6, 0.3, 0.2],
      cycles: [10, 13, 16, 15, 17, 9, 5],
    },
    month: {
      labels: [
        "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00",
        "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
        "22:00", "23:00"
      ],
      runtime: [
        0, 0, 0, 0, 0, 0.05, 0.14, 0.33, 0.43, 0.47, 0.51, 0.54,
        0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      cycles: [
        0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.6, 0.65, 0.7,
        0.7, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
    },
  };

  const currentData = chartData[timeRange];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
      formatter: (val) => (val > 0 ? `${val.toFixed(2)}h` : "0h"),
      style: {
        colors: ["#3d3838ff"],
        fontSize: "11px",
        fontWeight: "bold",
      },
    },
    labels: currentData.labels,
    xaxis: {
       title: { text: "Time", style: { color: "#1E88E5", fontWeight: 600 } },
        labels: {
            style: {
            colors: "#64c6f5",   // ← your desired color (string or array)
            fontSize: "12px",
            fontWeight: 500,
            },
        },
    },
    yaxis: [
      {
        title: { text: "Runtime (Hours)" },
        min: 0,
        max: 1,
        tickAmount: 5,
      },
      {
        opposite: true,
        title: { text: "Cycles" },
        min: 0,
        max: 25,
        tickAmount: 5,
      },
    ],
    colors: ["#A5D8FF", "#00C49F"],
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    grid: {
      borderColor: "#eee",
      strokeDashArray: 3,
    },
  };

  const series = [
    { name: "Runtime (Hours)", type: "column", data: currentData.runtime },
    { name: "Cycles", type: "line", data: currentData.cycles },
  ];

  return (
    <div className="chart-card" style={{ background: "#fff", borderRadius: "10px" }}>
      <Row className="align-items-center mb-3">
        <Col md={8}>
          <h5>Schedule Compliance</h5>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            Monitor pump activity and adherence to schedule
          </p>
        </Col>
        <Col md={4} className="text-end chart-card-right-sec">
          <div className="btn-group" role="group">
            {["day", "week", "month"].map((range) => (
              <button
                key={range}
                type="button"
                 className={`btn btn-sm ${timeRange === range ? "active" : ""}`}
                onClick={() => setTimeRange(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </Col>
      </Row>
      <hr />

      <Chart options={options} series={series} height={350} />
    </div>
  );
};

export default SceduleCompilerBarAndLineChart;
