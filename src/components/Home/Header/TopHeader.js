import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdWifiCalling, MdOutlineLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiTruck } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

const TopHeader = () => {

    return (
        <section className="top-header">
            <Container className="custom-container">
                <Row className="m-lg-0">
                    <Col lg={12} className="remove-pad">
                        <div className="content">
                            <div className="left-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li className="ps-0 hide">
                                        <Link to="/a">
                                            <MdWifiCalling />
                                            <span className="ms-1">(+880)1782861044</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/a">
                                            <CgMail />
                                            <span className="ms-1">support@fruityMart.com</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li className="hide">
                                        <Link to="/a">
                                            <MdOutlineLocationOn />
                                            <span className="ms-1">Store Location</span>
                                        </Link>
                                    </li>
                                    <li className="hide">
                                        <Link to="/a">
                                            <FiTruck />
                                            <span className="ms-1">Track Your Order</span>
                                        </Link>
                                    </li>
                                    <li className="pe-md-0">
                                    <AiOutlineUser />
                                        <Link to="/a">
                                            <span className="mx-1">Register </span>
                                        </Link>
                                            <span className="customer-or">or</span>
                                        <Link to="/a">
                                            <span className="ms-1">Sign in</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TopHeader;