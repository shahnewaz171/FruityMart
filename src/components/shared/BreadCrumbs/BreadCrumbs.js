import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './BreadCrumbs.css';

const BreadCrumbs = () => {

    return (
        <section className="breadcrumbs">
            <Container className="custom-container">
                <Row>
                    <Col lg={12}>
                        <ul className="pages list-inline d-flex flex-wrap mb-0">
                            <li>
                                <Link to="/a">
                                    Home
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/a">
                                    Vegetables
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/a">
                                    Fresh Vegetables
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/a">
                                    Test Organic Food Product Title Will be here one
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BreadCrumbs;