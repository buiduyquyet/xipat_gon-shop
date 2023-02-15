import React from 'react'
import { MailOutlined, PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import logoImg from '../../assest/gon_shop.png'
import Navbar from '../../component/navbar';
import './header.scss'
import { Col, Input, Row, Select } from 'antd';
const { Search } = Input;

const AppHeader = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <header className='header'>
            <Row className='header-top' justify='space-around'>
                <Col className='header-top__left' span={12}>
                    <span><MailOutlined /> theme_sky@gmail.com</span>
                    <span><PhoneOutlined /> +189.234.5679</span>
                </Col>
                <Col className='header-top__right' span={8}>
                    <span>English</span>
                    <span>USD</span>
                    <span>Wishlist(0)</span>
                    <span>Login/Register</span>
                </Col>
            </Row>
            <Row className='header-main' justify='space-around'>
                <Col span={8}>
                    <div className='header-main__left'>
                        <img src={logoImg} alt="Logo Gon Shop" />
                    </div>
                </Col>
                <Col span={12}>
                    <Row align='middle'>
                        <Col span={6}>
                            <Select
                                defaultValue="all"
                                size='large'
                                style={{
                                    width: 180,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'all',
                                        label: 'All Category',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={6}>
                            <Search
                                placeholder="Input search text"
                                size='large'
                                style={{
                                    width: 245,
                                }}
                            />
                        </Col>
                        <Col span={6} offset={2}>
                            <div className='cart'>
                                <span><ShoppingCartOutlined /></span>
                                <span>Cart: $0.00</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='header-navbar'>
                <Navbar />
            </div>
        </header>
    )
}

export default AppHeader
