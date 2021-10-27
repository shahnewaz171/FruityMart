import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="mainMenu-area mainMenu-border">
            <Container className="custom-container">
                <Row className="m-0 align-items-center mainMenu-area-inner">
                    <Col lg={3} md={6} className="categoryMenu-wrapper remove-pad">
                        <div className="text-white categories-title">
                            <h2>
                                <FaBars className="icon-1" />
                                <span className="ms-3">Categories</span>
                                <IoIosArrowDown className="float-end icon-2" />
                            </h2>
                        </div>
                    </Col>
                    <Col lg={9} md={6} className="mainMenu-wrapper remove-pad">
                        <nav className="main-nav">
                            <div className="full-container">
                                <div className="nav-header">
                                    <div className="main-nav-toggle toggle-bar">
                                        <FaBars onClick={() => setToggle(!toggle)} className="custom-greenColor" />
                                    </div>
                                </div>
                                <div className={"wrap-nav-list "+ (toggle ? "d-block" : "")}>
                                    <ul className="list-inline nav-list">
                                        <li>
                                            <Link to="/a">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/a">
                                                Fag
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/a">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/a">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/a" className="custom-greenColor">
                                                Track Order
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainMenu;