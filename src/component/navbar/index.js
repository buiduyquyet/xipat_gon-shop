import { BarsOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import React from 'react'
import './navbar.scss'

const items1 = [
    {
        label: <a href="#">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="#">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const items2 = [
    {
        label: <a href="#">Home</a>,
        key: '1',
    },
    {
        label: <a href="#">Shop</a>,
        key: '2',
    },
    {
        label: <a href="#">Blog</a>,
        key: '3',
    },
    {
        label: <a href="#">Shortcode</a>,
        key: '4',
    },
    {
        label: <a href="#">Page</a>,
        key: '5',
    },
    {
        label: <a href="#">Theme Features</a>,
        key: '6',
    },
    {
        label: <a href="#">Contact us</a>,
        key: '7',
    },
];

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3 className='shop-by'><BarsOutlined /> Shop By Category</h3>
            <ul className='list-navbar'>
                <li>Home</li>
                <li>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Shop
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Blog
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Shortcode
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Page
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown
                        menu={{
                            items: items1,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Theme Features
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>Contact Us</li>
            </ul>
            <div className='menu-icon'>
                <Dropdown
                    menu={{ items: items2 }}
                    trigger={['click']}
                >
                    <BarsOutlined onClick={(e) => e.preventDefault()} />
                </Dropdown>
            </div>
        </nav>
    )
}

export default Navbar
