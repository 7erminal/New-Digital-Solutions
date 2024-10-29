import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

const WhatWeOfferSection: React.FC = ()=>{
    return <section className="what-we-offer-section">
        <Container>
            <Row className="mb-4">
                <Col>
                    <div className="technologies-heading-box">
                        <span><h2>What we offer</h2></span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <div className="what-we-offer-box">
                        <div className="what-we-offer-menu">
                            <ListGroup variant="flush" className="what-we-offer-list">
                                <ListGroup.Item variant="primary">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item variant="primary">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item variant="primary">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item variant="primary">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item variant="primary">Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum odio faucibus urna porta sagittis. Aliquam sagittis mauris sed sem semper, eu ultricies ligula hendrerit. Sed placerat, dolor ut fringilla pharetra, tortor nunc congue tortor, sed volutpat elit nisi ac magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec fringilla quam, eu euismod arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras porta volutpat urna sed fringilla. Donec sagittis leo at nibh convallis feugiat. Pellentesque non imperdiet libero. Donec aliquet mattis tortor vel mattis. Aenean aliquam neque ipsum, a maximus est pulvinar a. Vestibulum eget tempus nulla. Proin nunc ante, mattis vitae augue quis, ornare dapibus odio. Donec sollicitudin purus non diam pulvinar, eget hendrerit magna aliquam.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="gy-0">
                <Col className="service-card software-card">
                    <div className="software-fill">
                        <Icon icon="ri:microsoft-fill" height={60} color="#7e9799" />
                    </div>
                    <span className="mt-2">Software development</span>
                </Col>
                <Col className="service-card bank-card">
                    <div className="bank-fill">
                        <Icon icon="mingcute:bank-fill" height={60} color="#b8b0a8" />
                    </div>
                    <span className="mt-2">Banking & Investment</span>
                </Col>
                <Col className="service-card payment-card">
                    <div className="payment-fill">
                        <Icon icon="ri:secure-payment-fill" height={60} color="#8eab8f" />
                    </div>
                    <span className="mt-2">Payments</span>
                </Col>
                <Col className="service-card card-card">
                    <div className="card-fill">
                        <Icon icon="ri:bar-chart-fill" height={60} color="#8e99ab" />
                    </div>
                    <span className="mt-2">Monitoring & Statistics</span>
                </Col>
            </Row>
        </Container>
    </section>
}

export default WhatWeOfferSection