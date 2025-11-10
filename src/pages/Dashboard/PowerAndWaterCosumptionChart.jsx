import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Col, Row } from "reactstrap";

const PowerAndConsumptionChart = () => {
  const [series] = useState([40, 60]);

  const options = {
    chart: {
      type: "donut",
      height: 300
    },
    labels: ["Scheduled Run Time", "Unscheduled Run Time"],
    colors: ["#10CF61", "#E4E4E4"],
    legend: {
      position: "bottom",
      horizontalAlign: "center"
    },
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val.toFixed(1)}%`;
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: "0%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              fontFamily: "Arial, sans-serif",
              color: "#373d3f",
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Arial, sans-serif",
              color: "#373d3f",
              offsetY: 10,
              formatter(val) {
                return `${val.toFixed(1)}%`;
              }
            },
            // total: {
            //   show: true,
            //   label: "Health Rate",
            //   color: "#373d3f",
            //   fontSize: "14px",
            //   formatter() {
            //     return "78%";
            //   }
            // }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return (
    <>
   <Row className="align-items-center mb-3 chart-card">
        <Col md={12} className="chart-card-left-sec">
          <h5 className="mb-1">Power & Water Consumption</h5>
        
        </Col>
       
      </Row>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {/* Chart Section */}
        <div style={{ flex: "1 1 300px" }}>
          <Chart options={options} series={series} type="donut" height={400} />
        </div>  
      </div>
      </>
  );
};

export default PowerAndConsumptionChart;