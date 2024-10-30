import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const Technologies: React.FC = ()=>{
    return <section className="technologies">
        <Container>
            <Row className="mb-4">
                <Col>
                    <div className="technologies-heading-box">
                        <span><h2>Improve and innovate with the latest trends</h2></span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Tabs
                            defaultActiveKey="bigData"
                            id="noanim-tab-example"
                            className="mb-3"
                            justify
                            >
                            <Tab eventKey="bigData" title={<span><Icon icon="eos-icons:neural-network" height={50} color="#FA8072" /> <h5>Big Data</h5></span>}>
                                <div className="tab-content my-4">
                                    <div className="mt-4">
                                    Tame your big data through robust solutions that empower data collection, storage, processing and analysis.
                                    </div>
                                    
                                    <h3 className="mt-4">SERVICES WE OFFER:</h3>
                                    
                                    <hr style={{height: '20px', width: '100px', color: "#FA8072"}} />
                                    <ul>
                                        <li>Consultation</li>
                                        <li>Data collection tool development</li>
                                        <li>Support</li>
                                        <li>Analysis and reporting</li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="monitoring" title={<span><Icon icon="basil:search-outline" height={50} color="#FA8072" /> <h5>Deep Monitoring</h5></span>}>
                                <div className="tab-content my-4">
                                    <div className="mt-4">
                                    Enhance your monitoring with our software
                                    </div>
                                    
                                    <h3 className="mt-4">TOOLS:</h3>
                                    
                                    <hr style={{height: '20px', width: '100px', color: "#FA8072"}} />
                                    <ul>
                                        <li>Kibana</li>
                                        <li>New Relic</li>
                                        <li>Dynatrace</li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="devOps" title={<span><Icon icon="basil:search-outline" height={50} color="#FA8072" /> <h5>DevOps</h5></span>}>
                                <div className="tab-content my-4">
                                    <div className="mt-4">
                                    Improve development by implementing devOps culture
                                    </div>
                                    
                                    <h3 className="mt-4">SERVICES WE OFFER:</h3>
                                    
                                    <hr style={{height: '20px', width: '100px', color: "#FA8072"}} />
                                    <ul>
                                        <li>Deployments</li>
                                        <li>CI/CD setups</li>
                                        <li>Security</li>
                                    </ul>
                                </div>
                            </Tab>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Technologies