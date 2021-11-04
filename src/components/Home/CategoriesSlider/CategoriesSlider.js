import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { IoArrowForwardCircle } from "react-icons/io5";
import localImages from '../../shared/localImages';
import './CategoriesSlider.css';

const CategoriesSlider = () => {

    return (
        <section className="mt-4 categories-slider">
            <Container className="custom-container">
                <Row>
                    <Col lg={3} md={6} className="col-6 mb-3" >
                        <div className="hdr-banner">
                            <Image src={localImages.pomegranateBanner} fluid />
                            <div className="hdr-description">
                                <p className="text-uppercase m-0">100% natural</p>
                                <h2>Pomegranate</h2>
                                <Link to="/a">
                                    <span className="text-uppercase">Shop now</span>
                                    <span><IoArrowForwardCircle /></span>
                                </Link>
                            </div>
                            <div className="overlay" />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="col-6 mb-3" >
                        <div className="hdr-banner">
                            <Image src={localImages.pearBanner} fluid />
                            <div className="hdr-description">
                                <p className="text-uppercase m-0">100% natural</p>
                                <h2>Pear</h2>
                                <Link to="/a">
                                    <span className="text-uppercase">Shop now</span>
                                    <span><IoArrowForwardCircle /></span>
                                </Link>
                            </div>
                            <div className="overlay" />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="col-6 mb-3" >
                        <div className="hdr-banner">
                            <Image src={localImages.fruitBanner} fluid />
                            <div className="hdr-description">
                                <p className="text-uppercase m-0">100% natural</p>
                                <h2>Fruits</h2>
                                <Link to="/a">
                                    <span className="text-uppercase">Shop now</span>
                                    <span><IoArrowForwardCircle /></span>
                                </Link>
                            </div>
                            <div className="overlay" />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="col-6 mb-3" >
                        <div className="hdr-banner">
                            <Image src={localImages.appleBanner} fluid />
                            <div className="hdr-description">
                                <p className="text-uppercase m-0">100% natural</p>
                                <h2>Apple</h2>
                                <Link to="/a">
                                    <span className="text-uppercase">Shop now</span>
                                    <span><IoArrowForwardCircle /></span>
                                </Link>
                            </div>
                            <div className="overlay" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CategoriesSlider;