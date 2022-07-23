import React from 'react'

const AboutHeader = () => {
    return (
        <div className="about-us-wrapper pt-60 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-last order-lg-first">
                        <div className="about-text-wrap">
                            <h2><span>Provide Best</span>Product For You</h2>
                            <p>We provide the best Beard oile all over the world. We are the worldd best store in indi for Beard Oil. You can buy our product without any hegitation because they truste us and buy our product without any hagitation because they belive and always happy buy our product.</p>
                            <p>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy to buy our product.</p>
                            <p>We provide the beshat they trusted us and buy our product without any hagitation because they belive us and always happy to buy.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10">
                        <div className="about-image-wrap">
                            <img className="img-full" src={process.env.PUBLIC_URL + `/assets/images/product/large-size/13.jpg`} alt="About Us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader