import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ProductTabSDetails from '../ProductTabSDetails/ProductTabSDetails';
import ProductMainInfo from '../ProductMainInfo/ProductMainInfo';
import ImageMagnify from '../ImageMagnify/ImageMagnify';
import './ProductDetails.css';

const ProductDetails = () => {

    return (
        <section className="product-details product-details-page mb-5 pb-5">
            <Container className="custom-container">
                <Row>
                    <Col lg={9}>
                        <Row>
                            <Col lg={5}>
                                <ImageMagnify />
                            </Col>
                            <Col lg={7}>
                                <ProductMainInfo />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="product-details-tab mt-5 mx-3">
                                    <ProductTabSDetails />
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={3}>
                        <div>
                            <div className="section-top d-flex justify-content-between">
                                <h2 className="section-title d-inline-block mb-0 position-relative">
                                    Latest Products
                                </h2>
                                <div className="d-flex align-items-center justify-content-center mt-1">
                                    <span className="green-small-outline-btn"><FontAwesomeIcon icon={faAngleLeft} /></span>
                                    <span className="green-small-outline-btn ms-2"><FontAwesomeIcon icon={faAngleRight} /></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDetails;