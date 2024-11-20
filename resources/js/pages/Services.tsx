import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { createRoot } from 'react-dom/client';
import { useNavigate } from "react-router-dom";

const AllServicesPage: React.FC = () =>{
    // const navigate = useNavigate()
    const navigateService = (serviceid: string)=>{
        // navigate(`/view-service/${serviceid}`)
    }

    return <section className="services-page">
        <Container>
            <Row>
                <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <h1>Services</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/1" style={{backgroundColor: '#ebfffe'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Mobile App Development</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Do you need a mobile app to help with your business?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/2" style={{backgroundColor: '#fff1eb'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>E-commerce</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Need an e-commerce platform to manage your business?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/3" style={{backgroundColor: '#ebffed'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Data analytics</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Got data you need to analyse to be able to make important decisions?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/4" style={{backgroundColor: '#fdffeb'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Customer Relation Management</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Do you need a CRM tool to manage customer interaction?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/5" style={{backgroundColor: '#ebedff'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Fleet management</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Need an application to manage your fleet?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/6" style={{backgroundColor: '#ffebf0'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Financial management</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Need an application to manage your finances?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/7" style={{backgroundColor: '#f3f3f3'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Asset management</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Need an application to manage your assets?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <a className="service-slab" href="/view-service/8" style={{backgroundColor: '#f6ebff'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Marketing & Advertising</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <p>Need to get your product out there?</p>
                            </Row>
                        </Container>
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
}

if(document.getElementById('services')){
    createRoot(document.getElementById('services')!).render(<AllServicesPage />)
}