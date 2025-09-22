import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage,validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { Button, FormGroup, Label, Input, } from 'reactstrap';
import CustomModal from '../../Common/modal/CustomModal';

const SendEmail = ({ isOpen, toggle }) => {
    const deviceSchema = Yup.object().shape({
        from_time: Yup.date().required('From time is required'),
        to_time: Yup.date().required('To time is required'),
        email: Yup.string().email('Invalid email').required('Email is required').validate((value) => {
            return value.includes('@') && value.includes('.')
        }),
        group: Yup.string().required('Group is required'),
        CC: Yup.string().email('Invalid CC email').notRequired().validate((value) => {
            return value.includes('@') && value.includes('.')
        }),
        from_time_AM: Yup.boolean().notRequired(),
        to_time_AM: Yup.boolean().notRequired(),
        from_time_PM: Yup.boolean().notRequired(),
        to_time_PM: Yup.boolean().notRequired(),

    });
    return (
        <>
            <CustomModal toggle={toggle} isOpen={isOpen} title="Send Email">
                <Formik
                    initialValues={{ from_time: '', to_time: '', email: '', group: '', CC: '', empty_controller_from_time: false, empty_controller_to_time: false }}
                    validationSchema={deviceSchema}
                    onSubmit={(values) => {
                        validateYupSchema(values, deviceSchema)
                        console.log('submit', values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="d-flex justify-content-between align-items-center gap-3">
                                <FormGroup>
                                    <Label for="from_time">From Time</Label>
                                    <Field
                                        name="from_time"
                                        as={Input}
                                        id="from_time"
                                        type="date"
                                        placeholder="Enter From time"
                                    />
                                    <ErrorMessage name="from_time" component="div" className="text-danger small" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="from_time_AM">AM</Label>
                                    <Field
                                        name="from_time_AM"
                                        as={Input}
                                        id="from_time_AM"
                                        type="checkbox"
                                    />
                                    <ErrorMessage name="from_time_AM" component="div" className="text-danger small" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="from_time_PM">PM</Label>
                                    <Field
                                        name="from_time_PM"
                                        as={Input}
                                        id="from_time_PM"
                                        type="checkbox"
                                    />
                                    <ErrorMessage name="from_time_PM" component="div" className="text-danger small" />
                                </FormGroup>

                            </div>

                            <div className="d-flex justify-content-between align-items-center gap-3">
                                <FormGroup>
                                    <Label for="to_time">To Time</Label>
                                    <Field
                                        name="to_time"
                                        as={Input}
                                        type="date"
                                        id="to_time"
                                        placeholder="Enter To time"
                                    />
                                    <ErrorMessage name="to_time" component="div" className="text-danger small" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="to_time_AM">AM</Label>
                                    <Field
                                        name="to_time_AM"
                                        as={Input}
                                        id="to_time_AM"
                                        type="checkbox"
                                    />
                                    <ErrorMessage name="to_time_AM" component="div" className="text-danger small" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="to_time_PM">PM</Label>
                                    <Field
                                        name="to_time_PM"
                                        as={Input}
                                        id="to_time_PM"
                                        type="checkbox"
                                    />
                                    <ErrorMessage name="to_time_PM" component="div" className="text-danger small" />
                                </FormGroup>

                            </div>


                               <FormGroup>
                                <Label for="email">Email</Label>
                                <Field
                                    name="email"
                                    as={Input}
                                    id="email"
                                    placeholder="Enter email"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger small" />
                            </FormGroup> 
                            

                                 <FormGroup>
                                <Label for="group">Group</Label>
                                <Field
                                    name="group"
                                    as={Input}
                                    id="group"
                                    placeholder="Enter group"
                                />
                                <ErrorMessage name="group" component="div" className="text-danger small" />
                            </FormGroup>
                

                            
                           
                            <FormGroup>
                                <Label for="CC">CC</Label>
                                <Field
                                    name="CC"
                                    as={Input}
                                    id="CC"
                                    placeholder="Enter CC email"
                                />
                                <ErrorMessage name="CC" component="div" className="text-danger small" />
                            </FormGroup>



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
        </>
    );
};
SendEmail.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
export default SendEmail;