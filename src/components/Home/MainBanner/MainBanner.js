import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MainBanner.css';

const MainBanner = () => {

    return (
        <section>
            <Container className="custom-container">
                <Row className="custom-row">
                    <Col lg={3} />
                    <Col lg={9} md={12}>
                        <h3>adsdasdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MainBanner;