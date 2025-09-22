import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Label, Input } from 'reactstrap';

const WaterQualityChart = () => {
  const [selectedChart, setSelectedChart] = useState('ph'); // ph | tds
  const [timeRange, setTimeRange] = useState('week');
  const [showPhAlerts, setShowPhAlerts] = useState(true);
  const [showTdsAlerts, setShowTdsAlerts] = useState(true);

  const categories = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept'];
  const phData = [5, 6.8, 7.2, 7.4, 7.6, 8.2, 7.8, 7.1, 6.9];
  const tdsData = [250, 320, 480, 620, 780, 920, 1050, 980, 850];

  const redAlertIcon = '\u26A0';
  const yellowAlertIcon = '\u26A0';

  const phOptions = {
    chart: { id: 'ph-chart', type: 'line', height: 260, toolbar: { show: false } },
    xaxis: { categories },
    yaxis: {
      min: 4,
      max: 10,                 // fixed: wider range so line is visible
      title: { text: 'pH Level' },
      labels: { formatter: (v) => v.toFixed(1) },
    },
    tooltip: { shared: true, y: { formatter: (v) => v.toFixed(1) } },
    annotations: {
      yaxis: showPhAlerts
        ? [
            {
              y: 6.5,
              y2: 8.5,
              borderColor: '#F1C40F',
              fillColor: '#F1C40F',
              opacity: 0.1,
              label: {
                borderColor: '#F1C40F',
                style: { color: '#000', background: '#F1C40F', fontWeight: 'bold', fontSize: '12px' },
                text: 'Ideal pH Range (6.5-8.5)',
              },
            },
          ]
        : [],
    },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 4 },
    colors: ['#3498DB'],
  };

  const tdsOptions = {
    chart: { id: 'tds-chart', type: 'line', height: 260, toolbar: { show: false } },
    xaxis: { categories },
    yaxis: {
      min: 0,
      max: 1200,               // fixed: big enough for 1050
      title: { text: 'TDS (ppm)' },
      labels: { formatter: (v) => v.toFixed(0) },
    },
    tooltip: { shared: true },
    annotations: {
      yaxis: showTdsAlerts
        ? [
            {
              y: 500,
              borderColor: '#F1C40F',
              label: {
                borderColor: '#F1C40F',
                style: { color: '#000', background: '#F1C40F', fontSize: '12px' },
                text: `${yellowAlertIcon} Acceptable Max (500 ppm)`,
              },
            },
            {
              y: 1000,
              borderColor: '#E74C3C',
              label: {
                borderColor: '#E74C3C',
                style: { color: '#fff', background: '#E74C3C', fontSize: '12px' },
                text: `${redAlertIcon} Critical Level (1000 ppm)`,
              },
            },
          ]
        : [],
    },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 4 },
    colors: ['#2ECC71'],
  };

  const phSeries = [{ name: 'pH Level', data: phData }];
  const tdsSeries = [{ name: 'TDS (ppm)', data: tdsData }];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Header with time range */}
      <Row className="align-items-center mb-1 chart-card">
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
      <div className='text-end mb-3'>
       <Input
            type="select"
            value={selectedChart}
            onChange={(e) => setSelectedChart(e.target.value)}
            style={{ display: 'inline-block', width: 'auto' }}
          >
            <option value="ph">pH Chart</option>
            <option value="tds">TDS Chart</option>
          </Input>
</div>
      {/* Chart Section */}
      {selectedChart === 'ph' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <h4 className='sync-card-label'>Water Quality (pH)</h4>
            <Label check style={{ cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={showPhAlerts}
                onChange={() => setShowPhAlerts(!showPhAlerts)}
                style={{ marginRight: 6 }}
              />
              Overlay Alerts
            </Label>
          </div>
          <Chart options={phOptions} series={phSeries} type="line" height={260} />
        </div>
      )}

      {selectedChart === 'tds' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <h4 className='sync-card-label'>Water Quality (TDS)</h4>
            <Label check style={{ cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={showTdsAlerts}
                onChange={() => setShowTdsAlerts(!showTdsAlerts)}
                style={{ marginRight: 6 }}
              />
              Overlay Alerts
            </Label>
          </div>
          <Chart options={tdsOptions} series={tdsSeries} type="line" height={260} />
        </div>
      )}
    </div>
  );
};

export default WaterQualityChart;
