import React from 'react'
import './main-view.scss'

const MainView = () => {
    return (
        <section className="main">
            <div className="content">
                <h5>Spring Summer 2023</h5>
                <h3>New High Collection</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                <div className='group-btn'>
                    <button className='btn__view-more'>View More</button>
                    <button className='btn__buy__now'>Buy Now</button>
                </div>
            </div>

        </section>
    )
}

export default MainView
