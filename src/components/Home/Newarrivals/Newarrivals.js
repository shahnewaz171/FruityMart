import React, { createRef } from 'react';
import { Col, Container, Image, Row, ProgressBar, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import Slider from "react-slick";
import localImages from '../../shared/localImages';
import './Newarrivals.css';

const Newarrivals = () => {
    const customSlider = createRef();

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const gotoNext = () => {
        customSlider.current.slickNext();
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev();
    }

    return (
        <section className="newArrivals-section mt-4 pt-2">
            <Container className="custom-container">
                <div className="section-top d-flex justify-content-between">
                    <h2 className="section-title d-inline-block mb-0 position-relative">
                        New Arrivals
                    </h2>
                    <div className="d-flex align-items-center justify-content-center me-3 mt-1">
                        <span onClick={gotoPrev} className="green-small-btn"><FontAwesomeIcon icon={faAngleLeft} /></span>
                        <span onClick={gotoNext} className="green-small-btn ms-2"><FontAwesomeIcon icon={faAngleRight} /></span>
                    </div>
                </div>

                <div className="mb-5 pb-5">
                    <Slider {...settings} ref={customSlider} >
                        <div className="d">
                            <div className="product-wrapper">
                                <div className="product-info">
                                    <div className="product-img-container mb-3">
                                        <div className="product-img product-border-bottom">
                                            <Link to="/a">
                                                <Image src={localImages.lemon} fluid />
                                            </Link>
                                        </div>
                                        <div className="product-action d-flex justify-content-center align-items-center">
                                            <div className="add-wish">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Add to Wishlist</Tooltip>}
                                                >
                                                    <Button className="action-cart toWish">
                                                        <AiOutlineHeart />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="actions-cart">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Quick View</Tooltip>}
                                                >
                                                    <Button className="action-cart toCart">
                                                        <AiOutlineShopping />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="link-view">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Compare</Tooltip>}
                                                >
                                                    <Button className="action-cart quickView">
                                                        <MdCompareArrows />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="category-name">Fruits</p>
                                        <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                        <div className="starts mb-2">
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            <span className="ms-1 custom-text-color">(1 review)</span>
                                        </div>
                                        <h4 className="price fw-bolder context-cursor">$55.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-wrapper">
                                <div className="product-info">
                                    <div className="product-img-container mb-3">
                                        <div className="product-img">
                                            <Link to="/a">
                                                <Image src={localImages.lemon} fluid />
                                            </Link>
                                        </div>
                                        <div className="product-action d-flex justify-content-center align-items-center">
                                            <div className="add-wish">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Add to Wishlist</Tooltip>}
                                                >
                                                    <Button className="action-cart toWish">
                                                        <AiOutlineHeart />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="actions-cart">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Quick View</Tooltip>}
                                                >
                                                    <Button className="action-cart toCart">
                                                        <AiOutlineShopping />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="link-view">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Compare</Tooltip>}
                                                >
                                                    <Button className="action-cart quickView">
                                                        <MdCompareArrows />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="category-name">Fruits</p>
                                        <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                        <div className="starts mb-2">
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            <span className="ms-1 custom-text-color">(1 review)</span>
                                        </div>
                                        <h4 className="price fw-bolder context-cursor">$55.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-wrapper">
                                <div className="product-info">
                                    <div className="product-img-container mb-3">
                                        <div className="product-img">
                                            <Link to="/a">
                                                <Image src={localImages.lemon} fluid />
                                            </Link>
                                        </div>
                                        <div className="product-action d-flex justify-content-center align-items-center">
                                            <div className="add-wish">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Add to Wishlist</Tooltip>}
                                                >
                                                    <Button className="action-cart toWish">
                                                        <AiOutlineHeart />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="actions-cart">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Quick View</Tooltip>}
                                                >
                                                    <Button className="action-cart toCart">
                                                        <AiOutlineShopping />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="link-view">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Compare</Tooltip>}
                                                >
                                                    <Button className="action-cart quickView">
                                                        <MdCompareArrows />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="category-name">Fruits</p>
                                        <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                        <div className="starts mb-2">
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            <span className="ms-1 custom-text-color">(1 review)</span>
                                        </div>
                                        <h4 className="price fw-bolder context-cursor">$55.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-wrapper">
                                <div className="product-info">
                                    <div className="product-img-container mb-3">
                                        <div className="product-img">
                                            <Link to="/a">
                                                <Image src={localImages.lemon} fluid />
                                            </Link>
                                        </div>
                                        <div className="product-action d-flex justify-content-center align-items-center">
                                            <div className="add-wish">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Add to Wishlist</Tooltip>}
                                                >
                                                    <Button className="action-cart toWish">
                                                        <AiOutlineHeart />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="actions-cart">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Quick View</Tooltip>}
                                                >
                                                    <Button className="action-cart toCart">
                                                        <AiOutlineShopping />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="link-view">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Compare</Tooltip>}
                                                >
                                                    <Button className="action-cart quickView">
                                                        <MdCompareArrows />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="category-name">Fruits</p>
                                        <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                        <div className="starts mb-2">
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            <span className="ms-1 custom-text-color">(1 review)</span>
                                        </div>
                                        <h4 className="price fw-bolder context-cursor">$55.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-wrapper">
                                <div className="product-info">
                                    <div className="product-img-container mb-3">
                                        <div className="product-img">
                                            <Link to="/a">
                                                <Image src={localImages.lemon} fluid />
                                            </Link>
                                        </div>
                                        <div className="product-action d-flex justify-content-center align-items-center">
                                            <div className="add-wish">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Add to Wishlist</Tooltip>}
                                                >
                                                    <Button className="action-cart toWish">
                                                        <AiOutlineHeart />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="actions-cart">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Quick View</Tooltip>}
                                                >
                                                    <Button className="action-cart toCart">
                                                        <AiOutlineShopping />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="link-view">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 100, hide: 100 }}
                                                    overlay={<Tooltip id="button-tooltip-2">Compare</Tooltip>}
                                                >
                                                    <Button className="action-cart quickView">
                                                        <MdCompareArrows />
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <p className="category-name">Fruits</p>
                                        <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                        <div className="starts mb-2">
                                            <span>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                            <span className="ms-1 custom-text-color">(1 review)</span>
                                        </div>
                                        <h4 className="price fw-bolder context-cursor">$55.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default Newarrivals;