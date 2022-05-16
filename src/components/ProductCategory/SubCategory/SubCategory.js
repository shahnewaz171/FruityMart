import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Button, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import Slider from "react-slick";
import LatestProducts from '../../Product/LatestProducts/LatestProducts';
import '../ProductCategory.css';
import localImages from '../../shared/localImages';

const SubCategory = () => {

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

    return (
        <section className="sub-category my-5 product-details-page">
            <Container className="custom-container">
                <Row>
                    <Col lg={3}>
                        <div className="left-area">
                            <div className="filter-result-area">
                                <div className="header-area">
                                    <h5 className="fw-600 mb-0">Filter Results By</h5>
                                </div>
                                <div className="body-area mb-4">
                                    <ul className="list-inline mb-0">
                                        <li>
                                            <Link to="/" className="content">
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                                                Fruits
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="content">
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                                                Vegetables
                                            </Link>
                                            <div className="sub-content ms-3 mt-2">
                                                <Link to="/" className="content">
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                    Fresh Vegetables
                                                </Link>
                                            </div>
                                            <div className="sub-content ms-3 mt-2">
                                                <Link to="/" className="content">
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                    Frozen Vegetables
                                                </Link>
                                            </div>
                                            <div className="sub-content ms-3 mt-2">
                                                <Link to="/" className="content">
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                    Sessional Vegetables
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/" className="content">
                                                <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                                                Frozen Food
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <LatestProducts />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div>
                            <div className="item-filter d-flex justify-content-end text-end">
                                <ul className="list-inline d-inline-block">
                                    <li className="d-inline-block">
                                        <p className="d-inline-block me-2">Sort By :</p>
                                        <select name="sort" id="sortby" className="sort-item" >
                                            <option value="a">Latest Product</option>
                                            <option value="a">Oldest Product</option>
                                            <option value="a">Lowest Price</option>
                                            <option value="a">Highest Price</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-item-area">
                                <Row className="m-0">
                                    {[...new Array(6)].map((item, i) => {
                                        return (
                                            <Col lg={3} md={4} key={i} className="col-6 p-0" >
                                                <div className="product-wrapper">
                                                    <div className="product-info deg180">
                                                        <div className="product-img-container mb-3">
                                                            <div className="product-img product-border-bottom">
                                                                <Link to="/">
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
                                                            <div className="stars mb-2">
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
                                            </Col>
                                        )
                                    })}
                                </Row>
                                <div className="mt-5 pt-3 pagination d-block text-center">
                                    <ul className="list-inline mb-0">
                                        <li>
                                            <Link to="/" className="prev page-numbers">
                                                <BsChevronLeft className="fw-700" />
                                                Previous Page
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="prev page-numbers">
                                                1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="page-numbers current">
                                                2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="page-numbers">
                                                3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="page-numbers">
                                                4
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="page-numbers">...</span>
                                        </li>
                                        <li>
                                            <Link to="/" className="next page-numbers">
                                                Next Page
                                                <BsChevronRight className="fw-700" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SubCategory;