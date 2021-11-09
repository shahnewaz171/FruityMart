import React from 'react';
import { Col, Container, Image, Row, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import localImages from '../../shared/localImages';

const PopularProducts = () => {

    return (
        <section className="pt-2 mb-4 popular-products">
            <Container className="custom-container">
                <div className="section-top mb-3">
                    <h2 className="section-title d-inline-block mb-0 position-relative">
                        Popular Products
                    </h2>
                </div>
                <div className="">
                    <Row className="px-2">
                        {[1, 2, 3, 4, 5, 6].map((i, data) => {
                            return (
                                <Col key={i} lg={4} md={6} className="p-0">
                                    <div className="product-wrapper">
                                        <div className="product-info d-flex ">
                                            <div className="left-area">
                                                <div className="product-sticker">
                                                    <span className="label-new mb-1">New</span>
                                                    <span className="label-sale">-10%</span>
                                                </div>
                                                <Link to="/a" className="product-img">
                                                    <Image src={localImages.popularProductImg1} fluid />
                                                </Link>
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
                                                </div>
                                            </div>
                                            <div className="right-area">
                                                <p className="category-name">Fruits</p>
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
                                                <h5 className="item-name fw-bolder pointer">Organic Lemon</h5>
                                                <h4 className="context-cursor">
                                                    <span className="price fw-bolder">$55.00</span>
                                                    <span className="pd-oldPrice ms-1">$42.00</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default PopularProducts;