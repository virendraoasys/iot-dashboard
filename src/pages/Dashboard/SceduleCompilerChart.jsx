import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Col, Row } from "reactstrap";

const ScheduleComplianceChart = () => {
      const [timeRange, setTimeRange] = useState('week');
  const [series] = useState([78, 22]);

  const options = {
    chart: {
      type: "donut",
      height: 300
    },
    labels: ["Compliant", "Non-Compliant"],
    colors: ["#00E396", "#FF4560"],
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
            total: {
              show: true,
              label: "Compliance Rate",
              color: "#373d3f",
              fontSize: "14px",
              formatter() {
                return "78%";
              }
            }
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
        <Col md={8} className="chart-card-left-sec">
          <h5 className="mb-1">Schedule Compliance</h5>
          <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
            Monitor pump activity and adherence to schedule
          </p>
        </Col>
        <Col md={4} className="text-end chart-card-right-sec">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn btn-sm ${timeRange === 'day' ? 'active' : ''}`}
              onClick={() => setTimeRange('day')}
            >
              Day
            </button>
            <button
              type="button"
              className={`btn btn-sm ${timeRange === 'week' ? 'active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button
              type="button"
              className={`btn btn-sm ${timeRange === 'month' ? 'active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
          </div>
        </Col>
      </Row>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {/* Chart Section */}
        <div style={{ flex: "1 1 300px" }}>
          <Chart options={options} series={series} type="donut" height={400} />
        </div>  
      </div>
      </>
  );
};

export default ScheduleComplianceChart;