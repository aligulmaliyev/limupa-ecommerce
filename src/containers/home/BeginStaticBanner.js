import React from 'react'
import { Link } from 'react-router-dom'

const BeginStaticBanner = () => {
    return (
        <div className="li-static-home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="li-static-home-image"></div>
                        <div className="li-static-home-content">
                            <p>Sale Offer<span>-20% Off</span>This Week</p>
                            <h2>Featured Product</h2>
                            <h2>Meito Accessories 2018</h2>
                            <p className="schedule">
                                Starting at
                                <span> $1209.00</span>
                            </p>
                            <div className="default-btn">
                                <Link to="/products" className="links">Shopping Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeginStaticBanner