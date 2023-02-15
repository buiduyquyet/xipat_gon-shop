import React from 'react'
import './special-products.scss'
import productImg from '../../../assest/free-img.jpg'
import { StarFilled } from '@ant-design/icons'
import { Col, Row } from 'antd'

// dựng 1 cpn product card

const SpecialProducts = () => {
    return (
        <div className='special-products'>
            <div className='special-products__title'>
                <h3>Special Products</h3>
            </div>

            <div className='special-products__content'>
                <div className='new-products'>
                    <img src={productImg} alt="" />
                    <div className='new-products__content'>
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
                <div className='other-products'>
                    <Row>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                        <Col>
                            <img src={productImg} alt="" />
                            <div className='other-products__content'>
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
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default SpecialProducts
