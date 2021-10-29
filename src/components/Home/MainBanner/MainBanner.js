import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap';
import localImages from '../../shared/localImages';
import './MainBanner.css';

const MainBanner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="mt-3 header-banner">
            <Container className="custom-container">
                <Row className="custom-row">
                    <Col lg={3} />
                    <Col lg={9} md={12} className="ps-lg-3">
                        <div className="header-banner-slider">
                            <Slider {...settings}>
                                <div>
                                    <div className="slider-progress a1" />
                                    <img src={localImages.bannerImg1} alt="banner1" />
                                </div>
                                <div>
                                    <div className="slider-progress" />
                                    <img src={localImages.bannerImg2} alt="banner2" />
                                </div>
                                <div>
                                    <div className="slider-progress" />
                                    <img src={localImages.bannerImg3} alt="banner3" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MainBanner;