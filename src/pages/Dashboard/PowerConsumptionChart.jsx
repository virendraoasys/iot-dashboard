import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card, CardBody } from 'reactstrap';

const PowerConsumptionChart = () => {
  const [timeRange, setTimeRange] = useState('weekly');

  // Example data for each range
  const chartData = {
    daily: {
      categories: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
      data: [1.2, 1.8, 2.4, 3.2, 2.1, 1.6],
    },
    weekly: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [2.1, 2.8, 3.6, 2.3, 3.1, 3.8, 2.5],
    },
    monthly: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [10, 12, 14, 11],
    },
    yearly: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      data: [25, 28, 31, 35, 30, 28, 26, 32, 29, 27, 25, 23],
    },
  };

  const current = chartData[timeRange];

  // ApexChart Options
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '45%',
        distributed: false,
      },
    },
    colors: ['#264dc4'], // blue color
    dataLabels: { enabled: false },
    xaxis: {
      categories: current.categories,
      labels: {
        style: {
          colors: '#333',
          fontSize: '13px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Power Consumption (kWh)',
        style: { color: '#264dc4', fontWeight: 600 },
      },
      labels: {
        style: {
          colors: '#555',
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (val) => `${val} kWh`,
      },
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 3,
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      markers: { fillColors: ['#264dc4'] },
      labels: { colors: '#000' },
    },
  };

  const series = [
    {
      name: 'Power Consumption (kWh)',
      data: current.data,
    },
  ];

  return (
    <div className='chart-card'>
      <Row className="align-items-center mb-3">
        <Col md={12} className="chart-card-left-sec">
          <h5 className="mb-1">Power & Water Consumption</h5>
        </Col>
      </Row>
      <hr />
      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card
            className="consumption-card"
            style={{ background: '#2C67BA1A', border: 'none', borderRadius: '8px' }}
          >
            <CardBody>
              <h6 className='card-head'>Total Power <br /> Consumption</h6>
              <h4 className='content-one' style={{ color: '#2C67BA' }}>17.00 kWh</h4>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="consumption-card"
            style={{ background: '#10CF611A', border: 'none', borderRadius: '8px' }}
          >
            <CardBody>
              <h6 className="card-head">Avg. Power <br /> Consumption</h6>
              <h4 className='content-one' style={{ color: '#10CF61' }}>1.55 kWh</h4>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="consumption-card"
            style={{ background: '#DC131F1A', border: 'none', borderRadius: '8px' }}
          >
            <CardBody>
              <h6 className="card-head">Peak Power <br /> Consumption</h6>
              <h4 className='content-one' style={{ color: '#DC131F' }}>14.00 kWh</h4>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Time Range Buttons */}
      <div className="text-center chart-card-right-sec">
         <div className="btn-group" role="group">
        {['yearly', 'monthly', 'weekly', 'daily'].map((range) => (
          <button
            type="button"
            key={range}
            className={`btn btn-sm ${timeRange === range ? "active" : ""}`}
            onClick={() => setTimeRange(range)}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
        </div>
      </div>

      {/* Chart */}
      <Chart options={options} series={series} type="bar" height={206} />
    </div>
  );
};

export default PowerConsumptionChart;
