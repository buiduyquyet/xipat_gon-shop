import React from 'react'
import './main-view.scss'

const MainView = () => {
    return (
        <section className="main-view">
            <div className="content">
                <h3>Spring Summer 2023</h3>
                <h2>New High Collection</h2>
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
