import { Input } from 'antd'
import React from 'react'
import './news-letter.scss'

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h2>NewsLetter</h2>
            <p>Enjoy our newsletter to stay updated with news and special sales. Let's your email address here!</p>
            <div className='container-email'>
                <Input placeholder='Enter your email address ' size='large' />
                <button type="submit">Read More</button>
            </div>
        </div>
    )
}

export default NewsLetter
