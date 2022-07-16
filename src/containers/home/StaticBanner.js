import React from 'react'
import { Link } from 'react-router-dom'

const StaticBanner = () => {
    return (
        <div className="li-static-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 text-center">
                        <div className="single-banner">
                            <Link to="/products">
                                <img src={process.env.PUBLIC_URL + `/assets/images/banner/1_3.jpg`} alt="Li's Static Banner" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div className="single-banner">
                            <Link to="/products">
                                <img src={process.env.PUBLIC_URL + `/assets/images/banner/1_4.jpg`} alt="Li's Static Banner" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div className="single-banner">
                            <Link to="/products">
                                <img src={process.env.PUBLIC_URL + `/assets/images/banner/1_5.jpg`} alt="Li's Static Banner" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticBanner