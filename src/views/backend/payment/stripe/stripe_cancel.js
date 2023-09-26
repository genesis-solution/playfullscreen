import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Session from 'supertokens-auth-react/recipe/session';
import { useHistory } from "react-router-dom";

const StripeCancel = (props) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const history = useHistory();

    const gotoHome = () => {
        history.push('/');
    }

    useEffect(() => {
        (async () => {
            if (await Session.doesSessionExist()) {
                let userId = await Session.getUserId();
                let jwt = (await Session.getAccessTokenPayloadSecurely()).jwt;
                console.log(userId, jwt)
            }
        })();
    }, []);

    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50">  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                <h2 className="title">Stripe Checkout Canceled.</h2>
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <Row className="contact-detail text-center">
                                <Col md="4">
                                    
                                </Col>
                                <Col md="4">
                                    <div className="iq-contact-list" data-element_type="column">
                                        <div className="icon-box">
                                            <span className="icon-svg icon-svg d-flex justify-content-center">
                                                <Button id="submit" name="submit" type="submit" defaultValue="Send" variant="hover iq-button" onClick={gotoHome()}>
                                                    <span className="iq-btn-text-holder">Go to Home</span>
                                                    <span className="iq-btn-icon-holder">
                                                        <i aria-hidden="true" className="ion ion-home"></i>
                                                    </span>
                                                    <br/>
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
export default StripeCancel;