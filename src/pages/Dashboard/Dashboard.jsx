import React from 'react';
// import Select from 'react-select';
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
// import WaterTankLevelChart from './WaterTankLevelChart';
// import PumpRuntimeChart from './PumpRunTimeChart';
// import WaterQualityChart from './WaterQualityChart';
import ScheduleCompilerChart from './SceduleCompilerChart';
// import MapComponent from '../Common/map/MapComponent';
import PowerAndConsumptionChart from './PowerAndWaterCosumptionChart';
import SceduleCompilerBarAndLineChart from './SceduleCompilerBarAndLineChart';
import PowerConsumptionChart from './PowerConsumptionChart';
import ControllerMap from './ControllerMap';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const iconStyle1 = {
  background: '#176BA0',
};

const iconStyle2 = {
  background: '#7D3AC1',
};

const iconStyle3 = {
  background: '#EA7369',
};

const iconStyle4 = {
  background: '#EE9A3A',
};

const iconStyle5 = {
  background: '#E7E34E',
};

const iconStyle6 = {
  background: '#1DE4BD',
};

const DashBoard = () => {

  const data = [
    {
      id: 1,
      image: img1,
      name: 'Controllers',
      count: '4',
      // style: cardColor1,
      iconStyle: iconStyle1,
    },
    { id: 2, image: img2, name: 'Devices', count: '5', 
      // style: cardColor2, 
      iconStyle: iconStyle2 
    },
    {
      id: 3,
      image: img3,
      name: 'Controller On',
      count: '4',
      // style: cardColor3,
      iconStyle: iconStyle3,
    },
    {
      id: 4,
      image: img4,
      name: 'Controller Off',
      count: '8',
      // style: cardColor4,
      iconStyle: iconStyle4,
    },
    {
      id: 5,
      image: img5,
      name: 'Total Kw/H Load',
      count: '7',
      // style: cardColor5,
      iconStyle: iconStyle5,
    },
    {
      id: 6,
      image: img6,
      name: 'Total Group',
      count: '9',
      // style: cardColor6,
      iconStyle: iconStyle6,
    },
  ];
  const tabs = [
    { key: 'power', label: 'Power Consumption', component: <PowerConsumption /> },
    { key: 'water', label: 'Water Consumption', component: <WaterConsumption /> },
  ];


  return (
    <div className="dashboard-page page-container">
      <div className=" dashboard-page-top-sec pb-3">
        <div className="page-heading">Power & Water Consumption Dashboard</div>
        {/* <div className="select-sec d-flex gap-2">
          <Select options={options} className="select-field" />
          <Select options={options} className="select-field" />
        </div> */}
        <div className="top-cards d-flex justify-content-between ">
        {data?.map((e) => (
          <div key={e.id} className="all-count-card">
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
      </div>
      
      <div className='dashboard-card-section'>
        <div className='dashboard-all-card-section'>
          <Row>
            <Col lg="8">
              <div className="water-tank-label">
                <Card>
                  <CardBody>
                    <h5>Power & Water Consumption</h5>
                    <hr />
                    <ControllerMap />
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="4">
              <div className="water-tank-label">
                <Card>
                  <CardBody>
                    <h5>Power & Water Consumption</h5>
                    <hr />
                    <div className="tab-sec">
                      <CustomTabs tabs={tabs} defaultActive={0} />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="6">
              <div className="water-tank-label mt-3">
                <Card>
                  <CardBody>
                    <SceduleCompilerBarAndLineChart />
                  </CardBody>
                </Card>
              </div>
            </Col>
            
            <Col lg="6">
              <div className="water-tank-label mt-3">
                <Card>
                  <CardBody>
                    <ScheduleCompilerChart />
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="6">
              <div className="water-tank-label mt-3">
                <Card>
                  <CardBody>
                    <PowerAndConsumptionChart />
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="6">
              <div className="water-tank-label mt-3">
                <Card>
                  <CardBody>
                    <PowerConsumptionChart />
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
