import React from 'react'
import { BarsOutlined, MailOutlined, PhoneOutlined, ShoppingFilled } from '@ant-design/icons'
import logoImg from '../../assest/gon_shop.png'
import Navbar from '../../component/navbar';
import './header.scss'
import { Col, Dropdown, Row } from 'antd';

const items1 = [
    {
        label: <a href="#"><MailOutlined /> theme_sky@gmail.com</a>,
        key: '0',
    },
    {
        label: <a href="#"><PhoneOutlined /> +189.234.5679</a>,
        key: '1',
    },
];

const items2 = [
    {
        label: <a href="#">English</a>,
        key: '0',
    },
    {
        label: <a href="#">USD</a>,
        key: '1',
    },
    {
        label: <a href="#">Wishlist(0)</a>,
        key: '2',
    },
    {
        label: <a href="#">Login/Register</a>,
        key: '2',
    },
];

const AppHeader = () => {
    return (
        <header className='header'>
            <Row className='header-top' justify='end'>
                <Col className='header-top__left' span={10}>
                    <span><MailOutlined /> theme_sky@gmail.com</span>
                    <span><PhoneOutlined /> +189.234.5679</span>
                </Col>
                <Col span={10} className='header-top__respon'>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>

                            <span ><BarsOutlined />Contact</span>
                        </a>
                    </Dropdown>
                </Col>
                <Col className='header-top__right' span={10}>
                    <span>English</span>
                    <span>USD</span>
                    <span>Wishlist(0)</span>
                    <span>Login/Register</span>
                </Col>
                <Col span={10} className='header-top__respon'>
                    <Dropdown
                        menu={{
                            items: items2,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <span ><BarsOutlined /> Login/Register</span>
                        </a>
                    </Dropdown>
                </Col>
            </Row>

            <div className='header-main'>
                <div className='header-main__left'>
                    <img src={logoImg} alt="Logo Gon Shop" />
                </div>
                <div className='header-main__right'>
                    <div className='group-filter'>
                        <select>
                            <option value="0">All Category</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                        </select>
                        <div className='group-search'>
                            <input type="text" className='input-search' placeholder="Search for products" />
                        </div>
                    </div>
                    <div className='group-cart'>
                        <div className='cart'>
                            <ShoppingFilled className='cart-icon' />
                            <span>Cart: $0.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-navbar'>
                <Navbar />
            </div>
        </header>
    )
}

export default AppHeader
