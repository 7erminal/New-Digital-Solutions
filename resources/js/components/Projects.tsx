import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Projects: React.FC = ()=>{
    return <section className="projects">
        <Container fluid>
            <Row className="mb-4">
                <Col>
                    <div className="projects-heading-box">
                        <span><h2>Success Stories</h2></span>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Container>
                        <Row>
                            <Col xs={6} className="mt-4">
                                <div className="project-card" >
                                    <div className="project-card-img" style={{backgroundImage: `url('/assets/images/projectImage1.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    <div className="mt-4" style={{paddingLeft: '20px'}}>
                                        <h3>Website for bulk sms</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} className="mt-4">
                                <div className="project-card">
                                    <div className="project-card-img" style={{backgroundImage: `url('/assets/images/projectImage2.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    <div className="mt-4" style={{paddingLeft: '20px'}}>
                                        <h3>Website for bulk sms</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} className="mt-4">
                                <div className="project-card">
                                    <div className="project-card-img" style={{backgroundImage: `url('/assets/images/projectImage3.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    <div className="mt-4" style={{paddingLeft: '20px'}}>
                                        <h3>Website for bulk sms</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} className="mt-4">
                                <div className="project-card">
                                    <div className="project-card-img" style={{backgroundImage: `url('/assets/images/projectImage4.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    <div className="mt-4" style={{paddingLeft: '20px'}}>
                                        <h3>Website for bulk sms</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Projects