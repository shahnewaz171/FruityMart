import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MainMenu.css';

const MainMenu = () => {

    return (
        <div className="mainMenu-area">
            <Container className="custom-container">
                <Row>
                    <Col lg={3}>
                        <h5>ALl Categories</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainMenu;