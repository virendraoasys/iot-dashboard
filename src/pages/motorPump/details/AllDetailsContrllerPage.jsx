import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Input,
  Badge,
  FormGroup,
  Label,
  Table,
} from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import plus from '../../../assets/iotimages/plusIcon.png';
import NoDataFound from '../../Common/card/NoDataFound';
import CustomButton from '../../Common/button/CustomButton';

// ✅ Validation Schema using Yup
const DateRangeSchema = Yup.object().shape({
  fromDate: Yup.date().required('Required'),
  toDate: Yup.date()
    .required('Required')
    .min(Yup.ref('fromDate'), 'To date cannot be earlier than From date'),
});

const AllDetailsControllerPage = ({ data = [], tableData = [] }) => {
  const addBTnStyle = {
    background: '#2C67BA',
    borderRadius: '50px',
  };
  const serviseData = [];

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    // You can call API or filter controllerData here
  };

  return (
    <>
      <div className="controller-section">
        <CardTitle tag="h5" className="mb-3">
          Controller
        </CardTitle>
        <hr />
        {/* ✅ Formik Form */}
        <Formik
          initialValues={{
            fromDate: '2025-10-28',
            toDate: '2025-11-04',
          }}
          validationSchema={DateRangeSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Row className="align-items-end mb-4">
                <Col md="3">
                  <FormGroup>
                    <Label for="fromDate">From</Label>
                    <Field as={Input} type="date" id="fromDate" name="fromDate" />
                    <ErrorMessage name="fromDate" component="div" className="text-danger" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="toDate">To</Label>
                    <Field as={Input} type="date" id="toDate" name="toDate" />
                    <ErrorMessage name="toDate" component="div" className="text-danger" />
                  </FormGroup>
                </Col>
                <Col md="2" className="mb-3">
                  <Button type="submit" className="w-100 submit-btn">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        {/* Controller Cards */}
        <Row>
          {data.map((item) => (
            <Col md="4" sm="6" xs="12" key={item.id} className="mb-3">
              <Card className="shadow-sm details-card">
                <CardBody className={item.status === 'ON' ? 'green-background' : 'red-background'}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1 fw-bold">Date &amp; time</p>
                    <Badge color={item.status === 'ON' ? 'success' : 'danger'} pill>
                      {item.status}
                    </Badge>
                  </div>
                  <p className="mb-2">{item.dateTime}</p>
                  <p className="mb-1 fw-bold">Reason</p>
                  <p className="mb-0 text-muted">{item.reason}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="table-section mt-4">
        {tableData.length === 0 ? (
          <NoDataFound />
        ) : (
          <div className="controller-section">
            <CardTitle tag="h5" className="mb-3">
              User Details (5)
            </CardTitle>
            <hr />
            <Table className="no-wrap align-middle motor-details-table" responsive>
              <thead>
                <tr>
                  <th className="px-4">Sl No.</th>
                  <th className="px-4">Farmer Name</th>

                  <th className="px-4">Crop Name</th>
                  <th className="px-4">Crop Type</th>
                  <th className="px-4">Income</th>
                  <th className="px-4">Mobile Number</th>
                  <th className="px-4">Access Type</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tdata) => (
                  <tr key={tdata.sl_no} className="border-top">
                    <td>{tdata.sl_no}</td>
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h5 className="mb-0">{tdata.farmer_name}</h5>
                        </div>
                      </div>
                    </td>
                    <td>{tdata.crop_name}</td>
                    <td>{tdata.crop_type}</td>

                    <td>{tdata.income}</td>
                    <td>{tdata.mob_no}</td>
                    <td>{tdata.access_type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>

      <div className="controller-section mt-4">
        <div className=' d-flex justify-content-between'>
            <CardTitle tag="h5" className="mb-3">
            Service Details (0)
            </CardTitle>
            <CustomButton
            image={plus}
            label="Add Service"
            color="transparent"
            style={addBTnStyle}
            //   onClick={handleAddUser}
            className="noBorder"
            />
        </div>
        <hr />
        {serviseData.length === 0 ? <NoDataFound className="rounded-border" /> : ''}
      </div>
    </>
  );
};
AllDetailsControllerPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
};
export default AllDetailsControllerPage;
