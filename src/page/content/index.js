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
import LastestNews from './lastestNews'

const AppContent = () => {
    return (
        <main className='main-content'>
            <MainView />
            <div className='container'>
                <div className='free-view'>
                    <FreeView />
                </div>
                <div className='container-left'>
                    <div className='content top-rate'>
                        <TopRated />
                        <img src={sale30Img} className="sale30_img" alt="" />
                    </div>
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
                        <img src={sale50Img} className="sale50_img" alt="" />
                    </div>
                    <div className='content special-products'>
                        <SpecialProducts />
                    </div>
                    <div className='content news-letter'>
                        <NewsLetter />
                    </div>
                </div>

                <div className='content category'>
                    <img src={newCasualImg} className="new-casual-img" alt="" />
                    <img src={newArrivalImg} className="new-arrival-img" alt="" />
                </div>
                <div className='content lastest-news'>
                    <LastestNews />
                </div>
            </div>
            <div className='video-intro'>
                <img src={fashionVideoImg} className='intro-img' alt="" />
            </div>
        </main >
    )
}

export default AppContent
