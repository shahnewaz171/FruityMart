import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from 'react-image-magnify';
import localImages from '../../shared/localImages';
import productImg from './pdSlideImg';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productImg300, productImg1200 } = productImg;

    console.log(productImg300)

    const settings = {
        customPaging: function(i) {
          return (
            <div>
                <Image src={productImg300[i]} fluid />
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots custom-indicator",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="product-details mb-5 pb-5">
            <Container className="custom-container">
               <Row>
                   <Col lg={9}>
                       <Row>
                           <Col lg={5}>
                               <div className="mx-3 displayed-img">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: productImg300[0]
                                        },
                                        largeImage: {
                                            src:  productImg1200[0],
                                            width: 800,
                                            height: 800
                                        }
                                    }} />
                                     <Slider {...settings} >
                                        {productImg300.map((item, i) => {
                                            return (
                                                <div className="outline-none">
                                                    <Image src={item} fluid />
                                                </div>
                                            )
                                        })}
                                    </Slider>
                               </div>
                           </Col>
                           <Col lg={7}>
                               <div>
                                   Image Details
                               </div>
                           </Col>
                       </Row>
                   </Col>
                   <Col lg={3}>
                       <div>a</div>
                   </Col>
               </Row>
            </Container>
        </section>
    );
};

export default ProductDetails;