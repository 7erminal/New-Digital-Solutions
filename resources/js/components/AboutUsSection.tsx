import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const AboutUsSection: React.FC = ()=>{
    return <section className="stats-section">
        <Container fluid>
            <Row className="experience-stats">
                <Col xs={4} sm={4} className="stats-col-right">
                    <div><h1>20</h1><h3>Years of expertise</h3></div>
                </Col>
                <Col xs={4} sm={4} className="stats-col-right">
                    <div><h1>20</h1><h3>Years of expertise</h3></div>
                </Col>
                <Col xs={4} sm={4} className="stats-col">
                    <div><h1>20</h1><h3>Years of expertise</h3></div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="about-section-text" style={{textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar felis eu felis porta dignissim. Sed et elit ultrices turpis accumsan consequat sodales varius urna. Pellentesque id sem purus. Donec id commodo neque. Morbi non aliquet ipsum, eu consectetur orci. Sed semper diam vel dui fringilla malesuada. Quisque ante velit, vestibulum vel viverra eu, ullamcorper eget tortor. Sed et pharetra ante, in mattis metus. Maecenas id leo sit amet augue viverra consequat eget vel felis. Aenean ornare augue maximus, laoreet sem et, sodales augue. Cras et posuere sem. Aenean nisi felis, iaculis at pellentesque a, faucibus vitae risus. Vivamus porta accumsan mattis. In eros justo, fringilla eu cursus a, maximus sed metus.</p>

                <p>Mauris sollicitudin elit vel quam cursus, vitae maximus mauris porta. Donec efficitur arcu eget arcu viverra, ut elementum neque consequat. Cras pellentesque scelerisque hendrerit. Nunc eget feugiat libero. Phasellus gravida, erat dapibus vehicula consequat, sem nunc facilisis massa, non bibendum metus libero quis sem. Vivamus interdum ex elit, consequat varius nunc tempus quis. Morbi fermentum porta velit, et consequat felis cursus sodales.</p>
            </Row>
        </Container>
        <Container>
            <Splide options={ { rewind: true, gap: '2px', width: '200', perPage: 5, breakpoints: {640: {perPage: 2,},} } } aria-label="React Splide Example">
                <SplideSlide className="clientsBox">
                    <img src="/assets/images/New-mtn-logo.jpg" alt="Image 1" width={180}/>
                </SplideSlide>
                <SplideSlide className="clientsBox">
                    <img src="/assets/images/Telecel.png" alt="Image 2" width={180}/>
                </SplideSlide>
            </Splide>
        </Container>
    </section>
}

export default AboutUsSection