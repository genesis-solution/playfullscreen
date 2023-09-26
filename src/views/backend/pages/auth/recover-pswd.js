import React,{useState,useEffect} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useHistory ,Link} from 'react-router-dom'

// rtl 
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {rtlModeAction, getRtlMode} from '../../../../store/mode/rtlmode'


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

const RecoverPswd = (props) => {

    let history = useHistory()

    return (
        <>
            <section className="sign-in-page">
                <Container>
                    <Row className="row justify-content-center align-items-center height-self-center">
                        <Col lg="5" md="12" className="align-self-center">
                            <div className="sign-user_card ">                    
                                <div className="sign-in-page-data">
                                    <div className="sign-in-from w-100 m-auto">
                                        <h3 className="mb-3 text-center">Reset Password</h3>
                                        <p className="text-body">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                        <Form className="mt-4">
                                            <div className="form-group">                                 
                                                <input type="email" className="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" autoComplete="off" required/>
                                            </div>                           
                                            <div className="sign-info">
                                                <Button className="btn btn-hover btn-primary1" onClick={() => history.push("/extra-pages/login")}>Reset</Button>                                                            
                                            </div>                                       
                                        </Form>
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

export default  connect(mapStateToProps, mapDispatchToProps)(RecoverPswd)