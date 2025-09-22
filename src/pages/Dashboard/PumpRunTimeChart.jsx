import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'reactstrap';

const PumpRuntimeChart = () => {
  const [timeRange, setTimeRange] = useState('week');
  const chartData = {
    week: {
      series: [
        {
          name: 'Runtime (Hours)',
          type: 'column',
          data: [4, 6, 8, 5, 7, 9, 6],
        },
        {
          name: 'Cycles',
          type: 'line',
          data: [12, 18, 15, 20, 16, 22, 19],
        },
      ],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    day: {
      series: [
        {
          name: 'Runtime (Hours)',
          type: 'column',
          data: [
            1, 2, 1.5, 2.5, 1, 3, 2, 1.5, 2, 1, 0.5, 1, 2, 1.5, 2, 3, 2.5, 2, 1.5, 1, 0.5, 1, 1.5,
            2,
          ],
        },
        {
          name: 'Cycles',
          type: 'line',
          data: [3, 6, 4, 8, 3, 10, 6, 4, 7, 3, 2, 4, 6, 5, 7, 9, 8, 7, 5, 3, 2, 4, 5, 6],
        },
      ],
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    },
    month: {
      series: [
        {
          name: 'Runtime (Hours)',
          type: 'column',
          data: [
            5, 6, 7, 6, 8, 7, 6, 5, 7, 6, 8, 7, 6, 5, 7, 6, 8, 7, 6, 5, 7, 6, 8, 7, 6, 5, 7, 6, 8,
            7,
          ],
        },
        {
          name: 'Cycles',
          type: 'line',
          data: [
            15, 18, 20, 17, 22, 19, 16, 15, 20, 18, 23, 20, 17, 16, 21, 19, 24, 21, 18, 17, 22, 20,
            25, 22, 19, 18, 23, 21, 26, 23,
          ],
        },
      ],
      categories: Array.from({ length: 30 }, (_, i) => i + 1),
    },
  };

  const currentData = chartData[timeRange];

  const chartOptions = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '60%',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0], // Only show data labels for columns
      formatter(val) {
        return `${val}h`;
      },
      offsetY: -20,
      style: {
        fontSize: '11px',
        colors: ['#304758'],
      },
    },
    stroke: {
      width: [0, 3], // No border for columns, 3px for line
    },
    series: currentData.series,
    colors: ['#176BA0', '#FF6B6B'],
    xaxis: {
      categories: currentData.categories,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '11px',
          colors: '#666',
        },
      },
      title: {
        text: timeRange === 'day' ? 'Time' : timeRange === 'week' ? 'Days (Weekly)' : 'Days',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    yaxis: [
      {
        seriesName: 'Runtime (Hours)',
        min: 0,
        max: timeRange === 'day' ? 4 : timeRange === 'week' ? 10 : 10,
        tickAmount: 5,
        title: {
          text: 'Runtime (Hours)',
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#176BA0',
          },
        },
        labels: {
          formatter(val) {
            return `${val}h`;
          },
          style: {
            colors: '#176BA0',
          },
        },
      },
      {
        seriesName: 'Cycles',
        opposite: true,
        min: 0,
        max: timeRange === 'day' ? 12 : timeRange === 'week' ? 25 : 30,
        tickAmount: 5,
      },
    ],
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 3,
      padding: {
        top: 20,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
    // tooltip: {
    //   y: [
    //     {
    //       formatter(val) {
    //         return `${val} hours`;
    //       }
    //     },
    //     {
    //       formatter(val) {
    //         return `${val} cycles`;
    //       }
    //     }
    //   ]
    // },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      markers: {
        radius: 12,
      },
    },
  };

  return (
    <div className="pump-runtime-chart">
      <Row className="align-items-center mb-3 chart-card">
        <Col md={8} className="chart-card-left-sec">
          <h5 className="mb-1">Pump Runtime and Cycles</h5>
          <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
            Monitor daily pump activity and cycling efficiency
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

      <div className="chart-container">
        <ReactApexChart
          options={chartOptions}
          series={currentData.series}
          type="line"
          height={370}
        />
      </div>

      <div className="text-center mt-3">
        <div className="d-flex justify-content-center gap-4">
          <div className="d-flex align-items-center">
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#176BA0',
                borderRadius: '3px',
                marginRight: '6px',
              }}
            ></div>
            <span style={{ fontSize: '11px', color: '#666' }}>Runtime (in 24 Hz)</span>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: '12px',
                height: '2px',
                backgroundColor: '#FF6B6B',
                marginRight: '6px',
              }}
            ></div>
            <span style={{ fontSize: '11px', color: '#666' }}>Cycles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpRuntimeChart;
