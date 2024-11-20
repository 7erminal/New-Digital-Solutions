import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { createRoot } from 'react-dom/client'
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: React.FC = ()=>{
    return <section className="footer">
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2 font-weight-bold">NEW DIGITAL SOLUTIONS</div>
                        {/* <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div> */}
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2"><Icon icon="ic:sharp-location-on" height={30} color="#FA8072" /> 300 North St<br/>Greater Accra, Ghana</div>
                        {/* <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div> */}
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <div className="p-2"><Icon icon="ic:outline-mail-outline" height={30} color="#FA8072" /> contact@gmail.com</div>
                        {/* <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div> */}
                    </Stack>
                </Col>
                {/* <Col>
                    <Stack gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </Col> */}
            </Row>
        </Container>
    </section>
}

if(document.getElementById('footer')){
    createRoot(document.getElementById('footer')!).render(<Footer />)
}