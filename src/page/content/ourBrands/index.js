import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import React from 'react'
import './our-brands.scss'

import brandsImg from '../../../assest/brands.jpg'
import { Col, Row } from 'antd'

const OurBrands = () => {
    return (
        <div className='our-brands'>
            <div className='our-brands__title'>
                <h3>Our Brands</h3>
            </div>
            <Row justify='space-around'>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
            </Row>
            <Row justify='space-around'>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
            </Row>
            <Row justify='space-around'>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
                <Col span={8}>
                    <img src={brandsImg} alt="" />
                </Col>
            </Row>
            <div className='group-btn'>
                <LeftSquareOutlined />
                <RightSquareOutlined />
            </div>
        </div>
    )
}

export default OurBrands
