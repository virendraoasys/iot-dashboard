import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'reactstrap';

const WaterTankLevelChart = () => {
  const [timeRange, setTimeRange] = useState('week');
  const chartData = {
    series: [
      {
        name: 'Water Level',
        data: [25, 45, 60, 75, 85, 95, 70],
      },
    ],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };
  const refillEvents = [5, 9, 12];

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: {
        show: false,
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
      enabled: false,
      //   formatter(val) {
      //     return `${val}%`;
      //   },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    series: chartData.series,
    colors: ['#176BA0'],
    xaxis: {
      categories: chartData.categories,
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
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 7,
      labels: {
        formatter(val) {
          return `${Math.round(val)}%`;
        },
        style: {
          fontSize: '11px',
          colors: '#666',
        },
      },
      title: {
        text: 'Water Level (%)',
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          color: '#666',
        },
      },
    },
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
    annotations: {
      yaxis: [
        {
          y: 90,
          borderColor: '#FF6B6B',
          strokeDashArray: 0,
          borderWidth: 2,
          label: {
            borderColor: '#FF6B6B',
            style: {
              color: '#fff',
              background: '#FF6B6B',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            borderRadius: '20',
            text: 'Overflow detected',
            position: 'left',
            offsetX: 55,
          },
        },
        {
          y: 20,
          borderColor: '#FFA726',
          strokeDashArray: 0,
          borderWidth: 2,
          label: {
            borderColor: '#FFA726',
            style: {
              color: '#fff',
              background: '#FFA726',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            borderRadius: '20',
            text: 'Low Level Threshold',
            position: 'right',
            offsetX: 0,
          },
        },
      ],
      points: refillEvents.map((index) => ({
        x: chartData.categories[index],
        y: chartData.series[0].data[index],
        marker: {
          size: 6,
          fillColor: '#FF6B6B',
          strokeColor: '#fff',
          strokeWidth: 2,
          radius: 4,
        },
        label: {
          borderColor: '#FF6B6B',
          offsetY: -25,
          style: {
            color: '#fff',
            background: '#FF6B6B',
            fontSize: '10px',
            fontWeight: 'bold',
            padding: {
              top: 2,
              bottom: 2,
              left: 6,
              right: 6,
            },
          },
          text: 'Refill',
        },
      })),
    },
  };

  return (
    <div className="water-tank-chart">
      <Row className="align-items-center mb-3 chart-card">
        <Col md={8} className="chart-card-left-sec">
          <h5 className="mb-1">Water Tank Level Overtime</h5>
          <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
            Monitor tank levels, identify trends and review critical events
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
        <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={350} />
      </div>

      {/* Legend */}
      <div className="mt-3 d-flex justify-content-center gap-4">
        <div className="d-flex align-items-center">
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FF6B6B',
              borderRadius: '50%',
              marginRight: '8px',
            }}
          ></div>
          <span style={{ fontSize: '12px' }}>Refill Events</span>
        </div>
        <div className="d-flex align-items-center">
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#176BA0',
              borderRadius: '3px',
              marginRight: '8px',
            }}
          ></div>
          <span style={{ fontSize: '12px' }}>Water Level</span>
        </div>
      </div>
    </div>
  );
};

export default WaterTankLevelChart;
