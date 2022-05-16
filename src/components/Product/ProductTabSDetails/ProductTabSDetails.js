import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, FloatingLabel, Form, Nav, Row, Tab, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import StarRatings from 'react-star-ratings';

const ProductTabSDetails = () => {
    const [ratings, setRatings] = useState({ rating: 0 });

    const changeRating = (rating) => {
        console.log(rating)
        setRatings({
            rating: rating
        })
    }

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
                                    Integer ac aliquam neque, in hendrerit nisi. Vivamus enim ipsum, iaculis eget dui non, porttitor varius mi.
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
                                            {/* <div className="mb-3">
                                                <div className="stars">
                                                    <span>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </span>
                                                </div>
                                                <p className="reviewer-name fw-600 mb-2">by Shahnewaz</p>
                                                <p className="description fw-600 mb-2">the product quality was good. the print was excellent. it is little weird that the size of this particular item is not matched with regular size. if you wear regular L size then you have to order size XL in here.</p>
                                            </div> */}
                                        </div>
                                        <Row>
                                            <Col lg={12}>
                                                <br />
                                                <h5 className="fw-600 text-center">
                                                    <Link to="/login" className="login-btn me-2">
                                                        Login
                                                    </Link>
                                                    To Review
                                                </h5>
                                                <br />
                                                {/* <h4 className="title mb-0">Review</h4>
                                                <div className="star-area">
                                                    <StarRatings
                                                        rating={ratings.rating}
                                                        isSelectable={true}
                                                        starRatedColor={'#fece37'}
                                                        starHoverColor={'#fece37'}
                                                        starSpacing={'0px'}

                                                        starDimension="20px"
                                                        isAggregateRating={false}
                                                        changeRating={changeRating}
                                                    />
                                                </div>
                                                <div className="write-comment-area pt-4">
                                                    <div className="mb-4">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Your Review" />
                                                    </div>
                                                    <Button className="submit-btn text-uppercase">Submit</Button>
                                                </div> */}
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
                                                    <Link to="/login" className="login-btn me-2">
                                                        Login
                                                    </Link>
                                                    To Comment
                                                </h5>
                                                <br />
                                                {/* <h4 className="title mb-0">Write Comment</h4>
                                                <div className="write-comment-area pt-4">
                                                    <div className="mb-3">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Write Your Comments Here..." />
                                                    </div>
                                                    <Button className="submit-btn text-uppercase">Post Comment</Button>
                                                </div> */}
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