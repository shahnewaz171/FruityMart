import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-modal';
import ImageMagnify from '../../Product/ImageMagnify/ImageMagnify';
import ProductMainInfo from '../../Product/ProductMainInfo/ProductMainInfo';
import { ProductViewContext } from '../CategorizeProducts/CategorizeProducts';
import './ProductViewModal.css';

const ProductViewModal = () => {
    const { modalIsOpen, setIsOpen } = useContext(ProductViewContext);

    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="productViewModal"
                overlayClassName="productViewOverlay"
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Product Quick View"
            >
                <div className="pb-1 pt-3 product-details quickView">
                    <Row>
                        <Col lg={5} className="col-12">
                            <ImageMagnify width={"150%" || ""} height={"135%" || ""} />
                        </Col>
                        <Col lg={7} className="col-12">
                            <ProductMainInfo />
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    );
};

export default ProductViewModal;