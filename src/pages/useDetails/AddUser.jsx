import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import CustomModal from '../Common/modal/CustomModal';

const AddUser = ({ isOpen, toggle }) => {
  // ✅ Validation Schema
  const userSchema = Yup.object().shape({
    name_of_user: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),

    user_name: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),

    mob_no: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });
  const initialValues={
          name_of_user: '',
          user_name: '',
          mob_no: '',
          password: '',
          email: '',
        }

  return (
    <CustomModal toggle={toggle} isOpen={isOpen} size="lg" title="Add User">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form Submitted:', values);
          setSubmitting(false);
          toggle();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row>
              {/* Name of User */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Name of the User <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="text"
                    name="name_of_user"
                    placeholder="Enter your name"
                    className="form-control"
                  />
                  <ErrorMessage name="name_of_user" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Username */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Username <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="text"
                    name="user_name"
                    placeholder="Enter your username"
                    className="form-control"
                  />
                  <ErrorMessage name="user_name" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Mobile Number */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Mobile Number <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="text"
                    name="mob_no"
                    placeholder="Enter your mobile number"
                    className="form-control"
                  />
                  <ErrorMessage name="mob_no" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Password */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Password <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control"
                  />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </FormGroup>
              </Col>

              {/* Email */}
              <Col md="6">
                <FormGroup>
                  <Label>
                    Email <span className="text-danger">*</span>
                  </Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </FormGroup>
              </Col>
            </Row>

            {/* Buttons */}
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
  );
};

AddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default AddUser;
