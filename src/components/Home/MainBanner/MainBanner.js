import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import localImages from '../../shared/localImages';
import './MainBanner.css';

const MainBanner = () => {
    const settings = {
        dots: true,
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
                                    <div className="header-banner-description banner-margin">
                                        <h4 className="fw-bold mb-sm-3 animate__animated slideInUp">Fresh Fruits</h4>
                                        <h2 className="fw-bold mb-sm-3 animate__animated slideInDown">Up to 40% Off</h2>
                                        <p className="animate__animated slideInRight">Buy the Best Organic Fruits for your Healthy Future.</p>
                                        <Link to="/a" className="btn mt-sm-3 text-uppercase hShop-btn">Shop now <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></Link>
                                    </div>
                                    <img src={localImages.bannerImg1} alt="banner1" />
                                    <div className="slider-progress a1" />
                                </div>
                                <div>
                                    <div className="header-banner-description banner-margin">
                                        <h4 className="fw-bold mb-sm-3 animate__animated slideInUp">Sessional Fruits</h4>
                                        <h2 className="fw-bold mb-sm-3 animate__animated slideInDown">Up to 20% Off</h2>
                                        <p className="animate__animated slideInDown">Buy the Best Organic Fruits for your Healthy Future.</p>
                                        <Link to="/a" className="btn mt-sm-3 text-uppercase hShop-btn">Shop now <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></Link>
                                    </div>
                                    <img src={localImages.bannerImg2} alt="banner2" />
                                    <div className="slider-progress a1" />
                                </div>
                                <div>
                                    <div className="header-banner-description banner3-margin">
                                        <h4 className="fw-bold mb-sm-3 animate__animated slideInUp">Others Fruits</h4>
                                        <h2 className="fw-bold mb-sm-3 animate__animated slideInDown">Up to 30% Off</h2>
                                        <p className="animate__animated slideInLeft">Buy the Best Organic Fruits for your Healthy Future.</p>
                                        <Link to="/a" className="btn mt-sm-3 text-uppercase hShop-btn">Shop now <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></Link>
                                    </div>
                                    <img src={localImages.bannerImg3} alt="banner3" />
                                    <div className="slider-progress a1" />
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