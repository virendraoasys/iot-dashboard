import React from 'react';
import { Container, Row, Col, Button, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import ReactApexChart from 'react-apexcharts';
import * as Yup from 'yup';
// import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import vector from '../../assets/iotimages/vector-1.png';
// import powerconsumption from "../../assets/iotimages/power-consuption.png"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Validation Schema
const PowerConsumptionSchema = Yup.object().shape({
  fromDate: Yup.date().required('From date is required'),
  fromPeriod: Yup.string().required('Select AM or PM'),
  toDate: Yup.date().required('To date is required'),
  toPeriod: Yup.string().required('Select AM or PM'),
});

const PowerConsumption = () => {
  // const chartData = {
  //   labels: Array.from({ length: 12 }, (_, i) => i + 1),
  //   datasets: [
  //     {
  //       label: 'Power Consumption',
  //       data: [20, 25, 35, 40, 50, 70, 20, 25, 20, 30, 75, 60],
  //       borderColor: 'blue',
  //       backgroundColor: 'rgba(0,0,255,0.1)',
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   responsive: true,
  //   plugins: { legend: { display: false } },
  //   scales: { y: { beginAtZero: true } },
  // };

  // const [timeRange, setTimeRange] = useState('monthly');

  // Chart data configuration
  // const getChartData = () => {
  //   switch (timeRange) {
  //     case 'yearly':
  //       return {
  //         series: [
  //           {
  //             name: 'Power Consumption',
  //             data: [1200, 1100, 1300, 1250, 1400, 1350, 1500, 1450, 1600, 1550, 1700, 1650],
  //           },
  //         ],
  //         options: {
  //           xaxis: {
  //             categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  //           },
  //         },
  //       };

  //     case 'monthly':
  //       return {
  //         series: [
  //           {
  //             name: 'Power Consumption',
  //             data: [40, 45, 42, 48, 43, 47, 50, 45, 52, 48, 55, 50],
  //           },
  //         ],
  //         options: {
  //           xaxis: {
  //             // categories: Array.from({length: 30}, (_, i) => i + 1)
  //             categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  //           },
  //         },
  //       };

  //     case 'weekly':
  //       return {
  //         series: [
  //           {
  //             name: 'Power Consumption',
  //             data: [65, 70, 68, 72, 75, 78, 80],
  //           },
  //         ],
  //         options: {
  //           xaxis: {
  //             categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //           },
  //         },
  //       };

  //     case 'daily':
  //       return {
  //         series: [
  //           {
  //             name: 'Power Consumption',
  //             data: [
  //               2.5, 2.8, 3.0, 2.7, 3.2, 3.5, 3.8, 4.0, 4.2, 4.5, 4.3, 4.0, 3.8, 3.5, 3.2, 3.0, 2.8,
  //               2.5, 2.2, 2.0, 1.8, 1.5, 1.2, 1.0,
  //             ],
  //           },
  //         ],
  //         options: {
  //           xaxis: {
  //             categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  //           },
  //         },
  //       };

  //     default:
  //       return {
  //         series: [],
  //         options: {},
  //       };
  //   }
  // };

  // const chartData = getChartData();

  // const chartOptions = {
  //   chart: {
  //     type: 'area',
  //     height: 200,
  //     toolbar: {
  //       show: true,
  //       tools: {
  //         download: true,
  //         selection: false,
  //         zoom: false,
  //         zoomin: false,
  //         zoomout: false,
  //         pan: false,
  //         reset: false,
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       shadeIntensity: 1,
  //       opacityFrom: 0.7,
  //       opacityTo: 0.3,
  //       stops: [0, 90, 100],
  //     },
  //   },
  //   colors: ['#176BA0'],
  //   xaxis: {
  //     ...chartData.options.xaxis,
  //     // title: {
  //     //   text:
  //     //     timeRange === 'daily'
  //     //       ? 'Time'
  //     //       : timeRange === 'weekly'
  //     //       ? 'Days'
  //     //       : timeRange === 'monthly'
  //     //       ? 'Days'
  //     //       : 'Months',
  //     // },
  //   },
  //   yaxis: {
  //     // title: {
  //     //   text: 'Power (kWh)',
  //     // },
  //     // labels: {
  //     //   formatter(value) {
  //     //     return value.toFixed(0);
  //     //   },
  //     // },
  //   },
  //   tooltip: {
  //     y: {
  //       formatter(value) {
  //         return value.toFixed(0);
  //       },
  //     },
  //   },
  //   grid: {
  //     borderColor: '#f1f1f1',
  //   },
  // };

  // const timeRangeButtons = [
  //   { key: 'yearly', label: 'Yearly' },
  //   { key: 'monthly', label: 'Monthly' },
  //   { key: 'weekly', label: 'Weekly' },
  //   { key: 'daily', label: 'Daily' },
  // ];

  return (
    <Container className="power-consumption-sec">
      <Row className="g-3">
        {/* Left Image */}
        <Col lg={12}>
          <div className="d-flex left-side">
            {/* <div className="img-sec">
              <img src={powerconsumption} alt="Sprinkler" className="img-fluid rounded" />
            </div> */}

            <div className="form-sec mt-2">
              {/* <h5>Power Consumption Details</h5> */}

              <Formik
                initialValues={{
                  fromDate: '',
                  fromPeriod: '',
                  toDate: '',
                  toPeriod: '',
                }}
                validationSchema={PowerConsumptionSchema}
                onSubmit={(values) => {
                  console.log('Form values:', values);
                }}
              >
                {() => (
                  <Form>
                    {/* From Date */}
                    <FormGroup>
                      <Label htmlFor="fromDate">From</Label>
                      <Field type="date" id="fromDate" name="fromDate" className="form-control" />
                      <ErrorMessage name="fromDate" component="div" className="text-danger" />
                    </FormGroup>

                    {/* From Period */}
                    <FormGroup tag="fieldset">
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="fromAM"
                            name="fromPeriod"
                            value="AM"
                            className="form-check-input"
                          />
                          <Label className="form-check-label" htmlFor="fromAM">
                            AM
                          </Label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="fromPM"
                            name="fromPeriod"
                            value="PM"
                            className="form-check-input"
                          />
                          <Label className="form-check-label" htmlFor="fromPM">
                            PM
                          </Label>
                        </div>
                      </div>
                      <ErrorMessage name="fromPeriod" component="div" className="text-danger" />
                    </FormGroup>

                    {/* To Date */}
                    <FormGroup>
                      <Label htmlFor="toDate">To</Label>
                      <Field type="date" id="toDate" name="toDate" className="form-control" />
                      <ErrorMessage name="toDate" component="div" className="text-danger" />
                    </FormGroup>

                    {/* To Period */}
                    <FormGroup tag="fieldset">
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="toAM"
                            name="toPeriod"
                            value="AM"
                            className="form-check-input"
                          />
                          <Label className="form-check-label" htmlFor="toAM">
                            AM
                          </Label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="toPM"
                            name="toPeriod"
                            value="PM"
                            className="form-check-input"
                          />
                          <Label className="form-check-label" htmlFor="toPM">
                            PM
                          </Label>
                        </div>
                      </div>
                      <ErrorMessage name="toPeriod" component="div" className="text-danger" />
                    </FormGroup>

                    <Button color="" block type="submit" className="login-btn">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Col>

        {/* Right Stats and Chart */}
        {/* <Col md={4} className="ps-2">
          <Row className="mb-2 power-consumption-small-card-sec gap-2">
            {['Total Consumption', 'Average Daily', 'Peak Consumption'].map((label) => (
              <Col key={label}>
                <Card>
                  <CardBody>
                    <div className="consumption-card">
                      <div className="img-sec mb-2">
                        <img src={vector} alt="" />
                      </div>
                      <div className="text-muted label mb-1">{label}</div>
                      <h5>390 Kwh</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="power-consumption-chart-sec position-relative">
            <Card>
              <CardBody>
                <h5>Power Consumption</h5>
                <div className="">
                  <Row className="align-items-center mb-3">
                    <Col md={12} className="chat-btn-group">
                      <div className="btn-group" role="group">
                        {timeRangeButtons.map((button) => (
                          <button
                            key={button.key}
                            type="button"
                            className={`btn btn-sm ${
                              timeRange === button.key ? 'active' : ''
                            }`}
                            onClick={() => setTimeRange(button.key)}
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    
                      <ReactApexChart
                        options={chartOptions}
                        series={chartData.series}
                        type="area"
                        height={195}
                      />
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default PowerConsumption;
