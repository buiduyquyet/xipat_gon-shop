import { CaretRightOutlined, CommentOutlined, LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import './lastest-news.scss'
import lastestNewsImg from '../../../assest/lastest-news.png'

const LastestNews = () => {
    return (
        <div className='lastest-news'>
            <Row className='lastest-news__title' align='middle' justify='space-between'>
                <Col span={1}><LeftSquareOutlined /></Col>
                <Col span={22}><h2>Lastest News</h2></Col>
                <Col span={1}><RightSquareOutlined /></Col>
            </Row>
            <Row className='lastest-news__content' justify='space-between' gutter={[16, 16]}>
                <Col className='lastest-news__item' md={7} xl={6} >
                    <img src={lastestNewsImg} alt="" />
                    <h4>Vestibulum sapien turpis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula rhoncus, lacinia ligula sed, ullamcorper ipsum. Nullam sed facilisis leo.</p>
                    <Row justify={'space-between'}>
                        <Col span={10}>
                            <p><CaretRightOutlined /> Read More</p>
                        </Col>
                        <Col span={10}>
                            <p><CommentOutlined style={{ color: "#37DFC0" }} /> 5</p>
                        </Col>
                    </Row>
                </Col>
                <Col className='lastest-news__item' md={7} xl={6}>
                    <img src={lastestNewsImg} alt="" />
                    <h4>Vestibulum sapien turpis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula rhoncus, lacinia ligula sed, ullamcorper ipsum. Nullam sed facilisis leo.</p>
                    <Row justify={'space-between'}>
                        <Col span={10}>
                            <p><CaretRightOutlined /> Read More</p>
                        </Col>
                        <Col span={10}>
                            <p><CommentOutlined style={{ color: "#37DFC0" }} /> 5</p>
                        </Col>
                    </Row>
                </Col>
                <Col className='lastest-news__item' md={7} xl={6} >
                    <img src={lastestNewsImg} alt="" />
                    <h4>Vestibulum sapien turpis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula rhoncus, lacinia ligula sed, ullamcorper ipsum. Nullam sed facilisis leo.</p>
                    <Row justify={'space-between'}>
                        <Col span={10}>
                            <p><CaretRightOutlined /> Read More</p>
                        </Col>
                        <Col span={10}>
                            <p><CommentOutlined style={{ color: "#37DFC0" }} /> 5</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default LastestNews
