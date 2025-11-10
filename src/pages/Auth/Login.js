import React from 'react';
import { Button, Label, FormGroup, Row, Col, Card, CardBody, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
// import AuthLogo from "../../layouts/logo/AuthLogo";
// import sideLogo from "../../assets/iotimages/auth-logo.png"
import loginSideImg from "../../assets/iotimages/login-side.png"
import loginLogo from "../../assets/iotnewimages/iot-logo-login.png"
import cm from "../../assets/iotnewimages/iot-cm.png";
import pm from "../../assets/iotnewimages/iot-pm.png";
import leftArrow from "../../assets/iotnewimages/left-arrow.png"
// import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
// import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="loginBox iot-login-box">
      {/* <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" /> */}
      <div className='auth-header d-flex justify-content-between align-items-center'>
        <div className='auth-logo' style={{paddingBottom:"15px"}}>
            <img src={loginLogo} alt='Auth-logo' />
        </div>
        <div className='d-flex gap-2'>
       
        <div className='auth-logo'>
            <img src={pm} alt='Auth-logo' />
        </div>
        <div className='auth-logo'>
            <img src={cm} alt='Auth-logo' />
        </div>
           
        </div>
        {/* <div className="header-btn ">
            <Button>Back To Website</Button>
        </div> */}

      </div>
      <div fluid className="login-page-container">
        <div className="header-btn d-flex justify-content-center align-items-center gap-2">
            <Button>
              <div className='left-arrow-sec'>
                <img src={leftArrow} alt='Auth-logo' />
              </div>
              Back To Website
            </Button>
        </div>
        <Row className="justify-content-center align-items-center login-height h-100">
          <Col lg="4">
            <div className="side-img">
              <img src={loginSideImg} alt="side-img"  />
            </div>
          </Col>
          <Col lg="8" className="d-flex justify-content-center align-items-center p-0">
            {/* <AuthLogo /> */}
            <Card className="login-card">
              <CardBody className=" login-heading">
                <div className="header">
                <h5 className="">Hello! Welcome Back</h5>
                <small className=" d-block">
                  Access your account safely and continue your services.
                </small>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={() => {
                    // eslint-disable-next-line no-alert
                    // alert(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
                    navigate('/dashboard');
                  }}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="email">User Name : {" "} </Label><span className="text-danger">*</span>
                        <Field
                          name="email"
                          type="text"
                          placeholder="Enter Your User Name"
                          className={`form-control${
                            errors.email && touched.email ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter Your Password"
                          className={`form-control${
                            errors.password && touched.password ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check d-flex" inline>
                        <Label check className="forgot-password">
                          <Input type="checkbox" />
                          Remember me
                        </Label>
                        <Link className="ms-auto text-decoration-none forgot-password" to="/auth/forgotPwd">
                          <small>Forgot Pwd?</small>
                        </Link>
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="" className="w-100 login-btn">
                          Sign in
                        </Button>
                        <Button type="submit" color="" className="w-100 sign-btn">
                          Sign Up
                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
                <div className="d-block form-bottom">
                                  By creating an account, you agree to the  <Link to="/auth/registerformik" className='terms-condition'>Terms of use and Privacy Policy.</Link>
                                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;

