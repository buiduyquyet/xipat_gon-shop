import { CopyrightOutlined, FacebookOutlined, GooglePlusOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Col, Divider, Row } from 'antd'
import React from 'react'
import './footer.scss'
import footer1Img from '../../assest/footer1.png'
import footerLogoImg from '../../assest/logoFooter.png'
import flickrImg from '../../assest/flickr.jpg'

const AppFooter = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <Row justify='center' gutter={[16, 16]}>
                    <Col className='about-us' md={12} xl={12} xxl={4}>
                        <h2>About us</h2>
                        <p><span>Office:</span> 868 Fake Street, New York</p>
                        <p><span>Phone:</span> (08) 882763354</p>
                        <p><span>Fax:</span> (08) 0847521499</p>
                        <p><span>Email:</span> info@theme-sky.com</p>
                        <div className='social-icon'>
                            <FacebookOutlined />
                            <InstagramOutlined />
                            <TwitterOutlined />
                            <GooglePlusOutlined />
                            <YoutubeOutlined />
                        </div>
                    </Col>
                    <Col className='information' md={12} xl={12} xxl={4}>
                        <h2>Information</h2>
                        <p>Frequently</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Term & Conditions</p>
                        <p>Customer Service</p>
                    </Col>
                    <Col className='recent-posts' md={12} xl={12} xxl={4}>
                        <h2>Recent Posts</h2>
                        <div className='recent-posts__content'>
                            <img src={footer1Img} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <hr />
                        <div className='recent-posts__content'>
                            <img src={footer1Img} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </Col>
                    <Col className='flickr' md={12} xl={12} xxl={4}>
                        <h2>Flickr</h2>
                        <div className='flickr-imgs'>
                            <img src={flickrImg} alt="" />
                            <img src={flickrImg} alt="" />
                            <img src={flickrImg} alt="" />
                            <img src={flickrImg} alt="" />
                            <img src={flickrImg} alt="" />
                            <img src={flickrImg} alt="" />
                        </div>
                    </Col>
                </Row>
                <Divider><img src={footerLogoImg} alt="" /></Divider>
                <p className='copyright'><CopyrightOutlined /> 2015 Gonshop. All Rights Reserved. Theme by theme-sky.com</p>
            </div>
        </footer>
    )
}

export default AppFooter
