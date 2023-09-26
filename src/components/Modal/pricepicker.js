import React, { useState } from 'react';
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'

function PopUp(props) {
    const [custom, setCustom] = useState(0);
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={props.handleClose}>X</button>
                <Container>
                    <Row className='my-3'>
                        <Col md={12}>
                            <h5>{props.title}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}><button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(5)}>5 {"CA$"}</button></Col>
                        <Col md={4}><button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(10)}>👍10 {"CA$"}</button></Col>
                        <Col md={4}><button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(25)}>💖25 {"CA$"}</button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(50)}>😍50 {"CA$"}</button></Col>
                        <Col md={6}><button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(100)}>🚀100 {"CA$"}</button></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <button className='btn btn-block btn-rounded' onClick={() => props.handleChoose(250)}>🤯250 {"CA$"}</button>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col md={8}>
                            <input type={"number"} placeholder="Custom" className='input-rounded' value={custom} onChange={(e) => setCustom(e.target.value)}></input>
                        </Col>
                        <Col md={4}>
                            <button className='btn btn-rounded btn-block' onClick={() => props.handleChoose(custom)}>OK</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PopUp;