import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer: React.FC = ()=>{
    return <section className="footer">
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Footer