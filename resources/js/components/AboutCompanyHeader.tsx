import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const AboutCompanyHeader: React.FC = ()=>{
    return <section className="about-company-header-section">
        <Container>
            <Row>
                <Col xs={12} md={5} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <h1>About ScienceSoft –
                Your Partner for Project Success</h1>
                    <p>Founded in 1989, ScienceSoft is a US-based provider of IT consulting and software development services. Clients respect us for unfailing budget and time control, cooperation transparency, and consistently high service quality.</p>
                </Col>
                <Col xs={12} md={7}>
                    <div className="about-company-carousel">
                        <Carousel pause={false} controls={false} style={{width: '100%', height: '100%'}}>
                            <Carousel.Item className="custom-company-carousel-image" style={{width: '100%', height: '100%', background: `url("/assets/images/digitaltransformation.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                            </Carousel.Item>
                            <Carousel.Item className="custom-company-carousel-image" style={{width: '100%', height: '100%', background: `url("/assets/images/laptop-1839876_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                            </Carousel.Item>
                            <Carousel.Item className="custom-company-carousel-image" style={{width: '100%', height: '100%', background: `url("/assets/images/transformation-3753443_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default AboutCompanyHeader