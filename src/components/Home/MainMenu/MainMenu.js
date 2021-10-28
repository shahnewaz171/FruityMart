import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GiFruitTree, GiFruitBowl, GiCutLemon, GiOrange, GiPear, GiPeach, GiFruiting, GiKiwiFruit } from "react-icons/gi";
import { SiAdafruit } from "react-icons/si";
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="mainMenu-area mainMenu-border">
            <Container className="custom-container">
                <Row className="m-0 align-items-center mainMenu-area-inner">
                    <Col lg={3} md={6} className="categoryMenu-wrapper categories-menu remove-pad">
                        <div className="text-white categories-title active">
                            <h2>
                                <FaBars className="icon-1" />
                                <span className="ms-3">Categories</span>
                                <IoIosArrowDown className="float-end icon-2" />
                            </h2>
                        </div>

                        <div id="category-active" className="categories-menu-inner">
                            <ul className="list-inline">
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiFruitBowl className="category-icon" />
                                    <div className="d-flex justify-content-between align-items-center link-area">
                                       <span>Fruits</span>
                                        <span><IoIosArrowForward /></span>
                                    </div>
                                    <ul id="fruits" className="list-inline category-mega-menu cActive">
                                        <li>
                                            <Link to="/a">Sessional Fruits</Link>
                                        </li>
                                        <li>
                                            <Link to="/a">Fresh Fruits</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiFruitTree className="category-icon" />
                                    <div className="d-flex justify-content-between align-items-center link-area">
                                       <span>Mango</span>
                                        <span><IoIosArrowForward /></span>
                                    </div>
                                    <ul id="mango" className="list-inline category-mega-menu  cActive">
                                        <li>
                                            <Link to="/a">Bangladeshi Mango</Link>
                                        </li>
                                        <li>
                                            <Link to="/a">Other Countries</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiFruiting className="category-icon" />
                                    <div className="d-flex justify-content-between align-items-center link-area">
                                       <span>Papaya</span>
                                        <span><IoIosArrowForward /></span>
                                    </div>
                                    <ul id="papaya" className="list-inline category-mega-menu  cActive">
                                        <li>
                                            <Link to="/a">Bangladeshi Papaya</Link>
                                        </li>
                                        <li>
                                            <Link to="/a">Other Countries</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiKiwiFruit className="category-icon" />
                                    <div className="d-flex justify-content-between align-items-center link-area">
                                       <span>Guava</span>
                                        <span><IoIosArrowForward /></span>
                                    </div>
                                    <ul id="guava" className="list-inline category-mega-menu  cActive">
                                        <li>
                                            <Link to="/a">Bangladeshi Guava</Link>
                                        </li>
                                        <li>
                                            <Link to="/a">Other Countries</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <SiAdafruit className="category-icon" />
                                    <div className="link-area">
                                       <span>Pomegranate</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiCutLemon className="category-icon" />
                                    <div className="link-area">
                                       <span>Lemon</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiOrange className="category-icon" />
                                    <div className="link-area">
                                       <span>Sweet Orange</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiPeach className="category-icon" />
                                    <div className="link-area">
                                       <span>Peach Fruit</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiPear className="category-icon" />
                                    <div className="link-area">
                                       <span>Nashpati</span>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center position-relative category-item">
                                    <GiFruitBowl className="category-icon" />
                                    <div className="link-area">
                                       <span>Other Fruits</span>
                                    </div>
                                </li>
                            </ul>
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