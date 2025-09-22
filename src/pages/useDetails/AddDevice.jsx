import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Button, FormGroup, Label } from 'reactstrap';
import CustomModal from '../Common/modal/CustomModal';

const AddDevice = ({ isOpen, toggle }) => {
  const deviceSchema = Yup.object().shape({
    deviceName: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Device name is required'),
    serialNumber: Yup.string().required('Access type is required'),
  });
  const deviceName = [{ id: 1, label: 'Phone', value: 'phone' }];
  return (
    <>
      <CustomModal toggle={toggle} isOpen={isOpen} title="Add Device">
        <Formik
          initialValues={{ deviceName: '', serialNumber: '' }}
          validationSchema={deviceSchema}
          onSubmit={() => {
            console.log('submit');
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <Label for="deviceName">Controller Name</Label>{' '}
                <span className="text-danger">*</span>
                <Select options={deviceName} className="select-field" />
                <ErrorMessage name="deviceName" component="div" className="text-danger small" />
              </FormGroup>
              <FormGroup>
                <Label for="serialNumber">Access type</Label> <span className="text-danger">*</span>
                <Select options={deviceName} className="select-field" />
                <ErrorMessage name="serialNumber" component="div" className="text-danger small" />
              </FormGroup>

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
AddDevice.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default AddDevice;
