import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import localImages from '../../shared/localImages';
import './CategoriesSlider.css';

const CategoriesSlider = () => {

    return (
        <section className="mt-3 mb-5 categories-slider">
            <Container className="custom-container">
                <Row>
                    <Col lg={3}>
                        <div className="cBanner-img">
                            <Image src={localImages.pearBanner} fluid />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="cBanner-img">
                            <Image src={localImages.pomegranateBanner} fluid />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="cBanner-img">
                            <Image src={localImages.fruitBanner} fluid />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="cBanner-img">
                            <Image src={localImages.appleBanner} fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CategoriesSlider;