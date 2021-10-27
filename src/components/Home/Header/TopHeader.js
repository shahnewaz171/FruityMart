import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdWifiCalling, MdOutlineLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiTruck } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const TopHeader = () => {

    return (
        <section className="top-header">
            <Container className="custom-container">
                <Row>
                    <Col lg={12} className="remove-pad">
                        <div className="content">
                            <div className="left-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li className="ps-0 hide">
                                        <MdWifiCalling />
                                        <span className="ms-1">(+880)1782861044</span>
                                    </li>
                                    <li>
                                        <CgMail />
                                        <span className="ms-1">support@fruityMart.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-content">
                                <ul className="list-inline d-flex align-items-center m-0">
                                    <li className="hide">
                                        <MdOutlineLocationOn />
                                        <span className="ms-1">Store Location</span>
                                    </li>
                                    <li className="hide">
                                        <FiTruck />
                                        <span className="ms-1">Track Your Order</span>
                                    </li>
                                    <li className="pe-md-0">
                                        <AiOutlineUser />
                                        <span className="ms-1">Register or Sign in</span>
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