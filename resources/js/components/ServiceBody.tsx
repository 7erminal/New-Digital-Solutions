import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ServiceBody: React.FC = ()=>{
    return <section className="service-body">
            <Container>
                <Row className="mt-4">
                    <Col>
                        <Row>
                            <Col>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet dignissim pulvinar. Duis egestas diam sit amet tortor cursus tempor. In finibus odio massa, non porta magna semper eget. Phasellus vitae dapibus quam. Aliquam erat volutpat. Sed et fringilla mi. Fusce non viverra nisl. Ut posuere at ante et accumsan.</p>

                                <p>Nam a facilisis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non nibh neque. Integer interdum turpis ac ultrices scelerisque. Sed at tempor odio. Sed hendrerit maximus porta. Suspendisse potenti. Morbi facilisis metus a tristique luctus. Aenean eget dolor mi. Nunc faucibus dolor ut massa faucibus, vitae sollicitudin nunc eleifend.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    </section>
}

export default ServiceBody