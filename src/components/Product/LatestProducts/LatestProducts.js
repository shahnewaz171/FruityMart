import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import { FaStar, FaRandom } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FiHeart } from "react-icons/fi";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import localImages from '../../shared/localImages';

const LatestProducts = () => {
    const customSlider = createRef();

    const settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
    };

    const gotoNext = () => {
        customSlider.current.slickNext();
    }
    const gotoPrev = () => {
        customSlider.current.slickPrev();
    }

    return (
        <>
            <div className="latest-pd-info">
                <div className="section-top d-flex justify-content-between mb-3">
                    <h2 className="section-title d-inline-block mb-0 position-relative">
                        Latest Products
                    </h2>
                    <div className="d-flex align-items-center justify-content-center mt-1">
                        <span onClick={gotoPrev} className="green-small-outline-btn"><FontAwesomeIcon icon={faAngleLeft} /></span>
                        <span onClick={gotoNext} className="green-small-outline-btn ms-2"><FontAwesomeIcon icon={faAngleRight} /></span>
                    </div>
                </div>
                <div className="popular-products">
                    <div className="product-wrapper">
                        <Slider {...settings} ref={customSlider} >
                            {[...Array(3)].map((item, i) => {
                                return (
                                    <div key={i} className="product-info d-flex mb-3">
                                        <div className="left-area">
                                            <Link to="/a" className="product-img">
                                                <Image src={localImages.popularProductImg1} fluid />
                                            </Link>
                                        </div>
                                        <div className="right-area">
                                            <h5 className="item-name fw-600 pointer">Organic Lemon</h5>
                                            <div className="starts mb-2">
                                                <span>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </span>
                                            </div>
                                            <h4 className="context-cursor">
                                                <span className="price fw-bolder">$55.00</span>
                                                <span className="pd-oldPrice ms-1">$42.00</span>
                                            </h4>
                                            <ul className="list-inline mb-0 action-meta">
                                                <li>
                                                    <Link to="/a" className="green-small-btn">
                                                        <FiHeart />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/a" className="green-small-btn">
                                                        <RiShoppingBasket2Fill />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/a" className="green-small-btn">
                                                        <FaRandom />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestProducts;