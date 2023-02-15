import React from 'react'
import FreeView from './freeView'
import MainView from './mainView'
import './content.scss'
import TopRated from './topRated'
import FeatureProducts from './featureProducts'
import sale50Img from '../../assest/sale50-img.png'
import sale30Img from '../../assest/sale30-img.png'
import newCasualImg from '../../assest/new-shoe-casual.png'
import newArrivalImg from '../../assest/new-arrivals.png'
import fashionVideoImg from '../../assest/fashion-video.png'

import SpecialProducts from './specialProducts'
import NewsLetter from './newsLetter'
import Testimonials from './testimonials'
import OurBrands from './ourBrands'
import { Col, Row } from 'antd'
import LastestNews from './lastestNews'

const AppContent = () => {
    return (
        <main className='main-content'>
            <MainView />
            <div className='container'>
                <FreeView />
                <div style={{ display: 'flex' }}>
                    <div className='container-left'>
                        <div className='content top-rate'>
                            <TopRated />
                        </div>
                        <img src={sale30Img} className="sale30_img" alt="" />
                        <div className='content testimonials'>
                            <Testimonials />
                        </div>
                        <div className='content brands'>
                            <OurBrands />
                        </div>
                    </div>
                    <div className='container-right'>
                        <div className='content feature-products'>
                            <FeatureProducts />
                        </div>
                        <img src={sale50Img} className="sale50_img" alt="" />
                        <div className='content special-products'>
                            <SpecialProducts />
                        </div>
                        <div className='content news-letter'>
                            <NewsLetter />
                        </div>
                    </div>
                </div>

                <div className='content category'>
                    <Row>
                        <Col span={10}>
                            <img src={newCasualImg} alt="" />
                        </Col>
                        <Col span={10} offset={2}>
                            <img src={newArrivalImg} style={{ marginLeft: '20px' }} alt="" />
                        </Col>
                    </Row>
                </div>
                <div className='content lastest-news'>
                    <LastestNews />
                </div>
            </div>
            <div className='video-intro'>
                <img src={fashionVideoImg} alt="" />
            </div>

        </main>
    )
}

export default AppContent
