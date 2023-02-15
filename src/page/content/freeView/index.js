import { Col, Row } from 'antd'
import React from 'react'
import './free-view.scss'

const FreeView = () => {
    return (
        <div className='content free-view'>
            <Row>
                <Col span={8} className="free-view__shipping">
                    <img src="" alt="" />
                    <div className='free-view__text'>
                        <h2>Free <i>Shipping</i></h2>
                        <p>on all orders over $5.000</p>
                    </div>
                </Col>
                <Col span={8} className="free-view__return">
                    <img src="" alt="" />
                    <div className='free-view__text'>
                        <h2>Free <i>Return</i></h2>
                        <p>only for all orders over $10.000</p>
                    </div>
                </Col>
                <Col span={8} className="free-view__support">
                    <img src="" alt="" />
                    <div className='free-view__text'>
                        <h2>Free <i>Support</i></h2>
                        24/7 from Monday to Friday
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FreeView
