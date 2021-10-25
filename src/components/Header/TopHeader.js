import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopHeader = () => {

    return (
        <section className="top-header">
            <Container className="custom-container">
                <Row>
                    <Col lg={12} className="remove-pad">
                        <div className="content">
                            <div className="left-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li>+8801782861044</li>
                                    <li>support@fruityMart.com</li>
                                </ul>
                            </div>
                            <div className="right-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li>Store Location</li>
                                    <li>Track Your Order</li>
                                    <li>Register or Sign in</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TopHeader;