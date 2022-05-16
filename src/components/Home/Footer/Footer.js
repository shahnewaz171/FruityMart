import React, { useState } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import Button from '@restart/ui/esm/Button';
import localImages from '../../shared/localImages';
import './Footer.css';

const Footer = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <footer className="footer-section mt-5">
            <div className="footer-inner py-5">
                <Container className="custom-container">
                    <Row>
                        <Col lg={3} md={4} className="col-6">
                            <div className="logo-footer d-flex align-items-center mb-3">
                                <Image src={localImages.footerLogo} fluid />
                                <span className="ms-1 logo-text">FruityMart</span>
                            </div>
                            <ul className="list-inline mb-4">
                                <li>
                                    <address>Dhanmondhi, Dhaka, Bangladesh</address>
                                </li>
                                <li>
                                    Phone: <span>+(01) 782861044</span>
                                </li>
                                <li>
                                    Email: <span>support@fruityMart.com</span>
                                </li>
                            </ul>
                            <div className="social-link">
                                <ul className="social-item d-flex list-inline">
                                    <li className="mb-0">
                                        <Link to="https://www.facebook.com/MuhammadShahnewaz601/" className="item">
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li className="mb-0">
                                        <Link to="/" className="item">
                                            <FaYoutube />
                                        </Link>
                                    </li>
                                    <li className="mb-0">
                                        <Link to="https://github.com/shahnewaz171" className="item">
                                            <FaGithub />
                                        </Link>
                                    </li>
                                    <li className="mb-0">
                                        <Link to="/" className="item">
                                            <FaTwitter />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={4} className="col-6">
                            <h3 className="ft-title mb-4 mt-3">My Account</h3>
                            <ul className="list-inline mb-4">
                                <li>
                                    <span>Personal info</span>
                                </li>
                                <li>
                                    <span>Orders</span>
                                </li>
                                <li>
                                    <span>Credit slips</span>
                                </li>
                                <li>
                                    <span>Addresses</span>
                                </li>
                                <li>
                                    <span>My wishlists</span>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} className="col-6">
                            <h3 className="ft-title mb-4 mt-3">Help Center</h3>
                            <ul className="list-inline mb-4">
                                <li>
                                    <span>Delivery</span>
                                </li>
                                <li>
                                    <span>Secure payment</span>
                                </li>
                                <li>
                                    <span>Contact us</span>
                                </li>
                                <li>
                                    <span>Stores</span>
                                </li>
                                <li>
                                    <span>My account</span>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} className="col-6">
                            <h3 className="ft-title mb-4 mt-3">About Us</h3>
                            <ul className="list-inline mb-4">
                                <li>
                                    <span>About us</span>
                                </li>
                                <li>
                                    <span>Secure payment</span>
                                </li>
                                <li>
                                    <span>Sitemap</span>
                                </li>
                                <li>
                                    <span>Stores</span>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className="col-10">
                            <h3 className="ft-title mb-4 mt-3">Our Newsletter</h3>
                            <div className="newsletter-wrapper">
                                <h6 className="mb-3">
                                    Get E-mail updates about our latest shop
                                    <br /> and special offers.
                                </h6>
                                <div className="block-subscribe">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group controlId="validationCustom03">
                                            <Form.Control type="text" placeholder="Enter your email" required />
                                            <Form.Control.Feedback type="invalid">
                                                This is a required field.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button type="submit" className="mt-4 text-uppercase">Subscribe</Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bot py-3">
                <Container className="custom-container">
                    <div className="d-flex align-items-center justify-content-center">
                        <p> &copy; 2021 by <span className="fw-bolder">Muhammad Shahnewaz</span> | All rights reserved</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;