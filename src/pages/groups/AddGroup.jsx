import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
// import Select from 'react-select';
import { Button, FormGroup, Label } from 'reactstrap';
import CustomModal from '../Common/modal/CustomModal';

const AddGroup = ({ isOpen, toggle }) => {
  const deviceSchema = Yup.object().shape({
    deviceName: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Device name is required'),
    serialNumber: Yup.string().required('Access type is required'),
  });
  //   const deviceName=[
  //     {id: 1, label: "Phone", value:"phone"}
  //   ]
  return (
    <>
      <CustomModal toggle={toggle} isOpen={isOpen} title="Add Group">
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
                <Label>
                  Group Name <span className="text-danger">*</span>
                </Label>
                <Field
                  type="text"
                  name="user_name"
                  placeholder="Enter Your User Name"
                  className="form-control"
                />
                <ErrorMessage name="user_name" component="div" className="text-danger" />
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
AddGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default AddGroup;
