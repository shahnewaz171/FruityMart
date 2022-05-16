import React from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AccountInfo = () => {

    return (
        <div className="user-dashboard mt-5">
            <Container className="custom-container">
                <Row>
                    <Col lg={4}>
                        <div className="account-info">
                            <div className="header-area pb-3">
                                <h4 className="fw-600 mb-0 title">Account Information</h4>
                            </div>
                            <div className="main-info mt-3">
                                <h5 className="fw-600 text-uppercase title">User</h5>
                                <ul className="list-inline list">
                                    <li>
                                        <p className="mb-0">
                                            <span className="fw-600 me-1">Name:</span>
                                            Muhammad Shahnewaz
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <span className="fw-600 me-1">Email:</span>
                                            user@gmail.com
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <span className="fw-600 me-1">Phone:</span>
                                            34534534534
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <span className="fw-600 me-1">City:</span>
                                            Dhaka
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <span className="fw-600 me-1">Address:</span>
                                            Test Address
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="account-info">
                            <div className="header-area pb-3">
                                <h4 className="fw-600 mb-0 title">Order History</h4>
                            </div>
                            <div className="main-info">
                                <div className="order-table mt-4">
                                    <Row>
                                        <Col sm={12}>
                                            <div className="data-table-length pb-1 mb-3">
                                                <label htmlFor="" className="mb-2">
                                                    Show
                                                    <select className="custom-select custom-select-sm form-control form-control-sm mx-1">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    entries
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Table className="table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>#Order</th>
                                                        <th>Date</th>
                                                        <th>Order Total</th>
                                                        <th>Order Status</th>
                                                        <th>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>NCcj1636059762</td>
                                                        <td>04 Nov 2021</td>
                                                        <td>$0</td>
                                                        <td>
                                                            <div className="rounded-pill text-white text-center d-inline-block order-status">Pending</div>
                                                        </td>
                                                        <td>
                                                            <Link to="/carts" variant="outline-success" className="rounded-pill d-inline-block text-center fw-600 text-uppercase viewOrder-Btn">View Order</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>NCcj1636059762</td>
                                                        <td>04 Nov 2021</td>
                                                        <td>$0</td>
                                                        <td>
                                                            <div className="rounded-pill text-white text-center d-inline-block order-status">Pending</div>
                                                        </td>
                                                        <td>
                                                            <Link to="/carts" variant="outline-success" className="rounded-pill d-inline-block text-center fw-600 text-uppercase viewOrder-Btn">View Order</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>NCcj1636059762</td>
                                                        <td>04 Nov 2021</td>
                                                        <td>$0</td>
                                                        <td>
                                                            <div className="rounded-pill text-white text-center d-inline-block order-status">Pending</div>
                                                        </td>
                                                        <td>
                                                            <Link to="/carts" variant="outline-success" className="rounded-pill d-inline-block text-center fw-600 text-uppercase viewOrder-Btn">View Order</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AccountInfo;