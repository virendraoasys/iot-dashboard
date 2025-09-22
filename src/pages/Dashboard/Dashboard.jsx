import React from 'react';
import Select from 'react-select';
// import { Bar } from 'react-chartjs-2';
import { Card, CardBody, Col, Row } from 'reactstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import CountCard from './CountCard';
import img1 from '../../assets/iotimages/d-icon-1.png';
import img2 from '../../assets/iotimages/d-icon-2.png';
import img3 from '../../assets/iotimages/d-icon-3.png';
import img4 from '../../assets/iotimages/d-icon-4.png';
import img5 from '../../assets/iotimages/d-icon-5.png';
import img6 from '../../assets/iotimages/d-icon-6.png';
import CustomTabs from '../Common/tabs/CustomTabs';
import PowerConsumption from './PowerConsumption';
import WaterConsumption from './WaterConsumption';
import WaterTankLevelChart from './WaterTankLevelChart';
import PumpRuntimeChart from './PumpRunTimeChart';
import WaterQualityChart from './WaterQualityChart';
import ScheduleCompilerChart from './SceduleCompilerChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const cardColor1 = {
  background: '#176BA00D',
  border: '1px solid #176BA033',
};
const iconStyle1 = {
  background: '#176BA0',
};
const cardColor2 = {
  background: '#7D3AC10D',
  border: '1px solid #7D3AC133',
};
const iconStyle2 = {
  background: '#7D3AC1',
};

const cardColor3 = {
  background: '#EA73690D',
  border: '1px solid #EA736933',
};
const iconStyle3 = {
  background: '#EA7369',
};

const cardColor4 = {
  background: '#EE9A3A0D',
  border: '1px solid #EE9A3A33',
};
const iconStyle4 = {
  background: '#EE9A3A',
};
const cardColor5 = {
  background: '#E7E34E0D',
  border: '1px solid #E7E34E33',
};
const iconStyle5 = {
  background: '#E7E34E',
};

const cardColor6 = {
  background: '#1DE4BD0D',
  border: '1px solid #1DE4BD33',
};
const iconStyle6 = {
  background: '#1DE4BD',
};

const DashBoard = () => {
    const options = [
        { value: 'motor', label: 'Motor' },
        { value: 'power', label: 'Power' },
    ];
  const data = [
    {
      id: 1,
      image: img1,
      name: 'Controllers',
      count: '4',
      style: cardColor1,
      iconStyle: iconStyle1,
    },
    { id: 2, image: img2, name: 'Devices', count: '5', style: cardColor2, iconStyle: iconStyle2 },
    {
      id: 3,
      image: img3,
      name: 'Controller On',
      count: '4',
      style: cardColor3,
      iconStyle: iconStyle3,
    },
    {
      id: 4,
      image: img4,
      name: 'Controller Off',
      count: '8',
      style: cardColor4,
      iconStyle: iconStyle4,
    },
    {
      id: 5,
      image: img5,
      name: 'Total Kw/H Load',
      count: '7',
      style: cardColor5,
      iconStyle: iconStyle5,
    },
    {
      id: 6,
      image: img6,
      name: 'Total Group',
      count: '9',
      style: cardColor6,
      iconStyle: iconStyle6,
    },
  ];
  const tabs = [
    { key: 'power', label: 'Power Consumption', component: <PowerConsumption /> },
    { key: 'water', label: 'Water Consumption', component: <WaterConsumption /> },
  ];

  //   const barchatdata = {
  //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //     datasets: [
  //       {
  //         label: 'Runtime (in 24 Hs)',
  //         data: [0, 35, 0, 50, 45, 0, 70],
  //         backgroundColor: 'rgba(0, 123, 255, 0.5)',
  //         borderRadius: 6,
  //         barThickness: 30,
  //       },
  //     ],
  //   };

  //   const barchatoptions = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         display: false
  //       },
  //       title: {
  //         display: true,
  //         text: 'Water Tank Level Overtime',
  //       },
  //     },
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 80,
  //         title: {
  //           display: true,
  //           text: 'Runtime (in 24 Hs)',
  //         },
  //       },
  //       x: {
  //         title: {
  //           display: true,
  //           text: 'Date'
  //         },
  //       },
  //     },
  //   };

  return (
    <div className="dashboard-page ">
      <div className="d-flex justify-content-between align-items-center">
        <div className="page-heading">Dashboard</div>
        <div className="select-sec d-flex gap-2">
          <Select options={options} className="select-field" />
          <Select options={options} className="select-field" />
        </div>
      </div>
      <div className="top-cards d-flex justify-content-between">
        {data?.map((e) => (
          <div key={e.id} className="">
            <CountCard
              image={e.image}
              name={e.name}
              count={e.count}
              style={e?.style}
              iconStyle={e?.iconStyle}
            />
          </div>
        ))}
      </div>
      <div className="tab-sec mt-5">
        <CustomTabs tabs={tabs} defaultActive={0} />
      </div>
      <Row className="mt-3">
        <Col md="6" className="pe-2">
          <div className="mt-2 water-tank-label">
            <Card>
              <CardBody>
               
                <WaterTankLevelChart />
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md="6" className="ps-2">
          <div className="mt-2 water-tank-label">
            <Card>
              <CardBody>
                <PumpRuntimeChart />
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md="6" className="pe-2">
          <div className="mt-3 water-tank-label">
            <Card>
              <CardBody>
                <WaterQualityChart />
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md="6" className="ps-2">
          <div className="mt-3 water-tank-label">
            <Card>
              <CardBody>
                <ScheduleCompilerChart />
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
