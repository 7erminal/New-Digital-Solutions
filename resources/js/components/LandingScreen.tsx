import React from "react";
import { Carousel } from "react-bootstrap";

const LandingScreen: React.FC = ()=>{
    return <section className="landing-section">
            <Carousel pause={false} controls={false} indicators={false} prevIcon="" nextIcon="" style={{width: '100%', height: '100%'}} fade>
                <Carousel.Item className="custom-carousel-image-div">
                    <div  className="custom-carousel-image" style={{width: '100%', height: '100%', background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/assets/images/computer-2982270_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    <Carousel.Caption><h1 className="caption-carousel">This is a test</h1></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="custom-carousel-image-div">
                    <div  className="custom-carousel-image" style={{width: '100%', height: '100%', background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/assets/images/fern-821293_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    <Carousel.Caption><h1 className="caption-carousel">This is a test</h1></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="custom-carousel-image-div">
                    <div  className="custom-carousel-image" style={{width: '100%', height: '100%', background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/assets/images/butterfly-5546907_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    <Carousel.Caption><h1 className="caption-carousel">This is a test</h1></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="custom-carousel-image-div">
                    <div  className="custom-carousel-image" style={{width: '100%', height: '100%', background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/assets/images/desk-593327_1280.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    <Carousel.Caption><h1 className="caption-carousel">This is a test</h1></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </section>
}

export default LandingScreen