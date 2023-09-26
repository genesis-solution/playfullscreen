import React from 'react'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import  Card from '../../../../components/Card'

const TermsOfUse = () => {
    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(/images/terms-banner.jpg)`}}>  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                <h2 className="title">Terms of Services</h2>                                
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <div className="iq-privacy-policy">
                                <div className="mb-3">
                                    <h4 className="mb-3">1. What Personal Information About Users Does streamit Collect?</h4>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p><br/>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-3">2. Cookies and Web Beacons</h4>
                                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed.</p>
                                    <p className="mb-0">Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p><br/>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-3">3. Third Party Payment Gateway – Financial Information</h4>
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p><br/>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-3">4. Disclosure Children’s Privacy</h4>
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p><br/>
                                </div>
                                <div className="mb-0">
                                    <h4 className="mb-3">5. Data transfer, storage &amp; processing globally</h4>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default TermsOfUse;