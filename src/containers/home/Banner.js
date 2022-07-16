import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div className="slider-with-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="slider-area">
                            <div className="slider-active">
                                <Swiper
                                    slidesPerView={1}
                                >
                                    <SwiperSlide> <div className="single-slide align-center-left  animation-style-01 bg-1">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                            <h2>Chamcham Galaxy S9 | S9+</h2>
                                            <h3>Starting at <span>$1209.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <Link to='/products' className="links" href="shop-left-sidebar.html">Shopping Now</Link>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="single-slide align-center-left animation-style-02 bg-2">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$824.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <Link to='/products' className="links" href="shop-left-sidebar.html">Shopping Now</Link>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="single-slide align-center-left animation-style-01 bg-3">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$1849.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <Link to='/products' className="links" href="shop-left-sidebar.html">Shopping Now</Link>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div className="li-banner">
                            <Link to='/products'>
                                <img src={process.env.PUBLIC_URL + `/assets/images/banner/1_1.jpg`} alt="" />
                            </Link>
                        </div>
                        <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                            <Link to='/products'>
                                <img src={process.env.PUBLIC_URL + `/assets/images/banner/1_2.jpg`} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner