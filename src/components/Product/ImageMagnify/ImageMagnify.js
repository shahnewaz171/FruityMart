import React from 'react';
import { Image } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import pdSlideImg from './pdSlideImg';

const ImageMagnify = ({width, height}) => {
    const { productImg300, productImg1200 } = pdSlideImg;
    const imageClick = () => {
        console.log('Click');
      }

    return (
        <>
            <div className="mx-3 displayed-img">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: productImg300[0]
                    },
                    largeImage: {
                        src: productImg1200[0],
                        width: 1400,
                        height: 1000
                    },
                    enlargedImageContainerDimensions: {
                        width: width || "200%",
                        height: height || "150%"
                    },
                    className: "img-magnify"
                }} />
            </div>
            <div className="product-img-thumbs d-flex">
                {productImg300.map((item, i) => {
                    return (
                        <div key={i} className="thumb">
                            <Image src={item} fluid />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ImageMagnify;