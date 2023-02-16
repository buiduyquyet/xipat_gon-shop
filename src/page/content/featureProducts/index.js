import { LeftSquareOutlined, RightSquareOutlined, StarFilled } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import './feature-products.scss'

import productImg from '../../../assest/free-img.jpg'

const FeatureProducts = () => {
    return (
        <div className='feature-product'>
            <Row className='titles' justify='center'>
                <Col className="gutter-row" span={1}>
                    <div className='icons-prev'>
                        <LeftSquareOutlined />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className='title-item new-arrivals'>
                        <h3>New Arrivals</h3>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className='title-item feature'>
                        <h3>Feature Products</h3>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className='title-item best-sellers'>
                        <h3>Best Sellers</h3>
                    </div>
                </Col>
                <Col className="gutter-row" span={1}>
                    <div className='icons-next'>
                        <RightSquareOutlined />
                    </div>
                </Col>
            </Row>

            <div className='products'>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='products-item'>
                    <img src={productImg} alt="" />
                    <div className='products__content'>
                        <h2>Short</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureProducts
