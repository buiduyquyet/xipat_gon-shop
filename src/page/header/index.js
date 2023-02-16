import React from 'react'
import { MailOutlined, PhoneOutlined, SearchOutlined, ShoppingFilled } from '@ant-design/icons'
import logoImg from '../../assest/gon_shop.png'
import Navbar from '../../component/navbar';
import './header.scss'
import { Col, Row } from 'antd';

const AppHeader = () => {
    return (
        <header className='header'>
            <Row className='header-top' justify='space-around'>
                <Col className='header-top__left' span={6}>
                    <span><MailOutlined /> theme_sky@gmail.com</span>
                    <span><PhoneOutlined /> +189.234.5679</span>
                </Col>
                <Col className='header-top__right' span={6}>
                    <span>English</span>
                    <span>USD</span>
                    <span>Wishlist(0)</span>
                    <span>Login/Register</span>
                </Col>
            </Row>
            <Row className='header-main' justify='space-around' align='middle'>
                <Col span={10} className='header-main__left'>
                    <div>
                        <img src={logoImg} alt="Logo Gon Shop" />
                    </div>
                </Col>
                <Col span={12} className='header-main__right'>
                    <Row align='middle'>
                        <Col span={12} className='group-search'>
                            <select>
                                <option value="0">All Category</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                            </select>
                            <input type="text" className='input-search' placeholder="Search for products" />
                            <button type="submit" className='btn-search'><SearchOutlined /></button>
                        </Col>
                        <Col span={6} className='group-cart'>
                            <div className='cart'>
                                <ShoppingFilled className='cart-icon' />
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
