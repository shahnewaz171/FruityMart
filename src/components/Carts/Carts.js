import React from 'react';
import { Card, Col, Container, Image, Row, Table } from 'react-bootstrap';
import { CgCloseR } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import localImages from '../shared/localImages';
import './Carts.css';

const Carts = () => {

    return (
        <div className="pd-carts my-5">
            <Container className="custom-container">
                <Row>
                    <Col lg={8} className="col-12">
                        <div className="cart-table">
                            <Table className="table-borderless">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th width="30%">Details</th>
                                        <th className="text-nowrap">Unit Price</th>
                                        <th>SubTotal</th>
                                        <th>
                                            <CgCloseR />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(2)].map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="cart-pd d-inline-block">
                                                    <div className="item">
                                                        <Image src={localImages.lemon} fluid />
                                                        <p className="fw-600">
                                                            <Link to="/a">
                                                                Organic Lemon
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </td>
                                                <td />
                                                <td className="unit-price">
                                                    <p className="fw-700 fz-14 mb-0 price">23$</p>
                                                    <div className="qty">
                                                        <ul className="list-inline">
                                                            <li>
                                                                <span className="qtMinus">
                                                                    <FiMinus />
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="qtTotal">1</span>
                                                            </li>
                                                            <li>
                                                                <span className="qtPlus">
                                                                    <FiPlus />
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td className="total-price">
                                                    <p className="fw-700 mb-0">23$</p>
                                                </td>
                                                <td>
                                                    <span className="removeCart">
                                                        <FaTrashAlt />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col lg={4} className="col-12">
                        <div className="order-box mt-4 mt-lg-0">
                            <h4 className="text-uppercase fw-700 mb-3 title">Price Details</h4>
                            <ul className="list-inline order-list mb-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fz-14 fw-600 dark-gray">Total MRP</p>
                                    <p className="fz-14 fw-700">45$</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fz-14 fw-600 dark-gray">Discount</p>
                                    <p className="fz-14 fw-700">0$</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fz-14 fw-600 dark-gray">Tax</p>
                                    <p className="fz-14 fw-700">0%</p>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-between fw-600 pt-2">
                                <p>Total</p>
                                <p>45$</p>
                            </div>
                            <div className="mt-3 text-center">
                                <Link to="/a" className="px-5 py-2 order-btn">Place Order</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Carts;