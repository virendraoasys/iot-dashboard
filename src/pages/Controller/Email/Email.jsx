import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import CustomModal from '../../Common/modal/CustomModal';

const SendEmail = ({ isOpen, toggle }) => {
  // ✅ Yup validation schema
  const deviceSchema = Yup.object().shape({
    from_time: Yup.date().required('From time is required'),
    to_time: Yup.date().required('To time is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required')
      .test('is-valid', 'Invalid email format', (value) =>
        value ? value.includes('@') && value.includes('.') : false
      ),

    group: Yup.string().required('Group is required'),

    CC: Yup.string()
      .nullable()
      .test('is-valid-cc', 'Invalid CC email', (value) => {
        if (!value) return true; // allow empty
        return value.includes('@') && value.includes('.');
      }),
  });
  const initialValues={
          from_time: '',
          to_time: '',
          email: '',
          group: '',
          CC: '',
          empty_controller_from_time: false,
          empty_controller_to_time: false,
        }

  return (
    <CustomModal toggle={toggle} isOpen={isOpen} title="Send Email">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={deviceSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('✅ Submitted values:', values);
          setSubmitting(false);
          toggle();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row>
              {/* From Time */}
              <Col lg="6">
                <FormGroup>
                  <Label for="from_time">From Time</Label> <span className="text-danger">*</span>
                  <Field
                    name="from_time"
                    as={Input}
                    id="from_time"
                    type="date"
                    placeholder="Enter From time"
                  />
                  <ErrorMessage name="from_time" component="div" className="text-danger small" />
                </FormGroup>
              </Col>

              {/* Empty Controller From Time */}
              <Col lg="6" className="d-flex align-items-center gap-2">
                <FormGroup className="mb-0">
                  <Field
                    name="empty_controller_from_time"
                    as={Input}
                    id="empty_controller_from_time"
                    type="checkbox"
                  />
                  <Label for="empty_controller_from_time" className="mb-0 ms-2">
                    Empty Controller
                  </Label>
                </FormGroup>
              </Col>

              {/* To Time */}
              <Col lg="6">
                <FormGroup>
                  <Label for="to_time">To Time</Label> <span className="text-danger">*</span>
                  <Field
                    name="to_time"
                    as={Input}
                    type="date"
                    id="to_time"
                    placeholder="Enter To time"
                  />
                  <ErrorMessage name="to_time" component="div" className="text-danger small" />
                </FormGroup>
              </Col>

              {/* Empty Controller To Time */}
              <Col lg="6" className="d-flex align-items-center gap-2">
                <FormGroup className="mb-0">
                  <Field
                    name="empty_controller_to_time"
                    as={Input}
                    id="empty_controller_to_time"
                    type="checkbox"
                  />
                  <Label for="empty_controller_to_time" className="mb-0 ms-2">
                    Empty Controller
                  </Label>
                </FormGroup>
              </Col>

              {/* Email */}
              <Col lg="12">
                <FormGroup>
                  <Label for="email">Email</Label> <span className="text-danger">*</span>
                  <Field name="email" as={Input} id="email" placeholder="Enter email" />
                  <ErrorMessage name="email" component="div" className="text-danger small" />
                </FormGroup>
              </Col>

              {/* Group */}
              <Col lg="6">
                <FormGroup>
                  <Label for="group">Group</Label> <span className="text-danger">*</span>
                  <Field name="group" as={Input} id="group" placeholder="Enter group" />
                  <ErrorMessage name="group" component="div" className="text-danger small" />
                </FormGroup>
              </Col>

              {/* CC */}
              <Col lg="6">
                <FormGroup>
                  <Label for="CC">CC</Label> <span className="text-danger">*</span>
                  <Field name="CC" as={Input} id="CC" placeholder="Enter CC email" />
                  <ErrorMessage name="CC" component="div" className="text-danger small" />
                </FormGroup>
              </Col>
            </Row>

            <div className="d-flex justify-content-end gap-2 mt-3">
              <Button color="secondary" type="button" onClick={toggle}>
                Cancel
              </Button>
              <Button color="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

SendEmail.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SendEmail;
