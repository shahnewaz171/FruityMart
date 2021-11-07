import React, { createRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductTabSDetails from '../ProductTabSDetails/ProductTabSDetails';
import ProductMainInfo from '../ProductMainInfo/ProductMainInfo';
import LatestProducts from '../LatestProducts/LatestProducts';
import Newarrivals from '../../Home/Newarrivals/Newarrivals';
import ImageMagnify from '../ImageMagnify/ImageMagnify';
import './ProductDetails.css';

const ProductDetails = () => {

    return (
        <>
            <section className="product-details product-details-page">
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
                            <LatestProducts />
                            <div className="mt-5">
                                a
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {
                <Newarrivals data={"Related Products" || ""} />
            }
        </>
    );
};

export default ProductDetails;