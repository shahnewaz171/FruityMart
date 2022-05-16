import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaExchangeAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaFlag } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCart4, BsFillHeartFill } from "react-icons/bs";

const ProductMainInfo = () => {

    return (
        <div>
            <div className="singleProduct-info">
                <h4 className="product-name">Organic Lemon</h4>
                <div className="info-meta-1">
                    <ul className="list-inline mb-0">
                        <li>
                            <p className="product-stock fw-600">
                                <AiOutlineCheckCircle className="me-1" />
                                In Stock
                            </p>
                        </li>
                        <li>
                            <div className="ratings">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </li>
                        <li className="review-count">
                            <p>0 Review(s)</p>
                        </li>
                    </ul>
                </div>
                <div className="product-price">
                    <p className="title d-inline-block mb-0 me-4">Price:</p>
                    <p className="price d-inline-block mb-0">
                        <span>$55.00</span>
                        <span className="pd-oldPrice ms-1">$42.00</span>
                    </p>
                </div>
                <div className="count mt-3 mb-1">
                    <div className="qty">
                        <ul className="list-inline">
                            <li>
                                <span className="qt-minus">
                                    <FiMinus />
                                </span>
                            </li>
                            <li>
                                <span className="qtTotal">
                                    1
                                </span>
                            </li>
                            <li>
                                <span className="qt-plus">
                                    <FiPlus />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info-meta-2">
                    <ul className="list-inline">
                        <li>
                            <Link to="/" className="addCart-btn">
                                <BsCart4 className="me-1" /> Add to Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/carts" className="addCart-btn">
                                <BsCart4 className="me-1" /> Buy Now
                            </Link>
                        </li>
                        <li className="compare">
                            <Link to="/" className="green-small-btn">
                                <BsFillHeartFill />
                            </Link>
                        </li>
                        <li className="favorite">
                            <Link to="/" className="green-small-btn">
                                <FaExchangeAlt />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social-links pt-1">
                    <ul className="list-inline link-list mb-0">
                        <li>
                            <Link to="/" className="facebook">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="twitter">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="linekedin">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="pinterest">
                                <FaPinterestP />
                            </Link>
                        </li>
                    </ul>
                </div>
                <p className="p-sku mb-0 mt-1">
                    Product SKU:
                    <span className="fw-600 ms-1">FQF1054gjU</span>
                </p>
                <div className="report-area">
                    <Link to="a">
                        <FaFlag className="me-1" />
                        Report This Item
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductMainInfo;