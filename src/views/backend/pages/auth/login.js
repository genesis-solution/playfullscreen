import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// rtl
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rtlModeAction, getRtlMode } from "../../../../store/mode/rtlmode";

import { userActions } from "./../../../../store/user";

const mapStateToProps = (state) => {
  return {
    rtlMode: getRtlMode(state),
    status: state.user.status
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      rtlModeAction,
      signInRequest: userActions.signIn
    },
    dispatch
  ),
});

const Login = (props) => {
  let history = useHistory();

  useEffect(() => {
    console.log(props.status, userActions.SIGN_IN_FULFILED);
    if (props.status === 'sign_in_request_success') {
      history.push('/');
    } else if (props.status === 'sign_in_request_fail') {
      
    } else if (props.status === 'request_pending'){
      // console.log('99')
    }
  }, [props.status]);

  const signIn = (e) => {
    e.preventDefault();  
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword2").value;
    props.signInRequest({ email, password });
  };

  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Sign in</h3>
                    <Form className="mt-4">
                      <Form.Group>
                        <Form.Control
                          type="email"
                          className="form-control mb-0"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                      <div className="sign-info">
                        <Button
                          className="btn btn-hover btn-primary1"
                          onClick={signIn}
                        >
                          Sign in
                        </Button>
                        <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link
                      to="/extra-pages/sign-up"
                      className="text-primary ml-2"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/extra-pages/recover-pswd" className="f-link">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
