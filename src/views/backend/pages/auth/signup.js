import React,{useState, useEffect}  from 'react'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'


// rtl 
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {rtlModeAction, getRtlMode} from '../../../../store/mode/rtlmode'

import { SignInUp } from 'supertokens-auth-react/recipe/passwordless';

import logo from '../../../../assets/images/logo.png';


const mapStateToProps = (state) => {
    return {
        rtlMode: getRtlMode(state)
    };


}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            rtlModeAction
        },
        dispatch
    )
})


const SignUp = (props) => {

    let history = useHistory()

    const signUpAction = (e) => {
        e.preventDefault();  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        props.signInRequest({ email, password });
    }
    
    return (
        <>
            <section className="sign-in-page">
                <Container>
                    <Row className="justify-content-center align-items-center height-self-center">
                        <Col lg="6" md="8" sm="12" className="align-self-center">
                            <div className="sign-user_card ">                    
                                <div className="sign-in-page-data">
                                    <div className="sign-in-from w-100 m-auto">
                                        <img className="img-signup logo" src={logo} alt="playfullscreen" /> 
                                        <SignInUp></SignInUp>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)