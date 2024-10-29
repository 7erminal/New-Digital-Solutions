import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

const Solutions: React.FC = ()=>{
    return <section className="solutions-section">
        <Container fluid>
            <Row className="mb-4">
                <Col>
                    <div className="solutions-heading-box">
                        <span><h2>Solutions we deliver</h2></span>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Mobile Apps</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>e-commerce</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Data analytics</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>CRM</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Fleet management</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Financial management</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Asset management</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <div className="solution-card">
                        <h4>Marketing & Advertising</h4>
                        <span><Icon className="icon__" icon="proicons:arrow-down" height={30} /></span>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Solutions