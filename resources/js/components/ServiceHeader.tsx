import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner } from 'react-scroll-parallax';

const ServiceHeader: React.FC = ()=>{
    const [serviceName, setServiceName] = useState('')
    useEffect(()=>{
        const sn = (document.getElementById("service-name") as HTMLInputElement).value

        setServiceName(sn)
    },[])
    return <section className="about-company-header-section">
        <Row>
            <Col xs={12} md={5} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div className="service-header-title"><h1>{ serviceName }</h1></div>
                {/* <p>Founded in 1989, ScienceSoft is a US-based provider of IT consulting and software development services. Clients respect us for unfailing budget and time control, cooperation transparency, and consistently high service quality.</p> */}
            </Col>
            <Col xs={12} md={7}>
                {/* <div className="service-header-image" style={{backgroundImage: "url('/assets/images/digitaltransformation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}> */}
                <div className="service-header-image">
                    <ParallaxBanner
                        layers={[{ image: '/assets/images/digitaltransformation.jpg', speed: -15 }]}
                        // className="aspect-[2/1]"
                        style={{height: '100%', width: '100%'}}
                    />
                </div>
            </Col>
        </Row>
</section>
}

export default ServiceHeader