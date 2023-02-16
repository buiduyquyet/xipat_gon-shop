import { StarFilled } from '@ant-design/icons'
import React from 'react'
import './top-rated.scss'

import productImg from '../../../assest/free-img.jpg'
import { Col, Row } from 'antd'

const TopRated = () => {
    return (
        <div className='top-rated'>
            <div className='top-rated__title'>
                <h3>Top Rated</h3>
            </div>
            <div className='top-rated__container'>
                <div className='top-rated__item'>
                    <img src={productImg} alt="" />
                    <div className='top-rated__content'>
                        <h2>T-shirt</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='top-rated__item'>

                    <img src={productImg} alt="" />

                    <div className='top-rated__content'>
                        <h2>T-shirt</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
                <div className='top-rated__item'>

                    <img src={productImg} alt="" />

                    <div className='top-rated__content'>
                        <h2>T-shirt</h2>
                        <h4>Cras ipsum massa</h4>
                        <p>$20.99</p>
                        <div className='star-icon'>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRated
