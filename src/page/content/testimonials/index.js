import React from 'react'
import './testimonials.scss'
import developerImg from '../../../assest/developer.jpg'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials-title'>
                <h3>Testimonials</h3>
            </div>
            <p className='testimonials-infor'>"Enjoy our newsletter to stay updated with news and special sales. Let's your email address here!"</p>
            <img src={developerImg} className="developer-img" alt="" />
            <h4>JOHN HENDRY DOE</h4>
            <p className='testimonials-dev'>Developer</p>
            <div className='group-btn'>
                <LeftSquareOutlined />
                <RightSquareOutlined />
            </div>
        </div>
    )
}

export default Testimonials
