import { BarsOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react'
import './navbar.scss'

const items = [
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

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3 className='shop-by'><BarsOutlined /> Shop By Category</h3>
            <ul>
                <li>Home</li>
                <li>
                    <Dropdown
                        menu={{
                            items,
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
                            items,
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
                            items,
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
                            items,
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
                            items,
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
        </nav>
    )
}

export default Navbar
