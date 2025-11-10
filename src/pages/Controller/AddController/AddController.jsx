import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import CustomModal from '../../Common/modal/CustomModal';

const AddUser = ({ isOpen, toggle }) => {
    const userSchema = Yup.object().shape({
    unique_id: Yup.string()
      .min(3, 'Unique ID must be at least 3 characters')
      .required('Unique ID is required'),
    user_type: Yup.object().required('User type is required'),
    state: Yup.object().required('State is required'),
    district: Yup.object().required('District is required'),
    block: Yup.object().required('Block is required'),
    gp: Yup.object().required('Gram Panchayat is required'),
    controller: Yup.object().required('Controller name is required'),
    group: Yup.object().required('Group name is required'),
  });
    const options = [{ id: 1, label: 'Phone', value: 'phone' }];
    const innitialvalues = {
          unique_id: '',
          user_type: "",
          state: "",
          district: "",
          block: "",
          gp: "",
          controller: "",
          group: "",
        }
  return (
    <>
      <CustomModal toggle={toggle} isOpen={isOpen} size="lg" title="Add Controller">
        <Formik
          enableReinitialize
          initialValues={innitialvalues}
          validationSchema={userSchema}
          onSubmit={() => {
            console.log('submit');
          }}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form>
               <Row>
              {/* Unique ID */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Unique ID <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="text"
                    name="unique_id"
                    placeholder="Enter Unique ID"
                    className="form-control"
                  />
                  <ErrorMessage name="unique_id" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* User Type */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    User Type <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="user_type"
                    options={options}
                    value={values.user_type}
                    onChange={(option) => setFieldValue('user_type', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="user_type" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* State */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    State <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="state"
                    options={options}
                    value={values.state}
                    onChange={(option) => setFieldValue('state', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="state" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* District */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    District <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="district"
                    options={options}
                    value={values.district}
                    onChange={(option) => setFieldValue('district', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="district" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Block */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Block <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="block"
                    options={options}
                    value={values.block}
                    onChange={(option) => setFieldValue('block', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="block" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Gram Panchayat */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Gram Panchayat <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="gp"
                    options={options}
                    value={values.gp}
                    onChange={(option) => setFieldValue('gp', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="gp" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Controller Name */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Controller Name <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="controller"
                    options={options}
                    value={values.controller}
                    onChange={(option) => setFieldValue('controller', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="controller" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Group Name */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Group Name <span className="text-danger">*</span>
                  </Label>
                  <Select
                    name="group"
                    options={options}
                    value={values.group}
                    onChange={(option) => setFieldValue('group', option)}
                    classNamePrefix="react-select"
                  />
                  <ErrorMessage name="group" component="div" className="text-danger" />
                </FormGroup>
              </Col>
            </Row>

              <div className="d-flex justify-content-end gap-2 mt-3">
                <Button className="cancel-btn" type="button" onClick={toggle}>
                  Cancel
                </Button>
                <Button className="login-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </>
  );
};
AddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default AddUser;