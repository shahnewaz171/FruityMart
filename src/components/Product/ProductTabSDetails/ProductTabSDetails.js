import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";

const ProductTabSDetails = () => {

    return (
        <>
            <div className="menu-tab-items">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="text-uppercase">Description</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="text-uppercase">Specifications</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Reviews(0)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Comments(0)</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac augue consectetur sapien mollis lobortis nec quis leo. Donec vitae nisl nisl. Integer ac aliquam neque, in hendrerit nisi. Vivamus enim ipsum, iaculis eget dui non, porttitor varius mi.
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Two 2
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="heading-area mb-3 mt-2">
                                        <h4 className="title">Ratings & Reviews</h4>
                                        <div className="rating-area ms-4">
                                            <div className="star">
                                                <span className="start-rating me-1">0.0</span>
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply-area">
                                        <div className="review-section">
                                            <p>No Review Found.</p>
                                        </div>
                                        <Row>
                                            <Col lg={12}>
                                                <br />
                                                <h5 className="fw-600 text-center">
                                                    <Link to="/a" className="login-btn me-2">
                                                        Login
                                                    </Link>
                                                    To Review
                                                </h5>
                                                <br />
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div className="comment-area mt-2">
                                        <Row>
                                            <Col lg={12}>
                                                <br />
                                                <h5 className="fw-600 text-center">
                                                    <Link to="/a" className="login-btn me-2">
                                                        Login
                                                    </Link>
                                                    To Comment
                                                </h5>
                                                <br />
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
};

export default ProductTabSDetails;